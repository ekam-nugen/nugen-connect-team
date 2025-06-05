export interface SidebarItems {
  icon: string;
  title: string;
  color: string;
}

export interface AddOptionOptions {
  title: string;
  icon: string;
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
