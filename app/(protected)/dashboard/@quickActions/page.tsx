import QuickActionSection from '@/components/dashboard/QuickAction';
import { DashboardData } from '@/components/dashboard/types';
import { endpoints } from '@/lib/endpoints';
import { apiRequest } from '@/lib/serverApi';
import React from 'react';

async function QuickActionSlot() {
  const response: { data: DashboardData } = await apiRequest(
    endpoints.dashboard
  );
  const {
    data: { quickActions },
  } = response;
  console.log(quickActions, 'response');
  return <QuickActionSection quickActionsData={quickActions} />;
}

export default QuickActionSlot;
