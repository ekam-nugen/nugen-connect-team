'use client';

import { useProviderCallback } from '@/hooks/useAuth';
import OverviewComponent from './overView';
import { useSearchParams } from 'next/navigation';

export default function DashboardContent() {
  const searchParams = useSearchParams();

  const code = searchParams.get('code') || '';
  const scope = searchParams.get('scope') || '';
  const authuser = searchParams.get('authuser') || '';
  const prompt = searchParams.get('prompt') || '';

  const { isLoading, error } = useProviderCallback('google', {
    code,
    scope,
    authuser,
    prompt,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div className="text-destructive">{error}</div>;

  return (
    <div>
      <OverviewComponent />
    </div>
  );
}
