// constants type
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
