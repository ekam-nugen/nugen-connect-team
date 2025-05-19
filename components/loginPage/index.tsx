'use client';

import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/base-components/button';

function LoginPhone() {
  const [phone, setPhone] = useState('');
  const router = useRouter();

  const handlePhoneChange = (value: string) => setPhone(value);

  const handleLogin = () => {
    if (phone.length > 9) {
      router.push('./login/verify');
    }
  };

  return (
    <div className="mx-auto p-6   bg-white w-full max-w-sm rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-zinc-800">Welcome</h2>
      <p className="text-gray-500 mt-2 text-center text-base">
        Log in to your company app
      </p>

      <div className="mt-6 md:px-10 flex flex-col items-center">
        <PhoneInput
          country="in"
          value={phone}
          onChange={handlePhoneChange}
          inputClass="!w-full !rounded-lg !py-3 !text-sm !border !border-gray-300"
          containerClass="!w-full"
        />
        <p className="text-xs text-gray-400 text-center mt-2">
          We’ll send you a code to verify your number
        </p>
      </div>

      <div className="text-center mt-6">
        <Button
          onClick={handleLogin}
          className="bg-[#2998ff] hover:bg-[#2381D9] text-white font-semibold py-2 px-6 rounded-full text-sm transition"
        >
          Verify
        </Button>
      </div>

      <hr className="my-6 border-gray-200" />

      <p className="text-center text-sm text-gray-500">
        Don’t have an account?{' '}
        <Link
          href="/signup"
          className="text-[#2998ff] font-medium hover:underline"
        >
          Create one now
        </Link>
      </p>
    </div>
  );
}

export default LoginPhone;
