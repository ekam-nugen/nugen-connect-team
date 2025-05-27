'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { staggerParent } from '@/lib/animationUtils';
import { LoginContent } from './constants';
import { LoginContentType } from './types';
import { LoginContentItem } from './LoginContentItem';

function LoginPhone() {
  const [phone, setPhone] = useState<string>('');
  const router = useRouter();

  const handlePhoneChange = (value: string) => setPhone(value);

  const handleLogin = () => {
    if (phone.length > 9) {
      router.push('./login/verify');
    }
  };

  return (
    <motion.div
      {...staggerParent}
      className="mx-auto p-6 bg-background w-full max-w-sm rounded-2xl shadow-lg overflow-hidden"
    >
      {LoginContent?.map((item: LoginContentType, index: number) => {
        return (
          <LoginContentItem
            key={item.type + index}
            item={item}
            phone={phone}
            setPhone={handlePhoneChange}
            handleLogin={handleLogin}
          />
        );
      })}
    </motion.div>
  );
}

export default LoginPhone;
