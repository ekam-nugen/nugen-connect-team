import React from 'react';
import { Button } from '../button';
import { cn } from '@/lib/utils';
import { FaArrowLeft } from 'react-icons/fa6';

export type CardModalProps = {
  title?: React.ReactNode;
  children?: React.ReactNode;
  selectedItems?: string[];
  categories?: string[];
  onUpdate?: () => void;
  isUploading?: boolean;
  uploadError?: string;
  className?: string;
  lableClass?: string;
  buttonLabel?: string;
  borderClass?: string;
  buttonClass?: string;
  isBlock?: boolean;
  cancelButton?: boolean;
  goBackArrow?: boolean;
  handleCancel?: () => void;
  loading?: boolean;
  disabled?: boolean;
  buttonAlignCenter?: boolean;
  titleAlignCenter?: boolean;
  noTitleBorder?: boolean;
  isSkipButton?: boolean;
  handleArrowClick?: () => void;
  handleSkipClick?: () => void;
};

const CardModal = ({
  title,
  noTitleBorder,
  children,
  onUpdate,
  isUploading,
  uploadError,
  className,
  lableClass,
  buttonLabel,
  handleCancel,
  borderClass,
  buttonClass,
  cancelButton = false,
  isBlock,
  loading,
  disabled,
  handleSkipClick,
  isSkipButton = false,
  handleArrowClick,
  goBackArrow = false,
  buttonAlignCenter = false,
  titleAlignCenter = false,
}: Readonly<CardModalProps>) => {
  const buttonText = isUploading
    ? 'Uploading...'
    : uploadError
      ? 'Upload'
      : (buttonLabel ?? 'Update');

  const buttonVariant = isUploading || uploadError ? 'ghost' : 'default';

  const handleCancelClick = () => {
    if (handleCancel) {
      handleCancel();
    }
  };

  return (
    <div
      className={cn(
        // Center horizontally & vertically with transform and fixed
        'fixed top-1/2 left-1/2 z-50 bg-background py-4 px-6 rounded-2xl gap-4 border border-gray-light shadow-2xl flex flex-col',
        // Responsive width: max width full on small screens, fixed max width on md+
        'w-[90vw] max-w-md md:max-w-lg',
        // Responsive max height & scroll overflow on y-axis if content is tall
        'max-h-[90vh] overflow-y-auto scrollbar-thin',
        // Centering transform
        '-translate-x-1/2 -translate-y-1/2',
        className
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={cn('relative  pb-2', noTitleBorder ? '' : 'border-b')}>
        <div className="relative flex items-center justify-between">
          {goBackArrow && (
            <FaArrowLeft
              onClick={handleArrowClick}
              className="absolute left-0 top-1.5 text-gray-muted  cursor-pointer"
            />
          )}
          {isSkipButton && (
            <Button
              variant={'ghost'}
              onClick={handleSkipClick}
              className="absolute left-96 -top-1 text-gray-muted  cursor-pointer hover:bg-transparent hover:text-primary"
            >
              Skip
            </Button>
          )}
        </div>
        {title && (
          <h1
            className={cn(
              'text-xl font-semibold',
              titleAlignCenter ? 'text-center' : '',
              lableClass
            )}
            id="modal-title"
          >
            {title}
          </h1>
        )}
        {cancelButton !== false && (
          <Button
            variant="secondary"
            size="icon"
            onClick={handleCancelClick}
            className="absolute right-0 top-1"
            aria-label="Close modal"
          >
            X
          </Button>
        )}
      </div>

      <div className={cn('border-b pb-8 overflow-y-auto', borderClass)}>
        {children}
      </div>

      <div
        className={cn(
          'flex mt-2 flex-wrap gap-2',
          buttonAlignCenter ? 'justify-center' : 'justify-between',
          buttonClass
        )}
      >
        {cancelButton !== false && (
          <Button
            variant="ghost"
            size="default"
            className="w-full sm:w-1/4 border"
            onClick={handleCancelClick}
          >
            Cancel
          </Button>
        )}
        <Button
          variant={buttonVariant}
          size="default"
          className={cn(
            cancelButton === false ? 'w-full sm:w-auto' : 'w-full sm:w-1/4',
            buttonVariant === 'default' &&
              'bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-2 px-6 rounded-full text-sm transition'
          )}
          onClick={onUpdate}
          isBlock={isBlock}
          loading={loading}
          loaderClass="flex justify-end items-center"
          disabled={disabled}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export { CardModal };
