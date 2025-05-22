import { Button } from '@/base-components/button';
import { motion } from 'framer-motion';
import {
  bottomToTopAnimation,
  rightToLeftAnimation,
  topToBottomAnimation,
} from '@/lib/animationUtils';
import { LoginContentItemProps } from './types';
import Link from 'next/link';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';

export function LoginContentItem({
  item,
  phone,
  setPhone,
  handleLogin,
}: Readonly<LoginContentItemProps>) {
  switch (item.type) {
    case 'h2':
      return (
        <motion.h2
          variants={topToBottomAnimation}
          className="text-3xl font-bold text-center text-zinc-heading"
        >
          {item.label}
        </motion.h2>
      );
    case 'p':
      if (!item.link) {
        return (
          <motion.p
            variants={topToBottomAnimation}
            className="text-gray-muted mt-2 text-center text-base"
          >
            {item.label}
          </motion.p>
        );
      }
      return (
        <div>
          <hr className="my-4 border-gray-subtle" />
          <motion.p
            variants={bottomToTopAnimation}
            className="text-center text-sm text-gray-muted"
          >
            {item.label}{' '}
            {item.link.type === 'link' && (
              <Link
                href={item.link.href}
                className="text-primary font-medium hover:underline"
              >
                {item.link.label}
              </Link>
            )}
          </motion.p>
        </div>
      );
    case 'input':
      return (
        <motion.div
          variants={rightToLeftAnimation}
          className="mt-6 md:px-10 flex flex-col items-center"
        >
          <PhoneInput
            country="in"
            value={phone}
            onChange={setPhone}
            inputClass="!w-full !rounded-lg !py-3 !text-sm !border !border-gray-subtle"
            containerClass="!w-full"
          />
          <p className="text-xs text-gray-muted text-center mt-2">
            {item.label}
          </p>
        </motion.div>
      );
    case 'button':
      return (
        <motion.div
          variants={bottomToTopAnimation}
          className="text-center mt-4"
        >
          <Button
            onClick={handleLogin}
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
