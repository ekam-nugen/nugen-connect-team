'use client';

import { useProviderCallback } from '@/hooks/useAuth';
import { useSearchParams } from 'next/navigation';

export default function DashboardSlot() {
  const searchParams = useSearchParams();

  const code = searchParams.get('code') || '';
  const scope = searchParams.get('scope') || '';
  const authuser = searchParams.get('authuser') || '';
  const prompt = searchParams.get('prompt') || '';

  const { error, isLoading } = useProviderCallback('google', {
    code,
    scope,
    authuser,
    prompt,
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {isLoading && <p>Loading user data...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
    </div>
  );
}
