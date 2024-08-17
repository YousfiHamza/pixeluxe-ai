import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="auth bg-slate-200 dark:bg-slate-900">{children}</main>
  );
}
