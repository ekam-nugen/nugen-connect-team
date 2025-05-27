export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  helpText?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'file';
  disabled?: boolean;
  help?: boolean;
  icon?: boolean;
  inputicon?: boolean;
  isLoading?: boolean;
  className?: string;
  labelClass?: string;
  iconClass?: string;
  inputBoxClass?: string;
  searchIcon?: boolean;
  suffixIcon?: React.ReactElement<HTMLElement>;
  tooltipText?: string;
  showPassword?: boolean;
  setShowPassword?: (showPassword: boolean) => void;
  requiredField?: boolean;
  searchIconClick?: () => void;
}
