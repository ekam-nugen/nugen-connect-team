// app/(protected)/dashboard/layout.tsx
import { ReactNode } from 'react';

export default function DashboardLayout({
  children,
  dashboard,
  profile,
}: {
  children: ReactNode;
  dashboard: ReactNode;
  profile: ReactNode;
}) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <section className="bg-white shadow p-4">{dashboard}</section>
      <section className="bg-white shadow p-4">{profile}</section>
      <div className="col-span-2">{children}</div>
    </div>
  );
}
