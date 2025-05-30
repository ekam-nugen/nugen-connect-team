export type EngagementChartData = {
  date: string;
  value: number;
};

export type EngagementChartProps = {
  data: EngagementChartData[];
  title?: string;
  subtitle?: string;
  groupLabel?: string;
  timeFrameLabel?: string;
};

export type TdailyActivity = {
  title: string;
  icon: string;
  messageTitle: string;
  messageSubtitle: string;
  buttonLabel: string;
};
