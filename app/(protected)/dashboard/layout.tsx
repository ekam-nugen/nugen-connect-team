import { ReactNode } from 'react';

export default function DashboardLayout({
  children,
  dashboard,
  quickActions,
}: {
  children: ReactNode;
  dashboard: ReactNode;
  quickActions: ReactNode;
}) {
  return (
    <div className="grid gap-4">
      <section>{dashboard}</section>
      <section>{quickActions}</section>
      <div className="col-span-2">{children}</div>
    </div>
  );
}
