import { Label } from '../label';
import { cn } from '@/lib/utils';
import { FaCheck } from 'react-icons/fa';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import type { CheckedState } from '@radix-ui/react-checkbox';
import React from 'react';

export type CheckBoxProps = {
  title?: string;
  description?: string;
  checked?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  innerClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  checkClass?: string;
};

const Checkbox = ({
  title,
  description = '',
  checked = false, //Controlled checked state. Pass true/false from parent.
  disabled = false,
  className,
  innerClass,
  titleClass,
  descriptionClass,
  checkClass,
  onCheckedChange, //Handler for checked state change. Receives boolean value.
}: CheckBoxProps) => {
  const handleCheckedChange = (newValue: CheckedState) => {
    if (!disabled && onCheckedChange) {
      onCheckedChange(newValue === true);
    }
  };

  return (
    <div
      className={cn(
        ' items-top flex items-center justify-start gap-4',
        className
      )}
    >
      <CheckboxPrimitive.Root
        checked={checked}
        disabled={disabled}
        onCheckedChange={handleCheckedChange}
        className={cn(
          'peer h-4 w-4 shrink-0 rounded border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary',
          className
        )}
      >
        <CheckboxPrimitive.Indicator
          className={cn('flex items-center justify-center text-current')}
        >
          <FaCheck className={cn('h-4 w-4 text-white', checkClass)} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      <div className={cn('grid gap-1.5 leading-none', innerClass)}>
        {title && (
          <Label
            className={cn(
              'text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
              titleClass,
              disabled ? 'opacity-40' : ''
            )}
          >
            {title}
          </Label>
        )}
        {description && (
          <Label
            className={cn(
              'font-normal text-md text-muted-foreground',
              descriptionClass,
              disabled ? 'opacity-40' : ''
            )}
          >
            {description}
          </Label>
        )}
      </div>
    </div>
  );
};

export default Checkbox;
