'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import EstimateModal from './EstimateModal';

interface EstimateContextValue {
  isOpen: boolean;
  initialType?: string;
  open: (initialType?: string) => void;
  close: () => void;
}

const EstimateContext = createContext<EstimateContextValue | null>(null);

export function useEstimate(): EstimateContextValue {
  const ctx = useContext(EstimateContext);
  if (!ctx) {
    throw new Error('useEstimate must be used within <EstimateProvider>');
  }
  return ctx;
}

export default function EstimateProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialType, setInitialType] = useState<string | undefined>(undefined);

  const open = useCallback((type?: string) => {
    setInitialType(type);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, initialType, open, close }),
    [isOpen, initialType, open, close],
  );

  return (
    <EstimateContext.Provider value={value}>
      {children}
      <EstimateModal />
    </EstimateContext.Provider>
  );
}
