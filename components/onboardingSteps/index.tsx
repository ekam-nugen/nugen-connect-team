'use client';
import { CardModal } from '@/base-components/cardModal';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import OnboardingSteps from './BoardingMultiSteps';
import { Onboarding } from '@/hooks/useAuth';

export default function OnboardingForm() {
  const router = useRouter();
  const { data } = Onboarding();
  const [role, setRole] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [logo, setLogo] = useState<File | null>(null);
  const [companyName, setCompanyName] = useState<string>('');
  const [boardingStep, setBoardingStep] = useState<number>(1);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setLogo(e.target.files[0]);
    }
  };

  const handleFeatureClick = (label: string) => {
    setSelectedFeatures(prev =>
      prev.includes(label) ? prev.filter(f => f !== label) : [...prev, label]
    );
  };

  const handleIndustryClick = (label: string) => {
    setSelectedIndustry(label);
  };

  const handleArrowClick = () => {
    if (boardingStep > 1) {
      setBoardingStep(prev => prev - 1);
    }
    if (boardingStep === 3) {
      setSelectedIndustry(null);
    }
  };

  const handleAccessDashboardClick = () => {
    if (phone.length > 9) {
      router.push('/dashboard');
    }
  };

  const handlePhoneChange = (value: string) => setPhone(value);
  return (
    <CardModal
      title={boardingStep === 1 && 'Customize your app in 1\u00a0minute'}
      lableClass="font-bold leading-7 justify-center text-zinc-dark text-center"
      buttonLabel={boardingStep === 5 ? 'Access dashboard' : 'Next step'}
      className="p-5"
      borderClass="border-none justify-center items-center"
      goBackArrow={boardingStep > 1}
      handleArrowClick={handleArrowClick}
      buttonAlignCenter
      noTitleBorder
      isSkipButton={boardingStep === 4}
      handleSkipClick={() => setBoardingStep(5)}
      onUpdate={() => {
        if (boardingStep === 5) {
          handleAccessDashboardClick();
        } else {
          setBoardingStep(prev => prev + 1);
        }
        if (boardingStep === 1) {
          setSelectedIndustry(null);
        }
      }}
      disabled={
        (boardingStep === 1 && !(companyName.trim() && role.trim())) ||
        (boardingStep === 2 && selectedIndustry === null) ||
        (boardingStep === 3 && selectedFeatures.length === 0) ||
        (boardingStep === 4 && !logo) ||
        (boardingStep === 5 ? phone.length < 9 : false)
      }
    >
      <OnboardingSteps
        boardingStepsData={data?.data}
        boardingStep={boardingStep}
        companyName={companyName}
        setCompanyName={setCompanyName}
        role={role}
        setRole={setRole}
        selectedIndustry={selectedIndustry}
        setSelectedIndustry={setSelectedIndustry}
        handleIndustryClick={handleIndustryClick}
        selectedFeatures={selectedFeatures}
        handleFeatureClick={handleFeatureClick}
        logo={logo}
        setLogo={setLogo}
        handleFileChange={handleFileChange}
        phone={phone}
        handlePhoneChange={handlePhoneChange}
      />
    </CardModal>
  );
}
