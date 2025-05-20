//signupPage form types
export type SignUpFormType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

//SignUpCard type
export interface IErrs {
  email?: boolean;
  password?: boolean;
}
export interface SignUpCardProps {
  form: SignUpFormType;
  errs: IErrs;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  handleGoogleSignUp?: () => void;
  handleFacebookSignUp?: () => void;
}

//SocialSignUp types
export type SocialSignUpProps = {
  handleGoogleSignUp?: () => void;
  handleFacebookSignUp?: () => void;
};
