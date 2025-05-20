import React from 'react';
import { Check, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Step {
  id: string | number;
  icon: LucideIcon;
  title?: string;
  completed?: boolean;
  current?: boolean;
}

interface StepperProps {
  steps: Step[];
  className?: string;
}

export function Stepper({ steps }: Readonly<StepperProps>) {
  return (
    <div className="flex items-center justify-between relative w-full">
      <div className="absolute left-0 right-0 top-4 md:top-5 h-[1px] bg-gray-400 z-0" />
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
                  ? 'border-blue-500 bg-blue-500'
                  : step.current
                    ? 'border-blue-500 bg-white shadow-lg'
                    : 'border-gray-300 bg-white'
              )}
            >
              {step.completed ? (
                <Check
                  className="text-white w-5 h-5 md:w-6 md:h-6"
                  strokeWidth={2}
                />
              ) : (
                <Icon
                  className={cn(
                    ' w-4 h-4 md:w-5 md:h-5',
                    step.current ? 'text-blue-500' : 'text-gray-400'
                  )}
                />
              )}
            </div>
            {step.title && (
              <h4
                className={cn(
                  'hidden md:block text-sm text-center mt-3',
                  step.completed
                    ? 'text-blue-500'
                    : step.current
                      ? 'text-blue-600'
                      : 'text-gray-400'
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
