'use client';

import PageLoader from '@/base-components/loader';
import DashboardContent from '@/components/DashboardContent';
import { Suspense } from 'react';

export default function DashboardSlot() {
  return (
    <Suspense fallback={<PageLoader />}>
      <DashboardContent />
    </Suspense>
  );
}
