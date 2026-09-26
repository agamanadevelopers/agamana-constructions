'use client';

import { useEffect, useRef, useState } from 'react';
import { useEstimate } from './EstimateProvider';
import { site, whatsappLink } from '@/data/site';
import { ArrowRight, Check, Close, WhatsApp } from '@/components/icons';

const BUILD_TYPES = [
  'Home',
  'Villa',
  'Farmhouse',
  'Commercial',
  'Hospitality',
  'Renovation',
  'Other',
];
const SITES = ['Bengaluru', 'Shimoga', 'Sagara', 'Other'];
const AREAS = [
  'Under 1,000 sq.ft',
  '1,000–1,500 sq.ft',
  '1,500–2,000 sq.ft',
  '2,000–3,000 sq.ft',
  '3,000+ sq.ft',
  'Not sure',
];

interface FormState {
  buildType: string;
  location: string;
  area: string;
  name: string;
  phone: string;
  email: string;
}

const emptyForm: FormState = {
  buildType: '',
  location: '',
  area: '',
  name: '',
  phone: '',
  email: '',
};

const TOTAL_STEPS = 4;

export default function EstimateModal() {
  const { isOpen, initialType, close } = useEstimate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const dialogRef = useRef<HTMLDivElement>(null);

  // Reset + seed on open
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setSubmitted(false);
      setError('');
      setForm({ ...emptyForm, buildType: initialType ?? '' });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialType]);

  // Esc to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    dialogRef.current?.focus();
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

  if (!isOpen) return null;

  const set = (patch: Partial<FormState>) => setForm((f) => ({ ...f, ...patch }));

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const canProceed =
    (step === 1 && form.buildType) ||
    (step === 2 && form.location) ||
    (step === 3 && form.area) ||
    step === 4;

  const summaryMessage = () =>
    [
      'Hi Agamana Constructions, I would like a construction estimate.',
      form.buildType && `• Building: ${form.buildType}`,
      form.location && `• Location: ${form.location}`,
      form.area && `• Approx. area: ${form.area}`,
      form.name && `• Name: ${form.name}`,
      form.phone && `• Phone: ${form.phone}`,
      form.email && `• Email: ${form.email}`,
    ]
      .filter(Boolean)
      .join('\n');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError('Please share your name and phone number so we can reach you.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="estimate-title"
    >
      {/* Backdrop */}
      <button
        aria-label="Close estimate form"
        onClick={close}
        className="absolute inset-0 bg-brand-deep/50 backdrop-blur-sm"
      />

      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl bg-cream shadow-cardHover outline-none sm:rounded-3xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-black/[0.06] bg-white px-5 py-4 sm:px-6">
          <div>
            <p className="eyebrow">Get a Construction Estimate</p>
            <p className="mt-0.5 text-sm text-muted">
              {submitted ? 'One last step' : `Step ${step} of ${TOTAL_STEPS}`}
            </p>
          </div>
          <button
            onClick={close}
            aria-label="Close"
            className="flex h-10 w-10 items-center justify-center rounded-full text-muted hover:bg-brand-mist hover:text-brand"
          >
            <Close />
          </button>
        </div>

        {/* Progress */}
        {!submitted && (
          <div className="h-1 w-full bg-brand-mistDeep">
            <div
              className="h-full bg-brand-green transition-all duration-300"
              style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
            />
          </div>
        )}

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-6">
          {submitted ? (
            <SuccessView message={summaryMessage()} onClose={close} />
          ) : (
            <>
              {step === 1 && (
                <StepChoices
                  title="What are you planning to build?"
                  options={BUILD_TYPES}
                  value={form.buildType}
                  onSelect={(v) => {
                    set({ buildType: v });
                    setTimeout(next, 150);
                  }}
                />
              )}
              {step === 2 && (
                <StepChoices
                  title="Where is your site?"
                  options={SITES}
                  value={form.location}
                  onSelect={(v) => {
                    set({ location: v });
                    setTimeout(next, 150);
                  }}
                />
              )}
              {step === 3 && (
                <StepChoices
                  title="Approximate built-up area?"
                  options={AREAS}
                  value={form.area}
                  onSelect={(v) => {
                    set({ area: v });
                    setTimeout(next, 150);
                  }}
                />
              )}
              {step === 4 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-semibold text-brand sm:text-2xl">
                    Tell us how we can reach you
                  </h3>
                  <Field
                    label="Name"
                    required
                    value={form.name}
                    onChange={(v) => set({ name: v })}
                    autoComplete="name"
                  />
                  <Field
                    label="Phone number"
                    required
                    type="tel"
                    inputMode="tel"
                    value={form.phone}
                    onChange={(v) => set({ phone: v })}
                    autoComplete="tel"
                  />
                  <Field
                    label="Email (optional)"
                    type="email"
                    value={form.email}
                    onChange={(v) => set({ email: v })}
                    autoComplete="email"
                  />
                  {error && (
                    <p className="text-sm font-medium text-red-600" role="alert">
                      {error}
                    </p>
                  )}
                  <button type="submit" className="btn-primary group w-full">
                    Get My Estimate
                    <ArrowRight className="btn-arrow" width={18} height={18} />
                  </button>
                </form>
              )}
            </>
          )}
        </div>

        {/* Footer nav */}
        {!submitted && (
          <div className="flex items-center justify-between border-t border-black/[0.06] bg-white px-5 py-3 sm:px-6">
            <button
              onClick={back}
              disabled={step === 1}
              className="flex min-h-[44px] items-center px-2 text-sm font-semibold text-muted disabled:opacity-0"
            >
              ← Back
            </button>
            {step < 4 && (
              <button
                onClick={next}
                disabled={!canProceed}
                className="flex min-h-[44px] items-center px-2 text-sm font-semibold text-brand disabled:opacity-30"
              >
                Skip →
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function StepChoices({
  title,
  options,
  value,
  onSelect,
}: {
  title: string;
  options: string[];
  value: string;
  onSelect: (v: string) => void;
}) {
  return (
    <div>
      <h3 className="mb-5 text-xl font-semibold text-brand sm:text-2xl">{title}</h3>
      <div className="grid grid-cols-2 gap-3">
        {options.map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              onClick={() => onSelect(opt)}
              className={`flex min-h-[56px] items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-all ${
                active
                  ? 'border-brand bg-brand text-white'
                  : 'border-black/10 bg-white text-ink hover:border-brand hover:bg-brand-mist'
              }`}
            >
              {opt}
              {active && <Check width={16} height={16} />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  required,
  autoComplete,
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: 'tel' | 'text' | 'email';
}) {
  const id = label.toLowerCase().replace(/[^a-z]/g, '-');
  return (
    <label htmlFor={id} className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-brand-green"> *</span>}
      </span>
      <input
        id={id}
        type={type}
        required={required}
        inputMode={inputMode}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-black/12 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand-green/30"
      />
    </label>
  );
}

function SuccessView({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div className="py-4 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-mist text-brand">
        <Check width={28} height={28} />
      </div>
      <h3 className="text-2xl font-semibold text-brand">Thank you!</h3>
      <p className="mx-auto mt-2 max-w-sm text-muted">
        Send the details to us on WhatsApp and we’ll get back to you with the next
        steps, or call us directly.
      </p>
      <div className="mt-6 flex flex-col gap-3">
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary group w-full bg-[#25D366] hover:bg-[#1eb857]"
        >
          <WhatsApp width={18} height={18} />
          Send on WhatsApp
        </a>
        <a href={`tel:${site.phoneHref}`} className="btn-secondary w-full">
          Call {site.phoneDisplay}
        </a>
        <button onClick={onClose} className="mt-1 text-sm font-semibold text-muted">
          Close
        </button>
      </div>
    </div>
  );
}
