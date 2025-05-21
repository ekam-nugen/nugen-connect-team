import React from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { bottomToTopAnimation } from '@/lib/animationUtils';
import { Button } from '@/base-components/button';
import Link from 'next/link';
import { SocialSignUpProps } from './types';

function SocialSignUp({
  handleGoogleSignUp,
  handleFacebookSignUp,
}: Readonly<SocialSignUpProps>) {
  return (
    <div>
      <div className="flex gap-2 mt-6 items-center justify-center">
        <Button
          onClick={handleGoogleSignUp}
          className="cursor-pointer bg-muted hover:bg-gradient-to-r hover:from-[#e8ecef] hover:to-[#d6e4ff] text-gray-700 px-4 py-2 text-sm rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <FaGoogle size={20} />
          Google
        </Button>
        <Button
          onClick={handleFacebookSignUp}
          className="cursor-pointer bg-muted hover:bg-gradient-to-r hover:from-[#e8ecef] hover:to-[#d6e4ff] text-gray-700 px-4 py-2 text-sm rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <FaFacebook size={20} className="text-primary" />
          Facebook
        </Button>
      </div>
      <motion.p
        variants={bottomToTopAnimation}
        className="pt-5 text-center text-sm text-gray-500"
      >
        Joining an existing account?{' '}
        <Link
          href="/login"
          className="text-primary underline-offset-2 hover:underline"
        >
          Click here
        </Link>
      </motion.p>
    </div>
  );
}

export default SocialSignUp;
