'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/base-components/input';
import { CardModal } from '@/base-components/cardModal';
import { useAuthResetPassword } from '@/hooks/useAuth';

function ResetPassword() {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();
  const pwdRx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{6,}$/;
  const [showPwd, setShowPwd] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const { resetPassword, isLoading } = useAuthResetPassword(token);

  const handleConfirm = async () => {
    if (!pwdRx.test(password)) {
      setError(
        'Password must be at least 6 characters and include a letter, a number, and a special character.'
      );
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');

    if (!token) {
      setError('Token is missing or invalid.');
      return;
    }

    try {
      const success = await resetPassword({ newPassword: password });

      if (success) {
        router.push('./dashboard');
      } else {
        setError('Failed to reset password. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <CardModal
      title="Reset Password"
      lableClass="font-bold leading-7 justify-center text-zinc-dark text-center"
      buttonLabel={isLoading ? 'Saving...' : 'Confirm'}
      titleAlignCenter
      borderClass="border-none justify-center items-center"
      cancelButton={false}
      buttonAlignCenter
      onUpdate={handleConfirm}
      disabled={isLoading}
    >
      <Input
        type="password"
        placeholder="Create New Password"
        value={password}
        inputicon
        showPassword={showPwd}
        setShowPassword={setShowPwd}
        onChange={e => setPassword(e.target.value)}
      />

      <Input
        className="mt-4"
        type="password"
        placeholder="Confirm Your Password"
        value={confirmPassword}
        inputicon
        showPassword={showPwd}
        setShowPassword={setShowPwd}
        onChange={e => setConfirmPassword(e.target.value)}
      />

      {error && (
        <p className="text-red-500 text-sm text-center mt-4 px-4">{error}</p>
      )}
    </CardModal>
  );
}

export default ResetPassword;
