'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa6';
import { Button } from '@/base-components/button';
import OTP from '@/base-components/otp';

function OTPVerification() {
  const router = useRouter();
  const [otp, setOtp] = useState('');

  const handleBack = () => router.push('./');

  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(prev => !prev);
  };
  return (
    <div className="mx-auto p-6 bg-white w-full max-w-sm rounded-2xl shadow-lg">
      <div className="mb-4">
        <FaArrowLeft
          className="h-5 w-5 text-gray-400 cursor-pointer"
          onClick={handleBack}
        />
      </div>

      <h3 className="text-xl font-bold text-center text-zinc-700 mb-1.5">
        Enter the 4-digit code
      </h3>
      <p className="text-gray-500 mb-4 text-center text-base">
        Sent to your number
      </p>

      <div className="flex justify-center gap-3 mb-3">
        <OTP separator={<span />} value={otp} onChange={setOtp} length={4} />
      </div>

      {/* Error Message Placeholder */}
      <div className="hidden text-sm text-red-600 text-center mb-2">
        This code seems to be wrong, please try again
      </div>

      <p className="text-center text-sm text-gray-500 mb-2">
        Didn’t get the code?{' '}
        <button
          onClick={toggleOptions}
          className="text-[#2998ff] font-medium hover:underline focus:outline-none"
        >
          More options
        </button>
      </p>

      {showOptions && (
        <div className="mt-2 text-sm text-gray-600 text-center space-y-2">
          <button className="block w-full hover:text-[#2998ff] transition">
            Resend OTP
          </button>
          <button className="block w-full hover:text-[#2998ff] transition">
            Get a call instead
          </button>
          <button className="block w-full hover:text-[#2998ff] transition">
            Send to email
          </button>
        </div>
      )}

      <div className="pt-2 text-center">
        <Button className="bg-[#2998ff] hover:bg-[#2381D9] text-white font-semibold py-2 px-6 rounded-full text-sm transition">
          Verify
        </Button>
      </div>
    </div>
  );
}

export default OTPVerification;
