import { SidebarDataType } from './types';
import {
  IoGiftOutline,
  IoDocumentOutline,
  IoPeopleOutline,
} from 'react-icons/io5';
import { CiMail } from 'react-icons/ci';
import { FiUsers } from 'react-icons/fi';
import { TiStopwatch } from 'react-icons/ti';
import { CgFormatLeft } from 'react-icons/cg';
import { SlEvent, SlUser } from 'react-icons/sl';
import { AiOutlineSchedule } from 'react-icons/ai';
import { PiChats, PiAddressBook } from 'react-icons/pi';
import { SiBookstack, SiReacthookform } from 'react-icons/si';
import { MdOutlineSupportAgent, MdOutlineCelebration } from 'react-icons/md';
import { BiSelectMultiple, BiAlarmOff } from 'react-icons/bi';
import { LuLayoutGrid, LuMessageSquareMore } from 'react-icons/lu';

export const sideBarData: SidebarDataType[] = [
  {
    title: 'Overview',
    hoverAnimate: false,
    items: [
      {
        icon: LuLayoutGrid,
        title: 'Overview',
        color: '',
      },
      {
        icon: CgFormatLeft,
        title: 'Activity',
        color: '',
      },
    ],
  },
  {
    title: 'User',
    hoverAnimate: false,
    items: [
      {
        icon: SlUser,
        title: 'User',
        color: '',
      },
      {
        icon: FiUsers,
        title: 'Smart groups',
        color: '',
      },
    ],
  },
  {
    title: 'Communication',
    section: 'Communicaiton',
    items: [
      {
        icon: PiChats,
        title: 'Chat',
        color: 'bg-orange-400',
      },
      {
        icon: SlEvent,
        title: 'Events',
        color: 'bg-green-400',
      },
      {
        icon: PiAddressBook,
        title: 'Directory',
        color: 'bg-pink-400',
      },
      {
        icon: CiMail,
        title: 'Updates',
        color: 'bg-blue-400',
      },
      {
        icon: MdOutlineSupportAgent,
        title: 'Help Desk',
        color: 'bg-red-400',
      },
      {
        icon: IoPeopleOutline,
        title: 'Survey',
        color: 'bg-pink-400',
      },
      {
        icon: LuMessageSquareMore,
        title: 'Text Messages',
        color: 'bg-pink-400',
      },
      {
        icon: SiBookstack,
        title: 'Forms',
        color: 'bg-purple-400',
      },
    ],
    addOption: [
      {
        title: 'operations',
        options: [
          {
            title: 'forms',
            icon: MdOutlineCelebration,
          },
        ],
      },
      {
        title: 'Communication',
        options: [
          {
            title: 'KnowledgeBase',
            icon: MdOutlineCelebration,
          },
        ],
      },
      {
        title: 'HR & Skills',
        options: [
          {
            title: 'KnowledgeBase',
            icon: MdOutlineCelebration,
          },
        ],
      },
    ],
  },
  {
    title: 'Operations',
    section: 'Operations',
    items: [
      {
        icon: TiStopwatch,
        title: 'Time Clock',
        color: 'bg-blue-400',
      },
      {
        icon: SiReacthookform,
        title: 'Forms',
        color: 'bg-purple-400',
      },
      {
        icon: AiOutlineSchedule,
        title: 'Job Schedule',
        color: 'bg-orange-400',
      },
      {
        icon: BiSelectMultiple,
        title: 'Quick Task',
        color: 'bg-orange-400',
      },
    ],
    addOption: [
      {
        title: 'operations',
        options: [
          {
            title: 'forms',
            icon: MdOutlineCelebration,
          },
        ],
      },
      {
        title: 'Communication',
        options: [
          {
            title: 'KnowledgeBase',
            icon: MdOutlineCelebration,
          },
        ],
      },
      {
        title: 'HR & Skills',
        options: [
          {
            title: 'KnowledgeBase',
            icon: MdOutlineCelebration,
          },
        ],
      },
    ],
  },
  {
    title: 'HR & Skills',
    section: 'HR & Skills',
    items: [
      {
        icon: MdOutlineCelebration,
        title: 'Cources',
        color: 'bg-purple-400',
      },
      {
        icon: IoGiftOutline,
        title: 'Rewards',
        color: 'bg-blue-400',
      },
      {
        icon: IoDocumentOutline,
        title: 'Documents',
        color: 'bg-sky-400',
      },
      {
        icon: PiAddressBook,
        title: 'Recognitions',
        color: 'bg-pink-400',
      },
      {
        icon: MdOutlineCelebration,
        title: 'Celebrations',
        color: 'bg-orange-400',
      },
      {
        icon: BiAlarmOff,
        title: 'Time Off',
        color: 'bg-green-400',
      },
    ],
    addOption: [
      {
        title: 'operations',
        options: [
          {
            title: 'forms',
            icon: MdOutlineCelebration,
          },
        ],
      },
      {
        title: 'Communication',
        options: [
          {
            title: 'KnowledgeBase',
            icon: MdOutlineCelebration,
          },
        ],
      },
      {
        title: 'HR & Skills',
        options: [
          {
            title: 'KnowledgeBase',
            icon: MdOutlineCelebration,
          },
        ],
      },
    ],
  },
];
