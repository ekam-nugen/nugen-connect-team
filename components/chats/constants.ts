import { TChatPerson } from './types';
export const actionIcons = [
  'IoMdAttach',
  'BsEmojiSmile',
  'IoMdLink',
  'IoIosAt',
];
export const chatPersons: TChatPerson[] = [
  {
    logoIcon: 'FaUsers',
    logoclass: 'bg-orange-400 text-xl',
    name: 'All users team chat',
    message: 'This is a new chat',
    time: '26/05/2025',
    showStatusIcon: true,
  },
  {
    logoIcon: 'PiInfinity',
    logoclass: 'bg-white text-primary border-primary border-2 text-xl',
    name: 'Connecteam Tips',
    message: 'Hi, I’ve just sent you a link to the Conne...',
    time: '15:24',
    unreadCount: 15,
  },
  {
    logo: 'SK',
    logoclass: 'bg-pink-300',
    name: 'Simran Kaur',
    message: 'This is a new chat',
    time: '15:20',
  },
  {
    logo: 'HS',
    logoclass: 'bg-green-700',
    name: 'Harman Singh',
    message: 'This is a new chat',
    time: '15:20',
  },
  {
    logo: 'AD',
    logoclass: 'bg-purple-400',
    name: 'Aman deep',
    message: 'This is a new chat',
    time: '15:20',
  },
  {
    logo: 'SA',
    logoclass: 'bg-yellow-700',
    name: 'Samarth Arora',
    message: 'This is a new chat',
    time: '15:20',
  },
];
