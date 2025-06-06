import React from 'react';

export default function DashboardPage({
  dashboard,
  quickActions,
}: {
  dashboard: React.ReactNode;
  quickActions: React.ReactNode;
}) {
  return (
    <div>
      <div>{dashboard}</div>
      <div>{quickActions}</div>
    </div>
  );
}
