'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import phoneMock from '../../public/images/2187-Sign-up-form_image-update_employee-app-360-funnel_313x534px-3.webp';
import { Input } from '@/base-components/input';
import { Button } from '@/base-components/button';
import SelectBox from '@/base-components/selectbox';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

export default function SignUp() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [showPwd, setShowPwd] = useState(false);
  const [touched, setTouched] = useState(false);

  const emailRx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const pwdRx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const errs = {
    email: touched && (!form.email || !emailRx.test(form.email)),
    password: touched && (!form.password || !pwdRx.test(form.password)),
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
  };

  const handleSubmit = () => {
    setTouched(true);

    const emailValid = form.email && emailRx.test(form.email);
    const passwordValid = form.password && pwdRx.test(form.password);

    if (!emailValid || !passwordValid) {
      return;
    }

    console.table(form);
    router.push('/signup/verification');
  };

  return (
    <div className="min-h-screen w-full bg-white py-10">
      <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-[#2998ff]">
        connecteam
      </h2>

      <section className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 md:flex-row">
        <div className="flex overflow-hidden rounded-2xl bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] md:min-w-3xl">
          <div className="relative hidden flex-none items-center justify-center bg-gradient-to-br from-purple-50 to-purple-200 md:flex md:w-[350px]">
            <Image
              src={phoneMock}
              alt="phone demo"
              className="w-[285px] drop-shadow-2xl"
            />
          </div>

          <div className="flex w-full flex-col px-10 py-5 md:w-[418px]">
            <h3 className="mb-6 text-center text-xl font-medium text-gray-800">
              A small step for you,
              <br />
              <span className="font-normal">
                a giant leap for your business.
              </span>
            </h3>

            <div className="space-y-4">
              <div className="flex gap-4">
                <Input
                  name="firstName"
                  type="text"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                />
                <Input
                  name="lastName"
                  type="text"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                />
              </div>

              <Input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Business email"
                error={errs.email}
                helpText={errs.email ? 'Please enter a valid email.' : ''}
              />

              <Input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create a password"
                error={errs.password}
                helpText={
                  errs.password
                    ? 'Password must be 8+ chars & include a number and special character.'
                    : ''
                }
                inputicon
                showPassword={showPwd}
                setShowPassword={setShowPwd}
              />
              <SelectBox
                onChange={() => void {}}
                placeholder="Where did you first here about us?"
                filteredOptions={[]}
                setFilteredOptions={() => {}}
                selectedItems={[]}
                setSelectedItems={() => {}}
              />
              <Button
                variant="default"
                className="cursor-pointer w-full rounded-full bg-[#2998ff] py-3 text-sm font-semibold text-white shadow-[0_6px_12px_-4px_rgba(41,152,255,0.5)] transition hover:bg-[#2381d9] focus:outline-none disabled:opacity-40"
                disabled={errs.email || errs.password}
                onClick={handleSubmit}
              >
                LET&apos;S GO
              </Button>
            </div>
            <div className="flex gap-2 mt-6 items-center justify-center">
              <Button
                // onClick={handleGoogleSignUp}
                className="cursor-pointer bg-[#f8f9fa] hover:bg-gradient-to-r hover:from-[#e8ecef] hover:to-[#d6e4ff] text-gray-700 px-4 py-2 text-sm rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <FaGoogle size={20} />
                Google
              </Button>
              <Button
                // onClick={handleFacebookSignUp}
                className="cursor-pointer bg-[#f8f9fa] hover:bg-gradient-to-r hover:from-[#e8ecef] hover:to-[#d6e4ff] text-gray-700 px-4 py-2 text-sm rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <FaFacebook size={20} className="text-[#1877F2]" />
                Facebook
              </Button>
            </div>
            <p className="pt-5 text-center text-sm text-gray-500">
              Joining an existing account?{' '}
              <Link
                href="/login"
                className="text-[#2998ff] underline-offset-2 hover:underline"
              >
                Click here
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* footer text */}
      <p className="mx-auto mt-8 max-w-[768px] px-4 text-center text-[11px] leading-snug text-gray-400">
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
        . We may use the information provided by you to contact you (including
        via email) about our products and services and to improve promotion
        efforts including through campaign measurement, audience research, and
        to advertise our products and services more effectively. You may opt out
        at any time, in accordance with our{' '}
        <Link
          href="#"
          className="text-[#2998ff] underline-offset-2 hover:underline"
        >
          Privacy Notice
        </Link>
        .
      </p>
    </div>
  );
}
