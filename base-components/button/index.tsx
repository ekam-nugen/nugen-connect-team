import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Loader } from 'lucide-react';

const buttonVariants = cva(
  'flex gap-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 transition-all',
  {
    variants: {
      variant: {
        default: 'bg-blue-400 hover:bg-primary-foreground text-white',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:text-accent-foreground text-black border-1',
        link: 'text-primary underline-offset-4 hover:underline',
        guest:
          'bg-background text-primary border shadow-lg hover:bg-slate-100 min-w-4 w-full',
        mic: 'bg-transparent text-slate-400 w-12 hover:text-black',
        checkout:
          'max-w-[178px] max-w-44 max-h-12 bg-foreground text-white font-extrabold text-base rounded',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        xs: 'h-7 rounded-md px-2',
        lg: 'h-11 rounded-md px-8',
        icon: 'p-2 text-[#797F99]',
        checkout: 'py-3 px-14',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isBlock?: boolean;
  asChild?: boolean;
  loading?: boolean;
  loaderClass?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isBlock,
      asChild = false,
      loading,
      loaderClass,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const widthClass = isBlock ? 'w-full' : 'w-auto';
    if (loading) {
      return (
        <div
          className={cn(
            'flex justify-center items-center w-full ',
            loaderClass
          )}
        >
          <Loader className="animate-spin" />
        </div>
      );
    } else {
      return (
        <Comp
          className={cn(
            buttonVariants({ variant, size, className }),
            widthClass
          )}
          ref={ref}
          {...props}
        />
      );
    }
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
