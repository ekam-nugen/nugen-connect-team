'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { motion } from 'framer-motion';
import { fadeInAnimation, staggerParent } from '@/lib/animationUtils';
import { SignUpFormType } from './types';
import DisclaimerText from './Disclaimer';
import SignUpCard from './SignUpCard';

export default function SignUp() {
  const router = useRouter();
  const [form, setForm] = useState<SignUpFormType>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [touched, setTouched] = useState<boolean>(false);

  const emailRx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const pwdRx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const errs = {
    email: touched && (!form.email || !emailRx.test(form.email)),
    password: touched && (!form.password || !pwdRx.test(form.password)),
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
  };

  const handleSubmit = () => {
    setTouched(true);

    const emailValid = form.email && emailRx.test(form.email);
    const passwordValid = form.password && pwdRx.test(form.password);

    if (!emailValid || !passwordValid) {
      return;
    }

    console.table(form);
    router.push('/signup/verification');
  };

  return (
    <motion.div
      {...staggerParent}
      className="min-h-screen w-full bg-accent py-10 overflow-x-hidden"
    >
      <motion.h2
        variants={fadeInAnimation}
        className="mb-8 text-center text-3xl font-bold tracking-tight text-primary"
      >
        connecteam
      </motion.h2>

      <SignUpCard
        form={form}
        errs={errs}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {/* footer text */}
      <DisclaimerText />
    </motion.div>
  );
}
