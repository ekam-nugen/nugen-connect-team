import React from 'react';
import Image from 'next/image';
import phoneMock from '../../public/images/2187-Sign-up-form_image-update_employee-app-360-funnel_313x534px-3.webp';
import { motion } from 'framer-motion';
import { fadeInAnimation, topToBottomAnimation } from '@/lib/animationUtils';
import SocialSignUp from './SocialSignUp';
import { PHONE_DEMO, SIGNUP_HEADING, SIGNUP_SUB_HEADING } from '@/lib/en';
import { SignUpContent } from './SignUpContent';
import { SignUpContentItem } from './SignUpContentItem';
import { SignUpCardProps } from './types';

const SignUpCard = ({
  form,
  errs,
  isLoading,
  handleChange,
  handleSubmit,
  handleGoogleSignUp,
  handleFacebookSignUp,
}: SignUpCardProps) => {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 md:flex-row overflow-x-hidden">
      <div className="flex overflow-hidden rounded-2xl bg-background shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] md:min-w-3xl">
        <motion.div
          variants={fadeInAnimation}
          className="relative hidden flex-none items-center justify-center bg-gradient-to-br from-purple-50 to-purple-200 md:flex md:w-[350px]"
        >
          <Image
            src={phoneMock}
            alt={PHONE_DEMO}
            className="w-[285px] drop-shadow-2xl"
          />
        </motion.div>
        <div className="flex w-full flex-col px-10 py-5 md:w-[418px]">
          <motion.h3
            variants={topToBottomAnimation}
            className="mb-6 text-center text-lg font-medium text-foreground"
          >
            {SIGNUP_HEADING}
            <br />
            <span className="font-normal">{SIGNUP_SUB_HEADING}</span>
          </motion.h3>

          <div className="space-y-4 text-center">
            {SignUpContent.map((item, index) => (
              <SignUpContentItem
                key={index}
                item={item}
                form={form}
                isLoading={isLoading}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                errs={errs}
              />
            ))}
          </div>
          <SocialSignUp
            handleGoogleSignUp={handleGoogleSignUp}
            handleFacebookSignUp={handleFacebookSignUp}
          />
        </div>
      </div>
    </section>
  );
};

export default SignUpCard;
