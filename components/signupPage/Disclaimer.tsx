import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { bottomToTopAnimation } from '@/lib/animationUtils';

export default function Disclaimer() {
  return (
    <motion.p
      variants={bottomToTopAnimation}
      className="mx-auto mt-8 max-w-[768px] px-4 text-center text-[11px] leading-snug text-gray-400"
    >
      By signing up, you agree to our{' '}
      <Link
        href="#"
        className="text-[#2998ff] underline-offset-2 hover:underline"
      >
        Terms of Use
      </Link>{' '}
      and{' '}
      <Link
        href="#"
        className="text-[#2998ff] underline-offset-2 hover:underline"
      >
        Privacy Notice
      </Link>
      . We may use the information provided by you to contact you (including via
      email) about our products and services and to improve promotion efforts
      including through campaign measurement, audience research, and to
      advertise our products and services more effectively. You may opt out at
      any time, in accordance with our{' '}
      <Link
        href="#"
        className="text-[#2998ff] underline-offset-2 hover:underline"
      >
        Privacy Notice
      </Link>
      .
    </motion.p>
  );
}
