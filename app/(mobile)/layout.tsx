'use client';
import { ReactNode } from 'react';

export default function MobileLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen w-screen overflow-hidden bg-peregrine-dark">
      {children}
    </div>
  );
}
