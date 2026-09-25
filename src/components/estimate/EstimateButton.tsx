'use client';

import type { ReactNode } from 'react';
import { useEstimate } from './EstimateProvider';
import { ArrowRight } from '@/components/icons';

interface Props {
  children?: ReactNode;
  variant?: 'primary' | 'secondary';
  initialType?: string;
  className?: string;
  withArrow?: boolean;
}

export default function EstimateButton({
  children = 'Get a Construction Estimate',
  variant = 'primary',
  initialType,
  className = '',
  withArrow = true,
}: Props) {
  const { open } = useEstimate();
  return (
    <button
      onClick={() => open(initialType)}
      className={`group ${variant === 'primary' ? 'btn-primary' : 'btn-secondary'} ${className}`}
    >
      {children}
      {withArrow && <ArrowRight className="btn-arrow" width={18} height={18} />}
    </button>
  );
}
