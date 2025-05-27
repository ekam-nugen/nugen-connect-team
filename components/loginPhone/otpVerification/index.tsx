'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { staggerParent } from '@/lib/animationUtils';
import OtpContentItem from './OtpContentItem';
import { OTPVerificationContent } from '../constants';
import { OTPVerificationContentType } from '../types';

function OTPVerification() {
  const router = useRouter();

  const [showOptions, setShowOptions] = useState<boolean>(false);
  const action = {
    goBack: () => router.push('./'),
    toggleOptions: () => setShowOptions(prev => !prev),
    verifyOTP: () => router.push('./dashboard'),
  };

  return (
    <motion.div
      {...staggerParent}
      className="mx-auto p-6 bg-background w-full max-w-sm rounded-2xl shadow-lg overflow-x-hidden"
    >
      {OTPVerificationContent?.map(
        (item: OTPVerificationContentType, idx: number) => {
          return (
            <OtpContentItem
              key={item.type + idx}
              item={item}
              action={action}
              showOptions={showOptions}
            />
          );
        }
      )}
    </motion.div>
  );
}

export default OTPVerification;
