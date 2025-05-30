import React from 'react';
import { FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';
import { cn } from '@/lib/utils';
export type StepperProps = {
  steps: string[];
  currentStep: number;
  orientation?: 'horizontal' | 'vertical'; // optional, defaults to horizontal
};

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  orientation = 'horizontal',
}) => {
  const isVertical = orientation === 'vertical';

  return (
    <div
      className={cn(
        'relative mb-6',
        isVertical
          ? 'flex flex-col items-start space-y-4'
          : 'flex justify-between items-center'
      )}
    >
      {!isVertical && (
        <div className="absolute top-2.5 left-0 right-0 h-0.5 bg-gray-300 z-0" />
      )}

      {steps?.map((label, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div
            key={index}
            className={cn(
              'flex z-10',
              isVertical
                ? 'items-start space-x-2'
                : 'flex-col items-center w-full relative'
            )}
          >
            {/* Icon */}
            <div className="bg-background">
              {isCompleted ? (
                <FaRegCheckCircle className="text-green-500 w-5 h-5" />
              ) : (
                <FaRegCircle
                  className={cn(
                    'w-5 h-5',
                    isActive ? 'text-primary' : 'text-accent-foreground'
                  )}
                />
              )}
            </div>

            {/* Label */}
            <span
              className={cn(
                'text-xs text-center whitespace-nowrap',
                isVertical ? '' : 'mt-1',
                isActive
                  ? 'font-semibold text-primary'
                  : 'text-accent-foreground'
              )}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
};
