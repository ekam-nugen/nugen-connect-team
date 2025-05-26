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
