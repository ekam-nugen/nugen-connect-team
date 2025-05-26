'use client';

import { CardModal } from '@/base-components/cardModal';
import { Input } from '@/base-components/input';
import React, { useState } from 'react';
import { FirstStepContent, SecondStepContent } from './constants';
import SecondStepContentItem from './SecondStepContentItem';

const OnBoardingSteps: React.FC = () => {
  const [boardingStep, setBoardingStep] = useState<number>(1);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const handleIndustryClick = (label: string) => {
    setSelectedIndustry(label);
  };
  const handleArrowClick = () => {
    if (boardingStep > 1) {
      setBoardingStep(prev => prev - 1);
    }
  };
  return (
    <CardModal
      title={boardingStep === 1 && 'Customize your app in 1 minute'}
      lableClass="font-bold leading-7 justify-center text-zinc-dark text-center"
      buttonLabel={'Next step'}
      titleAlignCenter
      className="p-5"
      borderClass="border-none justify-center items-center"
      goBackArrow={boardingStep > 1}
      handleArrowClick={handleArrowClick}
      buttonAlignCenter
      noTitleBorder
      onUpdate={() => {
        setBoardingStep(prev => prev + 1);
      }}
    >
      {boardingStep === 1 && (
        <div className="flex flex-col py-3 gap-y-8">
          {FirstStepContent?.map((item, index) => {
            if (item.type === 'input') {
              return (
                <Input
                  key={item.label + index}
                  type={'text'}
                  placeholder={item.placeholder}
                  label={item.label}
                  labelClass="mx-auto !text-center font-semibold text-gray-dark"
                  className="space-y-2 p-2"
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
    </CardModal>
  );
};

export default OnBoardingSteps;
