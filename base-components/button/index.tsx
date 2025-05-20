import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { LuLoader } from 'react-icons/lu';
import { motion } from 'framer-motion';
import { fadeInAnimation } from '@/lib/animationUtils';
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
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
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isBlock,
      asChild = false,
      loading = false,
      loaderClass,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const widthClass = isBlock ? 'w-full' : 'w-auto';
    const content = loading ? (
      <div
        className={cn('flex items-center justify-center w-full', loaderClass)}
      >
        <LuLoader className="animate-spin" />
      </div>
    ) : (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), widthClass)}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );

    return (
      <motion.div
        variants={fadeInAnimation}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
      >
        {content}
      </motion.div>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
