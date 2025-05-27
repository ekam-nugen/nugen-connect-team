export type ResetPasswordPayload = {
  newPassword: string;
};
export type EmailPayloadType = {
  email: string;
};
export interface LoginData {
  email: EmailPayloadType;
  password: string;
}
export interface LoginResponse {
  token: string;
}
export interface User {
  email: string;
  name: string;
}
export interface HeaderBoxProp {
  header: string;
  headerIcon: React.ReactNode;
  title: string;
  buttonIcon?: React.ReactNode;
  buttonLabel?: string;
  secondayButtonIcon?: React.ReactNode;
  secondrayButtonLabel?: string;
  secondaryButtonClassName?: string;
  borderClassName?: string;
}
