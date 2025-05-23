import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { bottomToTopAnimation } from '@/lib/animationUtils';
import {
  AND,
  BY_SIGNING_UP,
  PRIVACY,
  PRIVACY_NOTICE,
  PRIVACY_TERMS,
  TERMS,
} from '@/lib/en';

export default function Disclaimer() {
  return (
    <motion.p
      variants={bottomToTopAnimation}
      className="mx-auto mt-8 max-w-[768px] px-4 text-center text-[11px] leading-snug text-gray-muted"
    >
      {BY_SIGNING_UP}
      <Link
        href="#"
        className="text-primary underline-offset-2 hover:underline"
      >
        {TERMS}
      </Link>
      {AND}
      <Link
        href="#"
        className="text-primary underline-offset-2 hover:underline"
      >
        {PRIVACY}
      </Link>
      {PRIVACY_TERMS}
      <Link
        href="#"
        className="text-primary underline-offset-2 hover:underline"
      >
        {PRIVACY_NOTICE}
      </Link>
      .
    </motion.p>
  );
}
