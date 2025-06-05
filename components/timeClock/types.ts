export interface TimeClockProp {
  smallTitle: string;
  largeTitle: string;
  assigned: string;
  groupLabel: string;
  nameTitle: string;
  name: string;
  buttonText: string;
  roles: string;
}

export type TTimeClockHeading = {
  title: string;
  username: string;
};

export type TTimeClockCard = {
  smallTitle: string;
  largeTitle: string;
  assigned: string;
  groupLabel: string;
  nameTitle: string;
  name: string;
  buttonText: string;
  roles: string;
};

export interface TimeClockHeaderProps {
  title: string;
  username: string;
  onPermissionClick?: () => void;
  onHelpClick?: () => void;
}

export type TTabSectionHeaderProps = {
  activeTab: 'active' | 'archived';
  setActiveTab: (tab: 'active' | 'archived') => void;
  activeCount?: number;
  archivedCount?: number;
  onAddNew?: () => void;
  showExportButton?: boolean;
  onFilter?: () => void;
  onSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  activeLabel?: string;
  archivedLabel?: string;
};

export interface ActivityItem {
  time: string;
  user: string;
  action: string;
  tag: string;
  tagColor: string;
  initials: string;
}

export interface TimelineProps {
  date: string;
  items: ActivityItem[];
}
