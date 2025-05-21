'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa6';
import { Button } from '@/base-components/button';
import OTP from '@/base-components/otp';
import { motion } from 'framer-motion';
import {
  fadeInAnimation,
  rightToLeftAnimation,
  staggerParent,
  topToBottomAnimation,
} from '@/lib/animationUtils';

function OTPVerification() {
  const router = useRouter();
  const [otp, setOtp] = useState<string>('');

  const handleBack = () => router.push('./');
  const handleSubmit = () => router.push('./dashboard');

  const [showOptions, setShowOptions] = useState<boolean>(false);

  const toggleOptions = () => {
    setShowOptions(prev => !prev);
  };
  return (
    <motion.div
      {...staggerParent}
      className="mx-auto p-6 bg-background w-full max-w-sm rounded-2xl shadow-lg overflow-x-hidden"
    >
      <motion.div variants={fadeInAnimation} className="mb-4">
        <FaArrowLeft
          className="h-5 w-5 text-gray-muted cursor-pointer"
          onClick={handleBack}
        />
      </motion.div>

      <motion.h3
        variants={topToBottomAnimation}
        className="text-xl font-bold text-center text-zinc-text mb-1.5"
      >
        Enter the 4-digit code
      </motion.h3>
      <motion.p
        variants={topToBottomAnimation}
        className="text-gray-subtle mb-4 text-center text-base"
      >
        Sent to your number
      </motion.p>

      <motion.div
        variants={fadeInAnimation}
        className="flex justify-center gap-3 mb-3"
      >
        <OTP separator={<span />} value={otp} onChange={setOtp} length={4} />
      </motion.div>
      <motion.p
        variants={rightToLeftAnimation}
        className="text-center text-sm text-gray-subtle mb-2"
      >
        Didn’t get the code?{' '}
        <button
          onClick={toggleOptions}
          className="text-primary font-medium hover:underline focus:outline-none"
        >
          More options
        </button>
      </motion.p>

      {showOptions && (
        <div className="mt-2 text-sm text-gray-text text-center space-y-2">
          <button className="block w-full hover:text-primary transition">
            Resend OTP
          </button>
          <button className="block w-full hover:text-primary transition">
            Get a call instead
          </button>
          <button className="block w-full hover:text-primary transition">
            Send to email
          </button>
        </div>
      )}

      <motion.div variants={fadeInAnimation} className="pt-2 text-center">
        <Button
          disabled={otp.length !== 4}
          onClick={handleSubmit}
          className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-2 px-6 rounded-full text-sm transition"
        >
          Verify
        </Button>
      </motion.div>
    </motion.div>
  );
}

export default OTPVerification;
