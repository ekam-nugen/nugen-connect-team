export type TaskCardProps = {
  title: string;
  subtitle?: string;
  progress?: number;
  total?: number;
  showProgress?: boolean;
  iconType?: 'arrow' | 'download' | 'none';
  onClick?: () => void;
};
