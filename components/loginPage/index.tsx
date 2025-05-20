'use client';

import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/base-components/button';
import { motion } from 'framer-motion';
import {
  bottomToTopAnimation,
  rightToLeftAnimation,
  staggerParent,
  topToBottomAnimation,
} from '@/lib/animationUtils';

function LoginPhone() {
  const [phone, setPhone] = useState<string>('');
  const router = useRouter();

  const handlePhoneChange = (value: string) => setPhone(value);

  const handleLogin = () => {
    if (phone.length > 9) {
      router.push('./login/verify');
    }
  };

  return (
    <motion.div
      {...staggerParent}
      className="mx-auto p-6 bg-accent w-full max-w-sm rounded-2xl shadow-lg overflow-hidden"
    >
      <motion.h2
        variants={topToBottomAnimation}
        className="text-3xl font-bold text-center text-zinc-800"
      >
        Welcome
      </motion.h2>
      <motion.p
        variants={topToBottomAnimation}
        className="text-gray-500 mt-2 text-center text-base"
      >
        Log in to your company app
      </motion.p>

      <motion.div
        variants={rightToLeftAnimation}
        className="mt-6 md:px-10 flex flex-col items-center"
      >
        <PhoneInput
          country="in"
          value={phone}
          onChange={handlePhoneChange}
          inputClass="!w-full !rounded-lg !py-3 !text-sm !border !border-gray-300"
          containerClass="!w-full"
        />
        <p className="text-xs text-gray-400 text-center mt-2">
          We’ll send you a code to verify your number
        </p>
      </motion.div>

      <div className="text-center mt-6">
        <Button
          onClick={handleLogin}
          className="bg-primary hover:bg-primary-hover text-accent font-semibold py-2 px-6 rounded-full text-sm transition"
        >
          Verify
        </Button>
      </div>

      <hr className="my-6 border-gray-200" />

      <motion.p
        variants={bottomToTopAnimation}
        className="text-center text-sm text-gray-500"
      >
        Don’t have an account?{' '}
        <Link
          href="/signup"
          className="text-primary font-medium hover:underline"
        >
          Create one now
        </Link>
      </motion.p>
    </motion.div>
  );
}

export default LoginPhone;
