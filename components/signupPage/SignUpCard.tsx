import React, { useState } from 'react';
import Image from 'next/image';
import phoneMock from '../../public/images/2187-Sign-up-form_image-update_employee-app-360-funnel_313x534px-3.webp';
import { Input } from '@/base-components/input';
import { Button } from '@/base-components/button';
import SelectBox from '@/base-components/selectbox';
import { motion } from 'framer-motion';
import {
  fadeInAnimation,
  rightToLeftAnimation,
  topToBottomAnimation,
} from '@/lib/animationUtils';
import SocialSignUp from './SocialSignUp';
import { SignUpCardProps } from './types';
import {
  EMAIL,
  EMAIL_ERROR,
  EMAIL_PLACEHOLDER,
  FIND_US,
  FIRST_NAME,
  LAST_NAME,
  LETS_GO,
  PASSWORD,
  PASSWORD_ERROR,
  PASSWORD_PLACEHOLDER,
  PHONE_DEMO,
  SIGNUP_HEADING,
  SIGNUP_SUB_HEADING,
  TEXT,
  VARIENT,
} from '@/lib/en';

const SignUpCard: React.FC<SignUpCardProps> = ({
  form,
  errs,
  isLoading,
  handleChange,
  handleSubmit,
  handleGoogleSignUp,
  handleFacebookSignUp,
}) => {
  const [showPwd, setShowPwd] = useState<boolean>(false);
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
          <motion.div
            variants={rightToLeftAnimation}
            className="space-y-4 text-center"
          >
            <div className="flex gap-4">
              <Input
                name={FIRST_NAME}
                type={TEXT}
                value={form.firstName}
                onChange={handleChange}
                placeholder={FIRST_NAME}
              />
              <Input
                name={LAST_NAME}
                type={TEXT}
                value={form.lastName}
                onChange={handleChange}
                placeholder={LAST_NAME}
              />
            </div>
            <Input
              name={EMAIL}
              type={EMAIL}
              value={form.email}
              onChange={handleChange}
              placeholder={EMAIL_PLACEHOLDER}
              error={errs.email}
              helpText={errs.email ? EMAIL_ERROR : ''}
            />
            <Input
              name={PASSWORD}
              type={PASSWORD}
              value={form.password}
              onChange={handleChange}
              placeholder={PASSWORD_PLACEHOLDER}
              error={errs.password}
              helpText={errs.password ? PASSWORD_ERROR : ''}
              inputicon
              showPassword={showPwd}
              setShowPassword={setShowPwd}
            />
            <SelectBox
              onChange={() => {}}
              placeholder={FIND_US}
              filteredOptions={[]}
              setFilteredOptions={() => {}}
              selectedItems={[]}
              setSelectedItems={() => {}}
            />
            <Button
              variant={VARIENT}
              className="cursor-pointer w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-[0_6px_12px_-4px_rgba(41,152,255,0.5)] transition hover:bg-primary-hover focus:outline-none disabled:opacity-40"
              disabled={isLoading || errs.email || errs.password}
              onClick={handleSubmit}
              loading={isLoading}
            >
              {LETS_GO}
            </Button>
          </motion.div>
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
