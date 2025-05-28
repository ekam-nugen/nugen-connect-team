import React from 'react';
import { FirstStepContentType, OnboardingStepsProps } from './types';
import { Input } from '@/base-components/input';
import StepThreeFeatures from './ThirdStepFeatures';
import LogoUploadStep from './FourthStepContentItem';
import PhoneNumberStep from './FifthStepContentItem';
import SecondStepContentItem from './SecondStepContentItem';

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
  boardingStepsData,
}) => {
  return (
    <>
      {boardingStep === 1 && (
        <div className="flex flex-col py-3 gap-y-8">
          {boardingStepsData?.FirstStepContent?.map(
            (item: FirstStepContentType, index: number) => {
              if (item.type === 'input') {
                const value = index === 0 ? companyName : role;
                const setValue = index === 0 ? setCompanyName : setRole;
                return (
                  <Input
                    key={item.label + index}
                    type={'text'}
                    placeholder={item.placeholder}
                    label={item.label}
                    inputBoxClass="border-2 border-gray-subtle"
                    labelClass="mx-auto !text-center font-semibold text-gray-dark"
                    className="space-y-2 py-2 px-14"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                  />
                );
              }
            }
          )}
        </div>
      )}
      {boardingStep === 2 &&
        boardingStepsData?.SecondStepContent?.map((item, index) => {
          const hasMatchingIndustry = item?.options?.some(
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
          data={boardingStepsData?.StepThreeFeaturesContent}
          selectedFeatures={selectedFeatures}
          handleFeatureClick={handleFeatureClick}
        />
      )}
      {boardingStep === 4 && (
        <LogoUploadStep
          data={boardingStepsData?.LogoUploadStepContent}
          logo={logo}
          handleRemoveClick={() => setLogo(null)}
          handleFileChange={handleFileChange}
        />
      )}
      {boardingStep === 5 && (
        <PhoneNumberStep
          data={boardingStepsData?.PhoneNumberStepContent}
          phone={phone}
          setPhone={handlePhoneChange}
        />
      )}
    </>
  );
};
export default OnboardingSteps;
