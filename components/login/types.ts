export type InputType = 'email' | 'password' | 'text' | 'number';

export type LoginFormType = {
  email: string;
  password: string;
};

export type InputItem = {
  type: 'input';
  inputs: {
    name: keyof LoginFormType;
    label: string;
    type: InputType;
  }[];
};

export type SubtitleItem = {
  type: 'subtitle';
  label: string;
};

export type LinkItem = {
  type: 'link';
  label: string;
  link: {
    href: string;
    label: string;
  };
};

export type LoginContentItem = InputItem | SubtitleItem | LinkItem;

export type LoginContentItemProps = {
  item: LoginContentItem;
  form: LoginFormType;
  errs?: string;
  isLoading: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
};
