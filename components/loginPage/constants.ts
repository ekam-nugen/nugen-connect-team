import { FaArrowLeft } from 'react-icons/fa6';
import { LoginContentType, OTPVerificationContentType } from './types';

//login page json
export const LoginContent: LoginContentType[] = [
  { type: 'h2', label: 'Welcome' },
  { type: 'p', label: 'Log in to your company app' },
  { type: 'input', label: 'We’ll send you a code to verify your number' },
  { type: 'button', label: 'Verify' },
  {
    type: 'p',
    label: 'Don’t have an account?',
    link: { type: 'link', label: 'Create one now', href: '/signup' },
  },
];
//otp vertification json
export const OTPVerificationContent: OTPVerificationContentType[] = [
  { type: 'icon', icon: FaArrowLeft },
  { type: 'h3', label: 'Enter the 4-digit code' },
  { type: 'p', label: 'Sent to your number' },
  { type: 'otp', length: 4 },
  {
    type: 'p',
    label: 'Didn’t get the code?',
    link: { type: 'span', label: 'More options' },
  },
  {
    type: 'more-options',
    options: [
      { type: 'span', label: 'Resend OTP' },
      { type: 'span', label: 'Get a call instead' },
      { type: 'span', label: 'Send to email' },
    ],
  },
  {
    type: 'button',
    label: 'Verify',
  },
];
