'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { fadeInAnimation, staggerParent } from '@/lib/animationUtils';
import { SignUpFormType } from './types';
import DisclaimerText from './Disclaimer';
import SignUpCard from './SignUpCard';
import { useAuthSignup, useSocialSignup } from '@/hooks/useAuth';
import { CONNECT_TEAM } from '@/lib/en';
import { emailRx, pwdRx } from '@/lib/utils';

export default function SignUp() {
  const router = useRouter();
  const [form, setForm] = useState<SignUpFormType>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [touched, setTouched] = useState<boolean>(false);
  const { Signup, isLoading, error } = useAuthSignup();
  const { signupWithSocial } = useSocialSignup();

  const errs = {
    email: touched && (!form.email || !emailRx.test(form.email)),
    password: touched && (!form.password || !pwdRx.test(form.password)),
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
  };
  const handleSubmit = async () => {
    setTouched(true);

    const emailValid = form.email && emailRx.test(form.email);
    const passwordValid = form.password && pwdRx.test(form.password);

    if (!emailValid || !passwordValid) {
      return;
    }

    try {
      await Signup(form);
      router.push('/dashboard');
    } catch (err) {
      console.error('Signup Error:', err);
    }
  };
  const handleGoogleSignUp = async () => {
    await signupWithSocial({ provider: 'google' });
  };

  const handleFacebookSignUp = async () => {
    await signupWithSocial({ provider: 'facebook' });
  };
  return (
    <motion.div
      {...staggerParent}
      className="min-h-screen w-full bg-background py-10 overflow-x-hidden"
    >
      <motion.h2
        variants={fadeInAnimation}
        className="mb-8 text-center text-3xl font-bold tracking-tight text-primary"
      >
        {CONNECT_TEAM}
      </motion.h2>
      <SignUpCard
        form={form}
        errs={errs ?? error}
        isLoading={isLoading}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleGoogleSignUp={handleGoogleSignUp}
        handleFacebookSignUp={handleFacebookSignUp}
      />

      {/* footer text */}
      <DisclaimerText />
    </motion.div>
  );
}
