import React from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

import { IN } from '@/lib/en';
import { PhoneNumberStepProps } from './types';
import { PhoneNumberStepContent } from './constants';

export default function PhoneNumberStep({
  phone,
  setPhone,
}: Readonly<PhoneNumberStepProps>) {
  const Icon = PhoneNumberStepContent?.icon;
  return (
    <div className="max-w-md mx-auto pt-8 text-center px-10">
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
          <Icon className="text-primary text-3xl" />
        </div>
      </div>

      {/* Title & Subtitle */}
      <h2 className="text-2xl font-semibold text-gray-dark mb-1">
        {PhoneNumberStepContent?.title}
      </h2>
      <p className="text-gray-muted mb-6 text-xs">
        {PhoneNumberStepContent?.subtitle}
      </p>

      {/* Phone Input */}
      <div className="mt-6 md:px-10 flex flex-col items-center">
        <PhoneInput
          country={IN}
          value={phone}
          onChange={setPhone}
          inputClass="!w-full !rounded-lg !py-3 !text-sm !border !border-gray-subtle"
          containerClass="!w-full"
        />
        <p className="text-xs text-gray-muted text-center mt-2">
          {PhoneNumberStepContent?.helperText}
        </p>
      </div>
    </div>
  );
}
