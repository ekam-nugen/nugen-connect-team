import OnboardingForm from '@/components/onboardingSteps';
import { OnboardingStepsDataType } from '@/components/onboardingSteps/types';
import { endpoints } from '@/lib/endpoints';
import { apiRequest } from '@/lib/serverApi';
import React from 'react';

async function OnboardingFormPage() {
  const response: {
    data: OnboardingStepsDataType;
  } = await apiRequest(endpoints.onboarding);
  return <OnboardingForm formData={response?.data} />;
}

export default OnboardingFormPage;
