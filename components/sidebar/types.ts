import { IconType } from 'react-icons/lib';

export interface SidebarItems {
  icon: IconType;
  title: string;
  color: string;
}

export interface AddOptionOptions {
  title: string;
  icon: IconType;
}

export interface AddOptionGroup {
  title: string;
  options: AddOptionOptions[];
}

export interface SidebarDataType {
  title: string;
  section?: string;
  hoverAnimate?: boolean;
  items: SidebarItems[];
  addOption?: AddOptionGroup[];
}
