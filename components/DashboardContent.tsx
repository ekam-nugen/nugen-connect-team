'use client';

import { useAuth } from '@/hooks/useAuth';

export default function DashboardContent() {
  const { user, isLoading, error } = useAuth();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div className="text-destructive">{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome, {user?.name}!</p>
      <p>Email: {user?.email}</p>
    </div>
  );
}
