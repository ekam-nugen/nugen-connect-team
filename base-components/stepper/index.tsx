import React from 'react';
import { cn } from '@/lib/utils';
import { StepperProps } from './types';
import { FaCheck } from 'react-icons/fa6';

export function Stepper({ steps }: Readonly<StepperProps>) {
  return (
    <div className="flex items-center justify-between relative w-full">
      <div className="absolute left-0 right-0 top-4 md:top-5 h-[1px] bg-accent-foreground z-0" />
      {steps?.map(step => {
        const Icon = step.icon;
        return (
          <div
            key={step.id}
            className="flex flex-col items-center relative z-10"
          >
            <div
              className={cn(
                'flex items-center justify-center rounded-full border-2 w-8 h-8 md:w-10 md:h-10',
                step.completed
                  ? 'border-primary bg-primary'
                  : step.current
                    ? 'border-primary bg-accent shadow-lg'
                    : 'border-accent-foreground bg-accent'
              )}
            >
              {step.completed ? (
                <FaCheck
                  className="text-accent w-5 h-5 md:w-6 md:h-6"
                  strokeWidth={2}
                />
              ) : (
                <Icon
                  className={cn(
                    ' w-4 h-4 md:w-5 md:h-5',
                    step.current ? 'text-primary' : 'text-accent-foreground'
                  )}
                />
              )}
            </div>
            {step.title && (
              <h4
                className={cn(
                  'hidden md:block text-sm text-center mt-3',
                  step.completed
                    ? 'text-primary'
                    : step.current
                      ? 'text-primary'
                      : 'text-accent-foreground'
                )}
              >
                {step.title}
              </h4>
            )}
          </div>
        );
      })}
    </div>
  );
}
