import { ReactNode } from 'react';

export default function DashboardLayout({
  children,
  dashboard,
  profile,
  // user,
}: {
  children: ReactNode;
  dashboard: ReactNode;
  profile: ReactNode;
  // user: ReactNode;
}) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <section className="bg-background shadow p-4">{dashboard}</section>
      <section className="bg-background shadow p-4">{profile}</section>
      {/* <section className="bg-background shadow p-4">{user}</section> */}
      <div className="col-span-2">{children}</div>
    </div>
  );
}
