import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { bottomToTopAnimation } from '@/lib/animationUtils';
import { Button } from '@/base-components/button';
import Link from 'next/link';
import { SocialSignUpProps } from './types';
import { CLICK_HERE, FACEBOOK, GOOGLE, JOIN_EXISTING_ACCOUNT } from '@/lib/en';

function SocialSignUp({
  clickHere,
  text,
  href,
  handleGoogleSignUp,
  handleFacebookSignUp,
}: Readonly<SocialSignUpProps>) {
  return (
    <div>
      <div className="flex gap-2 mt-6 items-center justify-center">
        <Button
          onClick={handleGoogleSignUp}
          className="cursor-pointer bg-muted hover:bg-gradient-to-r hover:from-accent hover:to-gray-light text-gray-text px-4 py-2 text-sm rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <FcGoogle size={20} />
          {GOOGLE}
        </Button>
        <Button
          onClick={handleFacebookSignUp}
          className="cursor-pointer bg-muted hover:bg-gradient-to-r hover:from-accent hover:to-gray-light text-gray-text px-4 py-2 text-sm rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <FaFacebook size={20} className="text-primary" />
          {FACEBOOK}
        </Button>
      </div>
      <motion.p
        variants={bottomToTopAnimation}
        className="pt-5 text-center text-sm text-foreground"
      >
        {text || JOIN_EXISTING_ACCOUNT}
        <Link
          href={href || '/login'}
          className="text-primary underline-offset-2 hover:underline"
        >
          {clickHere || CLICK_HERE}
        </Link>
      </motion.p>
    </div>
  );
}

export default SocialSignUp;
