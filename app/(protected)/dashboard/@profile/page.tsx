'use client';

import { useAuth } from '@/hooks/useAuth';

export default function ProfileSlot() {
  const { user, isLoading, error } = useAuth();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div className="text-destructive">{error}</div>;

  return (
    <div>
      <h2 className="text-lg font-semibold">User Profile</h2>
      <p>Email: {user?.email}</p>
      <p>Name: {user?.name}</p>
    </div>
  );
}
