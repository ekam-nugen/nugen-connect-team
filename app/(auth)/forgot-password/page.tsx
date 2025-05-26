'use client';

import { useState } from 'react';
import { Input } from '@/base-components/input';
import { CardModal } from '@/base-components/cardModal';
import { useAuthForgotPassword } from '@/hooks/useAuth';

function ForgotPassword() {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { forgotPassword, isLoading } = useAuthForgotPassword();
  const emailRx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const handleConfirm = async () => {
    if (!email || !emailRx.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    try {
      const success = await forgotPassword({ email });

      if (!success) {
        setError('Failed to send reset password email. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <CardModal
      title="Forget Password"
      lableClass="font-bold leading-7 justify-center text-zinc-dark text-center"
      buttonLabel={isLoading ? 'Sending...' : 'Confirm'}
      titleAlignCenter
      borderClass="border-none justify-center items-center"
      cancelButton={false}
      buttonAlignCenter
      onUpdate={handleConfirm}
      disabled={isLoading}
    >
      <Input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      {error && (
        <p className="text-red-500 text-sm text-center mt-4 px-4">{error}</p>
      )}
    </CardModal>
  );
}

export default ForgotPassword;
