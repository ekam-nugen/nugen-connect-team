import React from 'react';
import { OnboardingStepsProps } from './types';
import { Input } from '@/base-components/input';
import StepThreeFeatures from './ThirdStepFeatures';
import LogoUploadStep from './FourthStepContentItem';
import PhoneNumberStep from './FifthStepContentItem';
import SecondStepContentItem from './SecondStepContentItem';
import { FirstStepContent, SecondStepContent } from './constants';

const OnboardingSteps: React.FC<OnboardingStepsProps> = ({
  boardingStep,
  companyName,
  setCompanyName,
  role,
  setRole,
  selectedIndustry,
  setSelectedIndustry,
  handleIndustryClick,
  selectedFeatures,
  handleFeatureClick,
  logo,
  setLogo,
  handleFileChange,
  phone,
  handlePhoneChange,
}) => {
  return (
    <>
      {boardingStep === 1 && (
        <div className="flex flex-col py-3 gap-y-8">
          {FirstStepContent?.map((item, index) => {
            if (item.type === 'input') {
              const value = index === 0 ? companyName : role;
              const setValue = index === 0 ? setCompanyName : setRole;
              return (
                <Input
                  key={item.label + index}
                  type={'text'}
                  placeholder={item.placeholder}
                  label={item.label}
                  inputBoxClass="border border-gray-muted"
                  labelClass="mx-auto !text-center font-semibold text-gray-dark"
                  className="space-y-2 py-2 px-14"
                  value={value}
                  onChange={e => setValue(e.target.value)}
                />
              );
            }
          })}
        </div>
      )}
      {boardingStep === 2 &&
        SecondStepContent?.map((item, index) => {
          const hasMatchingIndustry = item.options.some(
            option => option.label === selectedIndustry
          );

          if (!selectedIndustry || hasMatchingIndustry) {
            return (
              <SecondStepContentItem
                key={item.label + index}
                item={item}
                selectedIndustry={selectedIndustry}
                setSelectedIndustry={setSelectedIndustry}
                handleIndustryClick={handleIndustryClick}
              />
            );
          }
        })}
      {boardingStep === 3 && (
        <StepThreeFeatures
          selectedFeatures={selectedFeatures}
          handleFeatureClick={handleFeatureClick}
        />
      )}
      {boardingStep === 4 && (
        <LogoUploadStep
          logo={logo}
          handleRemoveClick={() => setLogo(null)}
          handleFileChange={handleFileChange}
        />
      )}
      {boardingStep === 5 && (
        <PhoneNumberStep phone={phone} setPhone={handlePhoneChange} />
      )}
    </>
  );
};

export default OnboardingSteps;
