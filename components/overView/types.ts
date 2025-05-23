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
  icon: IconType;
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
