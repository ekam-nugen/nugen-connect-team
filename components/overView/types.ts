import { IconType } from 'react-icons';

//attendancecard
export type AttendanceCardProps = {
  count: number;
  label: string;
  isSelected?: boolean;
  onClick?: () => void;
};

// JSON TYPES
export type Task = {
  title: string;
  subtitle?: string;
  progress?: number;
  total?: number;
  iconType?: 'arrow' | 'download' | 'none';
  showProgress?: boolean;
};

export type TQuickAction = {
  title: string;
  icon: string;
  iconColor: string;
};

export type ChecklistItem = {
  id: number;
  title: string;
  description?: string;
  icon: IconType;
  progress: string;
  status: 'completed' | 'in_progress' | 'pending';
  color: string;
};

export type AttendanceItem = {
  label: string;
  value: number;
};

export type MessageData = {
  icon: IconType;
  message: string;
};

export interface TableDataItem {
  title: string;
  subtitle: string;
  groupLabel: string;
}

export interface IVideo {
  src: string;
  type: string;
}

export interface IVideoCard {
  title: string;
  video: IVideo;
  closeIcon: string;
}

export interface IMilestone {
  title: string;
  icon: string;
  count: number;
  label: string;
}

export interface NextMilestone {
  icon: string;
  label: string;
  progress: number;
  gradient: string;
  stars?: number;
}

export interface Milestones {
  achieved: IMilestone;
  nextTitle: string;
  next: NextMilestone[];
}
export interface LeftSideOverviewData {
  videoCard: IVideoCard;
  milestones: Milestones;
}
export interface CardItem {
  id: string;
  description: string;
  buttonLabel: string;
  imageUrl?: string;
  icon?: string;
  iconClassName?: string;
}
