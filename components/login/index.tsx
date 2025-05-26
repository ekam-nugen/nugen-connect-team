'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAuthLogin, useSocialSignup } from '@/hooks/useAuth';
import { LoginContentItem } from './LoginContentItem';
import SocialSignUp from '@/components/signupPage/SocialSignUp';
import { LoginContent } from './loginContent';
import { CLICK_HERE, CREATE_NEW_ACCOUNT, LOGIN } from '@/lib/en';
import { LoginFormType } from './type';

const LoginForm = () => {
  const router = useRouter();
  const { Login, isLoading, error } = useAuthLogin();
  const { signupWithSocial } = useSocialSignup();

  const [form, setForm] = useState<LoginFormType>({ email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const success = await Login(form);
    if (success) {
      router.push('/dashboard');
    }
  };

  const handleGoogleSignUp = async () => {
    await signupWithSocial({ provider: 'google' });
  };

  const handleFacebookSignUp = async () => {
    await signupWithSocial({ provider: 'facebook' });
  };

  return (
    <div className="bg-background p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-center">{LOGIN}</h1>
      {LoginContent.map((item, index) => (
        <LoginContentItem
          key={index}
          item={item}
          form={form}
          errs={error}
          isLoading={isLoading}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ))}
      {error && <p className="text-destructive text-sm text-center">{error}</p>}
      <SocialSignUp
        clickHere={CLICK_HERE}
        text={CREATE_NEW_ACCOUNT}
        handleGoogleSignUp={handleGoogleSignUp}
        handleFacebookSignUp={handleFacebookSignUp}
      />
    </div>
  );
};

export default LoginForm;
