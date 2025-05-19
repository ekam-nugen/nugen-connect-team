import * as React from 'react';
import { cn } from '@/lib/utils';
import { Label } from '../label';
import { Button } from '../button';
import {
  EyeOff,
  Eye,
  AlertCircle,
  Search,
  LoaderCircle,
  Asterisk,
} from 'lucide-react';
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from '../tooltip';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  helpText?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  disabled?: boolean;
  help?: boolean;
  icon?: boolean;
  inputicon?: boolean;
  isLoading?: boolean;
  className?: string;
  labelClass?: string;
  iconClass?: string;
  inputBoxClass?: string;
  searchIcon?: boolean;
  suffixIcon?: React.ReactElement<HTMLElement>;
  tooltipText?: string;
  showPassword?: boolean;
  setShowPassword?: (showPassword: boolean) => void;
  requiredField?: boolean;
  searchIconClick?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type,
      error,
      label,
      helpText,
      inputicon,
      disabled,
      help,
      icon,
      className,
      labelClass,
      iconClass,
      inputBoxClass,
      searchIcon,
      searchIconClick,
      isLoading,
      suffixIcon,
      tooltipText,
      requiredField,
      showPassword = false,
      setShowPassword,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn('flex flex-col items-start gap-1 w-full', className)}>
        {(label || icon || requiredField) && (
          <div className="flex justify-between items-center px-3 w-full">
            <div className="flex gap-0.5">
              <Label
                htmlFor={type}
                className={cn(
                  'h-5 font-normal text-sm text-slate-900',
                  labelClass,
                  {
                    'text-red-500': error,
                    'text-slate-700/40': disabled,
                  }
                )}
              >
                {label}
              </Label>

              {requiredField && (
                <Asterisk
                  size={12}
                  className={cn(' text-red-500 cursor-pointer', iconClass, {
                    'opacity-40': disabled,
                  })}
                />
              )}
            </div>

            {icon && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <AlertCircle
                      className={cn(
                        'w-5 h-5 text-slate-700 cursor-pointer',
                        iconClass,
                        {
                          'text-red-500': error,
                          'opacity-40': disabled,
                        }
                      )}
                    />
                  </TooltipTrigger>
                  <TooltipContent className="left-full mr-16">
                    {tooltipText}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        )}
        <div className="relative w-full">
          <input
            className={cn(
              'flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none w-full placeholder:text-sm placeholder:text-medium',
              inputBoxClass,
              {
                'border border-red-500': error,
                'disabled:cursor-not-allowed disabled:opacity-50 bg-slate-500/20 text-slate-900':
                  disabled,
                'pl-8': searchIcon,
              }
            )}
            type={showPassword ? 'text' : type}
            ref={ref}
            disabled={disabled}
            {...props}
          />
          {searchIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-600">
              <Search className="w-4" onClick={searchIconClick} />
            </div>
          )}
          <div className="flex flex-col absolute top-0 right-0 w-auto h-full items-center justify-center">
            {isLoading ? (
              <LoaderCircle className="w-5 mr-2 text-primary animate-spin relative right-1" />
            ) : (
              suffixIcon
            )}
            {inputicon && (
              <Button
                disabled={disabled}
                size="icon"
                variant="link"
                onClick={() => {
                  if (setShowPassword) {
                    setShowPassword(!showPassword);
                  }
                }}
                className={cn('text-slate-600', {
                  'text-red-500': error,
                })}
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </Button>
            )}
          </div>
        </div>
        {(error || help) && (
          <Label
            className={cn(
              'max-w-fit font-normal text-xs pt-1 px-2 whitespace-pre-wrap',
              {
                'text-red-500': error,
              }
            )}
          >
            {helpText}
          </Label>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
