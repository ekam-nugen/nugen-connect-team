'use client';

import * as React from 'react';

type OTPProps = {
  separator: React.ReactNode;
  length: number;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

function OTP({ separator, length, value, onChange }: OTPProps) {
  const inputRefs = React.useRef<HTMLInputElement[]>([]);

  const focusInput = (index: number) => {
    inputRefs.current[index]?.focus();
  };

  const selectInput = (index: number) => {
    inputRefs.current[index]?.select();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        if (index > 0) {
          focusInput(index - 1);
          selectInput(index - 1);
        }
        break;
      case 'ArrowRight':
        e.preventDefault();
        if (index < length - 1) {
          focusInput(index + 1);
          selectInput(index + 1);
        }
        break;
      case 'Delete':
      case 'Backspace':
        e.preventDefault();
        onChange(prev => {
          const otpArray = prev.split('');
          otpArray[index] = '';
          return otpArray.join('');
        });
        if (e.key === 'Backspace' && index > 0) {
          focusInput(index - 1);
          selectInput(index - 1);
        }
        break;
      case 'ArrowUp':
      case 'ArrowDown':
      case ' ':
        e.preventDefault();
        break;
      default:
        break;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const currentValue = e.target.value;
    const lastChar = currentValue[currentValue.length - 1];

    onChange(prev => {
      const otpArray = prev.split('');
      otpArray[index] = lastChar || '';
      return otpArray.join('');
    });

    if (currentValue && index < length - 1) {
      focusInput(index + 1);
    }
  };

  const handleClick = (
    e: React.MouseEvent<HTMLInputElement>,
    index: number
  ) => {
    selectInput(index);
  };

  const handlePaste = (
    e: React.ClipboardEvent<HTMLInputElement>,
    index: number
  ) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').slice(0, length);

    onChange(prev => {
      const otpArray = prev.split('');
      for (let i = index; i < length; i++) {
        otpArray[i] = pastedData[i - index] || '';
      }
      return otpArray.join('');
    });
  };

  return (
    <div className="flex items-center gap-2">
      {Array.from({ length }).map((_, idx) => (
        <React.Fragment key={idx}>
          <input
            type="text"
            inputMode="numeric"
            maxLength={2}
            className="w-10 text-center text-base font-medium border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all"
            ref={el => {
              inputRefs.current[idx] = el!;
            }}
            value={value[idx] || ''}
            onKeyDown={e => handleKeyDown(e, idx)}
            onChange={e => handleChange(e, idx)}
            onClick={e => handleClick(e, idx)}
            onPaste={e => handlePaste(e, idx)}
            aria-label={`Digit ${idx + 1} of OTP`}
          />
          {idx < length - 1 && separator}
        </React.Fragment>
      ))}
    </div>
  );
}

export default OTP;
