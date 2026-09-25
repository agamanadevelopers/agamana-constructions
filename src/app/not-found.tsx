import Link from 'next/link';
import { ArrowRight } from '@/components/icons';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cream px-6">
      <div className="text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-4xl font-bold text-brand sm:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you’re looking for doesn’t exist or has moved. Let’s get you back on
          track.
        </p>
        <Link href="/" className="btn-primary group mt-7">
          Back to home
          <ArrowRight className="btn-arrow" width={18} height={18} />
        </Link>
      </div>
    </main>
  );
}
