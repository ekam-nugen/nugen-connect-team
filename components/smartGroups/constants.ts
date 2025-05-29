import { CommonTableHeader } from '@/base-components/common/table/types';
import UserProfile from '@/public/images/userprofile.png';
const TableHeader = [
  { accessKey: 'switch', title: '' },
  { accessKey: 'groupName', title: 'Group name' },
  { accessKey: 'connected', title: 'Connected' },
  { accessKey: 'createdBy', title: 'Created by' },
  { accessKey: 'assignments', title: 'Assignments' },
  { accessKey: 'image', title: 'Administered by' },
] as CommonTableHeader[];
export const categories = [
  {
    name: 'General groups',
    count: 2,
    color: 'text-blue-600',
    dot: 'bg-blue-500',
    tableData: {
      header: TableHeader,
      data: [
        {
          id: '1',
          groupName: 'All users group',
          createdBy: 'Harsimran Kaur',
          image: UserProfile,
          connected: '1 / 1',
          assignments: '2 selected',
        },
        {
          id: '2',
          groupName: 'All admins group',
          createdBy: 'Harsimran Kaur',
          image: UserProfile,
          connected: '1 / 1',
          assignments: '2 selected',
        },
      ],
    },
  },
  {
    name: 'Groups by Location',
    count: 0,
    color: 'text-blue-400',
    dot: 'bg-blue-300',
    tableData: {
      header: TableHeader,
      data: [
        {
          id: '1',
          groupName: 'All users group',
          createdBy: 'Simran Kaur',
          image: UserProfile,
          connected: '1 / 1',
          assignments: '2 selected',
        },
        {
          id: '2',
          groupName: 'All admins group',
          createdBy: 'Simran Kaur',
          image: UserProfile,
          connected: '1 / 1',
          assignments: '2 selected',
        },
      ],
    },
  },
  {
    name: 'Groups by Department',
    count: 3,
    color: 'text-blue-600',
    dot: 'bg-blue-500',
    tableData: {
      header: TableHeader,
      data: [
        {
          id: '1',
          groupName: 'All users group',
          createdBy: 'Pardeep',
          image: UserProfile,
          connected: '1 / 1',
          assignments: '2 selected',
        },
        {
          id: '2',
          groupName: 'All admins group',
          createdBy: 'Pardeep',
          image: UserProfile,
          connected: '1 / 1',
          assignments: '2 selected',
        },
      ],
    },
  },
  {
    name: 'Groups by Team',
    count: 3,
    color: 'text-amber-500',
    dot: 'bg-amber-400',
    tableData: {
      header: TableHeader,
      data: [
        {
          id: '1',
          groupName: 'All users group',
          createdBy: 'Harman',
          image: UserProfile,
          connected: '1 / 1',
          assignments: '2 selected',
        },
        {
          id: '2',
          groupName: 'All admins group',
          createdBy: 'Harman',
          image: UserProfile,
          connected: '1 / 1',
          assignments: '2 selected',
        },
      ],
    },
  },
  {
    name: 'Groups by Branch',
    count: 3,
    color: 'text-green-600',
    dot: 'bg-green-500',
    tableData: {
      header: TableHeader,
      data: [
        {
          id: '1',
          groupName: 'All users group',
          createdBy: 'Aman',
          image: UserProfile,
          connected: '1 / 1',
          assignments: '2 selected',
        },
        {
          id: '2',
          groupName: 'All admins group',
          createdBy: 'Aman',
          image: UserProfile,
          connected: '1 / 1',
          assignments: '2 selected',
        },
      ],
    },
  },
];
