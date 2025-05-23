import { ReactNode } from 'react';

export default function DashboardLayout({
  children,
  dashboard,
}: {
  children: ReactNode;
  dashboard: ReactNode;
}) {
  return (
    <div className="grid gap-4">
      <section>{dashboard}</section>
      <div className="col-span-2">{children}</div>
    </div>
  );
}
