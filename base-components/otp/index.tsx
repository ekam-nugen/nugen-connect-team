import React, { useRef, useCallback } from 'react';
import { OTPProps } from './types';

const OTP: React.FC<OTPProps> = ({
  separator = <span />,
  length,
  value,
  onChange,
}) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const focusAndSelect = useCallback((index: number) => {
    const input = inputRefs.current[index];
    if (input) {
      input.focus();
      input.select();
    }
  }, []);

  const updateOtpValue = useCallback(
    (index: number, newChar: string) => {
      onChange(prev => {
        const otpArray = prev.split('');
        otpArray[index] = newChar;
        return otpArray.join('');
      });
    },
    [onChange]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      const { key } = e;

      if (
        [
          'ArrowLeft',
          'ArrowRight',
          'Backspace',
          'Delete',
          'ArrowUp',
          'ArrowDown',
          ' ',
        ].includes(key)
      ) {
        e.preventDefault();
      }

      switch (key) {
        case 'ArrowLeft':
          if (index > 0) focusAndSelect(index - 1);
          break;
        case 'ArrowRight':
          if (index < length - 1) focusAndSelect(index + 1);
          break;
        case 'Backspace':
        case 'Delete':
          updateOtpValue(index, '');
          if (key === 'Backspace' && index > 0) focusAndSelect(index - 1);
          break;
      }
    },
    [focusAndSelect, length, updateOtpValue]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const newValue = e.target.value.replace(/\D/g, '').slice(-1); // Keep only last digit
      updateOtpValue(index, newValue);

      if (newValue && index < length - 1) {
        focusAndSelect(index + 1);
      }
    },
    [focusAndSelect, length, updateOtpValue]
  );

  const handlePaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>, index: number) => {
      e.preventDefault();
      const pasted = e.clipboardData
        .getData('text')
        .replace(/\D/g, '')
        .slice(0, length - index);

      onChange(prev => {
        const otpArray = prev.split('');
        for (let i = 0; i < pasted.length && index + i < length; i++) {
          otpArray[index + i] = pasted[i];
        }
        return otpArray.join('');
      });
    },
    [length, onChange]
  );

  return (
    <div className="flex items-center gap-2">
      {Array.from({ length }).map((_, idx) => (
        <React.Fragment key={idx}>
          <input
            type="text"
            inputMode="numeric"
            maxLength={2}
            className="w-10 h-10 text-center text-base font-medium border-b-2 border-gray-subtle focus:outline-none"
            ref={el => {
              inputRefs.current[idx] = el!;
            }}
            value={value[idx] || ''}
            onKeyDown={e => handleKeyDown(e, idx)}
            onChange={e => handleChange(e, idx)}
            onClick={() => focusAndSelect(idx)}
            onPaste={e => handlePaste(e, idx)}
            aria-label={`Digit ${idx + 1} of OTP`}
          />
          {idx < length - 1 && separator}
        </React.Fragment>
      ))}
    </div>
  );
};

export default OTP;
