import { IconType } from 'react-icons';

// login json type
export type LinkType = { type: string; label: string; href: string };

export type LoginContentType = {
  type: string;
  label: string;
  link?: LinkType;
};

// login content item props
export type LoginContentItemProps = {
  item: LoginContentType;
  phone: string;
  setPhone: (value: string) => void;
  handleLogin: () => void;
};

// otp verification json types
export interface IOptions {
  type: string;
  label: string;
}
export type OTPVerificationContentType = {
  type: string;
  label?: string;
  icon?: IconType;
  link?: IOptions;
  length?: number;
  options?: IOptions[];
};

//otp content component props
export type OtpContentItemProps = {
  item: OTPVerificationContentType;
  action: {
    goBack: () => void;
    toggleOptions: () => void;
    verifyOTP: () => void;
  };
  showOptions: boolean;
};
