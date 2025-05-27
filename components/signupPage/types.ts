//signupPage form types
export type SignUpFormType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  [key: string]: string;
};

//SignUpCard type
export interface IErrs {
  email?: boolean;
  password?: boolean;
  [key: string]: boolean | undefined;
}
export interface SignUpCardProps {
  form: SignUpFormType;
  errs: IErrs;
  isLoading?: boolean;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit: () => void;
  handleGoogleSignUp?: () => void;
  handleFacebookSignUp?: () => void;
}

//SocialSignUp types
export type SocialSignUpProps = {
  clickHere?: string;
  text?: string;
  handleGoogleSignUp?: () => void;
  handleFacebookSignUp?: () => void;
};

export type ContentType =
  | {
      type: 'title';
      label: string;
    }
  | {
      type: 'subtitle';
      label: string;
      link?: {
        type: 'link';
        label: string;
        href: string;
      };
    }
  | {
      type: 'input-group';
      inputs: {
        name: string;
        label: string;
        type: string;
      }[];
    }
  | {
      type: 'button';
      label: string;
    };

export interface SignUpContentItemProps {
  item: {
    type: string;
    label?: string;
    name?: string;
    inputs?: {
      name: string;
      label: string;
      type: string;
    }[];
    options?: { label: string; value: string }[];
  };
  form: SignUpFormType;
  errs: IErrs;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit: () => void;
}
