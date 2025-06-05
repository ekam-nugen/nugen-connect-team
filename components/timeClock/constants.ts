import { CommonTableHeader } from '@/base-components/common/table/types';
import { TTimeClockCard, TTimeClockHeading } from './types';

export const TimeClockHeading: TTimeClockHeading[] = [
  {
    title: 'Time Clock Lobby',
    username: 'SK',
  },
];
export const TimeClockCard: TTimeClockCard[] = [
  {
    smallTitle: 'Time Clock',
    largeTitle: 'Time Clock',
    assigned: 'Assigned',
    groupLabel: 'All users groups',
    nameTitle: 'SK',
    name: 'Simran Kaur',
    buttonText: 'Access clock',
    roles: 'Admins',
  },
];

export const TableHeader = [
  { accessKey: 'image', title: '' },
  { accessKey: 'first_name', title: 'First Name' },
  { accessKey: 'job', title: 'Job' },
  { accessKey: 'clock_in', title: 'Clock in' },
  { accessKey: 'clock_out', title: 'Clock out' },
  { accessKey: 'total_hours', title: 'Total hours' },
  { accessKey: 'paid_time_off', title: 'Paid time off' },
] as CommonTableHeader[];

export const tableData = [
  {
    id: '1',
    image: '/images/userProfile.png',
    first_name: 'Pardeep',
    initials: 'PK',
    job: '--',
    clock_in: '--',
    clock_out: '--',
    total_hours: '--',
    paid_time_off: '--',
    badge: 'crown',
  },
  {
    id: '2',
    image: '/images/userProfile.png',
    first_name: 'HarmanDeep',
    initials: 'HS',
    job: '--',
    clock_in: '--',
    clock_out: '--',
    total_hours: '--',
    paid_time_off: '--',
  },
  {
    id: '3',
    image: '/images/userProfile.png',
    first_name: 'Kirti',
    initials: 'KB',
    job: '--',
    clock_in: '--',
    clock_out: '--',
    total_hours: '--',
    paid_time_off: '--',
  },
];

export const activities = [
  {
    time: '13:25',
    user: 'Pardeep Kumar',
    action: 'Clocked out of',
    tag: 'Work site A',
    tagColor: 'bg-gray-200 text-gray-700',
    initials: 'PK',
  },
  {
    time: '13:25',
    user: 'Pardeep Kumar',
    action: 'Clocked in to',
    tag: 'Work site A',
    tagColor: 'bg-gray-200 text-gray-700',
    initials: 'PK',
  },
  {
    time: '13:25',
    user: 'Pardeep Kumar',
    action: 'Clocked out of',
    tag: 'Shift manager',
    tagColor: 'bg-rose-100 text-red-700',
    initials: 'PK',
  },
  {
    time: '13:25',
    user: 'Pardeep Kumar',
    action: 'Clocked in to',
    tag: 'Shift manager',
    tagColor: 'bg-rose-100 text-red-700',
    initials: 'PK',
  },
  {
    time: '13:25',
    user: 'Pardeep Kumar',
    action: 'Clocked out of',
    tag: 'Customer 1',
    tagColor: 'bg-gray-200 text-gray-700',
    initials: 'PK',
  },
];
