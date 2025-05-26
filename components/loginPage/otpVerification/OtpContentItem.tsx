import React, { useState } from 'react';
import { Button } from '@/base-components/button';
import OTP from '@/base-components/otp';
import { motion } from 'framer-motion';
import {
  fadeInAnimation,
  rightToLeftAnimation,
  topToBottomAnimation,
} from '@/lib/animationUtils';
import { IconType } from 'react-icons';
import { IOptions, OtpContentItemProps } from '../types';

export default function OtpContentItem({
  item,
  action,
  showOptions,
}: Readonly<OtpContentItemProps>) {
  const [otp, setOtp] = useState<string>('');
  const Icon = item.icon as IconType;
  switch (item.type) {
    case 'icon':
      return (
        <motion.div variants={fadeInAnimation} className="mb-4">
          <Icon
            className="h-5 w-5 text-zinc-text cursor-pointer"
            onClick={action.goBack}
          />
        </motion.div>
      );
    case 'heading':
      return (
        <motion.h3
          variants={topToBottomAnimation}
          className="text-xl font-bold text-center text-zinc-text mb-1.5"
        >
          {item.label}
        </motion.h3>
      );
    case 'otp':
      return (
        <motion.div
          variants={fadeInAnimation}
          className="flex justify-center gap-3 mb-3"
        >
          <OTP
            separator={<span />}
            value={otp}
            onChange={setOtp}
            length={item.length ?? 0}
          />
        </motion.div>
      );
    case 'sub-heading':
      return (
        <motion.p
          variants={rightToLeftAnimation}
          className="text-gray-muted mb-4 text-center text-sm"
        >
          {item.label}{' '}
          {item.link && (
            <span
              onClick={action.toggleOptions}
              className="text-primary font-medium hover:underline focus:outline-none"
            >
              {item.link.label}
            </span>
          )}
        </motion.p>
      );
    case 'more-options':
      return (
        showOptions && (
          <div className="mt-2 text-xs text-zinc-text text-center space-y-2">
            {item?.options?.map((opt: IOptions, i: number) => (
              <span
                key={opt.type + i}
                className="block w-full hover:text-primary transition cursor-pointer"
              >
                {opt.label}
              </span>
            ))}
          </div>
        )
      );
    case 'button':
      return (
        <motion.div variants={fadeInAnimation} className="pt-2 text-center">
          <Button
            disabled={otp.length !== 4}
            onClick={action.verifyOTP}
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-2 px-6 rounded-full text-sm transition"
          >
            {item.label}
          </Button>
        </motion.div>
      );
    default:
      return null;
  }
}
