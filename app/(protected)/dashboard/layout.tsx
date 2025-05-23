import { ReactNode } from 'react';

export default function DashboardLayout({
  children,
  dashboard,
  // profile,
  // user,
}: {
  children: ReactNode;
  dashboard: ReactNode;
  // profile: ReactNode;
  // user: ReactNode;
}) {
  return (
    <div className="grid gap-4">
      <section>{dashboard}</section>
      {/* <section className="bg-background shadow p-4">{profile}</section> */}
      {/* <section className="bg-background shadow p-4">{user}</section> */}
      <div className="col-span-2">{children}</div>
    </div>
  );
}
