import {
  FaCrown,
  FaClipboardCheck,
  FaEnvelope,
  FaChevronRight,
  FaClock,
  FaDownload,
  FaUserPlus,
  FaRunning,
  FaUserCheck,
  FaMagic,
} from 'react-icons/fa';
import {
  Task,
  TQuickAction,
  AttendanceItem,
  MessageData,
  ChecklistItem,
  TableDataItem,
  LeftSideOverviewData,
  CardItem,
} from './types';
import {
  EngagementChartData,
  TdailyActivity,
} from '@/base-components/graphs/types';
import creditLogo from '../../public/images/free-credits.svg';

export const tasks: Task[] = [
  {
    title: 'Activate 5 features',
    progress: 0,
    total: 5,
    iconType: 'arrow',
    showProgress: true,
  },
  {
    title: 'Add 3 admins to your dashboard',
    progress: 0,
    total: 3,
    iconType: 'arrow',
    showProgress: true,
  },
  {
    title: 'Add 10 users to test the mobile app',
    progress: 5,
    total: 10,
    iconType: 'arrow',
    showProgress: true,
  },
  {
    title: 'Download our product presentation',
    subtitle:
      'Share it with colleagues and other decision makers in your company',
    iconType: 'download',
    showProgress: false,
  },
  {
    title: 'Follow this checklist during your trial',
    subtitle:
      'It will guide you on how to evaluate Connecteam for your company',
    iconType: 'arrow',
    showProgress: false,
  },
  {
    title: 'Set a 15 minutes demo with our experts',
    progress: 0,
    total: 3,
    iconType: 'arrow',
    showProgress: false,
  },
  {
    title: 'Check out our rich help center for answers and tips',
    progress: 0,
    total: 3,
    iconType: 'arrow',
    showProgress: false,
  },
  {
    title: 'Check out our amazing youtube channel',
    progress: 0,
    total: 3,
    iconType: 'arrow',
    showProgress: false,
  },
];

// QUICK ACTIONS
export const quickActions: TQuickAction[] = [
  { title: 'Add users', iconColor: 'text-green-500', icon: 'FaUsers' },
  { title: 'Add admins', iconColor: 'text-yellow-500', icon: 'FaCrown ' },
  {
    title: 'Add a task',
    iconColor: 'text-purple-500',
    icon: 'FaClipboardCheck',
  },
  { title: 'Send an update', iconColor: 'text-blue-500', icon: 'FaEnvelope' },
];

export const quickTask = [
  {
    icons: FaUserPlus,
    iconDescription: 'Add Users',
    color: 'text-green-500',
  },
  { icons: FaCrown, iconDescription: 'Add Admin', color: 'text-amber-500' },
  {
    icons: FaClipboardCheck,
    iconDescription: 'Add a Task',
    color: 'text-purple-500',
  },
  {
    icons: FaEnvelope,
    iconDescription: 'Send an Update',
    color: 'text-blue-500',
  },
];

// ATTENDANCE
export const attendance = [
  { icons: FaRunning, iconDescription: 'Nobody is running late' },
  { icons: FaClock, iconDescription: 'Nobody is clocked in' },
];

export const attendanceData: AttendanceItem[] = [
  { label: 'Running late', value: 0 },
  { label: 'Clocked in', value: 0 },
  { label: 'On time off', value: 0 },
];

export const getMessage = (label: string): MessageData | null => {
  const messageMap: Record<string, MessageData> = {
    'Running late': { icon: FaClock, message: 'Nobody is running late' },
    'Clocked in': { icon: FaUserCheck, message: 'Nobody has clocked in' },
    'On time off': { icon: FaMagic, message: 'Nobody is on time off' },
  };
  return messageMap[label] ?? null;
};

// CHECKLIST
export const checklistItems: ChecklistItem[] = [
  {
    id: 1,
    title: 'Activate 5 features',
    icon: FaChevronRight,
    progress: '5/5',
    status: 'completed',
    color: 'bg-gradient-to-b from-red-500 via-orange-500 to-amber-900',
  },
  {
    id: 2,
    title: 'Add 3 admins to your dashboard',
    icon: FaChevronRight,
    progress: '1/3',
    status: 'in_progress',
    color: 'bg-gradient-to-b from-teal-200 via-cyan-500 to-teal-900',
  },
  {
    id: 3,
    title: 'Add 10 users to test the mobile app',
    icon: FaChevronRight,
    progress: '5/10',
    status: 'in_progress',
    color: 'bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500',
  },
  {
    id: 4,
    title: 'Download our product presentation',
    description:
      'It will guide you on how to evaluate Connecteam for your company',
    icon: FaDownload,
    progress: '',
    status: 'pending',
    color: 'bg-gradient-to-b from-amber-200 via-orange-500 to-yellow-900',
  },
  {
    id: 5,
    title: 'Follow this checklist during your trial',
    icon: FaDownload,
    progress: '',
    status: 'pending',
    color: 'bg-gradient-to-b from-teal-400 via-cyan-500 to-green-900',
  },
  {
    id: 6,
    title: 'Download our product presentation',
    description:
      'Share it with colleagues and other decision makers in your company',
    icon: FaChevronRight,
    progress: '1/3',
    status: 'in_progress',
    color: 'bg-gradient-to-b from-indigo-400 via-sky-500 to-cyan-900',
  },
  {
    id: 7,
    title: 'Add 10 users to test the mobile app',
    icon: FaChevronRight,
    progress: '5/10',
    status: 'in_progress',
    color: 'bg-gradient-to-b from-amber-200 via-orange-500 to-yellow-900',
  },
  {
    id: 8,
    title: 'Download our product presentation',
    description:
      'It will guide you on how to evaluate Connecteam for your company',
    icon: FaDownload,
    progress: '',
    status: 'pending',
    color: 'bg-gradient-to-b from-teal-900 via-cyan-500 to-green-900',
  },
];

export const dailyActivity: TdailyActivity = {
  title: 'Daily Activity',
  icon: 'TfiAlignRight',
  messageTitle: 'No activity to display',
  messageSubtitle: 'Once your users interact with the app\nyou’ll see it here',
  buttonLabel: 'View History',
};

export const engagementData: EngagementChartData[] = [
  { date: '08/05', value: 0 },
  { date: '10/05', value: 0 },
  { date: '12/05', value: 0 },
  { date: '14/05', value: 0 },
  { date: '16/05', value: 0 },
  { date: '18/05', value: 1 },
  { date: '20/05', value: 2 },
  { date: '21/05', value: 1 },
];

export const tabledata: TableDataItem[] = [
  {
    title: 'Engagement',
    subtitle: 'Activity data for selected timeframe',
    groupLabel: 'Marketing Team',
  },
];

//leftsidedashboard
export const leftSideOverviewData: LeftSideOverviewData = {
  videoCard: {
    title: 'All about Connecteam',
    video: {
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      type: 'video/mp4',
    },
    closeIcon: 'FaTimes',
  },
  milestones: {
    achieved: {
      title: 'Achieved milestones',
      icon: 'PiNumberThreeBold',
      count: 3,
      label: 'Tasks Completed',
    },
    nextTitle: 'Next milestones',
    next: [
      {
        icon: 'FaClock',
        label: '5 clock-ins made',
        progress: 0,
        gradient: 'from-blue-400 to-blue-600',
      },
      {
        icon: 'FaCalendarAlt',
        label: '5 published shifts',
        progress: 25,
        gradient: 'from-blue-400 to-blue-600',
      },
      {
        icon: 'MdChatBubbleOutline',
        label: '50 chat messages sent',
        progress: 5,
        gradient: 'from-purple-400 to-purple-600',
        stars: 2,
      },
      {
        icon: 'FaEnvelope',
        label: '5 update interactions',
        progress: 90,
        gradient: 'from-blue-400 to-blue-600',
      },
    ],
  },
};

export const cards: CardItem[] = [
  {
    id: 'credit',
    description:
      'Get up to 170$ worth of credits to use when upgrading to our paid',
    buttonLabel: 'Get Credit',
    imageUrl: creditLogo,
  },
  {
    id: 'invite',
    description: "Users didn't log in to the app yet",
    buttonLabel: 'Select users to invite',
    icon: 'PiNumberThreeBold',
    iconClassName:
      'text-accent bg-gradient-to-r from-blue-600 to-violet-600 rounded-md text-2xl shadow-xl',
  },
];
