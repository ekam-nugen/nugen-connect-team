import {
  FaUsers,
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
  FaTimes,
  FaCalendarAlt,
} from 'react-icons/fa';
import {
  MdAccessibility,
  MdChatBubbleOutline,
  MdOutlineCelebration,
  MdOutlineSupportAgent,
} from 'react-icons/md';
import { TfiAlignRight } from 'react-icons/tfi';
import {
  IoIosAt,
  IoMdAttach,
  IoMdLink,
  IoMdNotificationsOutline,
  IoIosHelpCircle,
  IoIosNotificationsOutline,
} from 'react-icons/io';
import { BsEmojiSmile } from 'react-icons/bs';
import {
  PiAddressBook,
  PiChats,
  PiNumberThreeBold,
  PiInfinity,
} from 'react-icons/pi';
import { LuLayoutGrid } from 'react-icons/lu';
import { CgFormatLeft, CgGirl, CgLogOff, CgProfile } from 'react-icons/cg';
import { FiUsers } from 'react-icons/fi';
import { SlUser } from 'react-icons/sl';
import { AiOutlineSchedule } from 'react-icons/ai';
import { BiSelectMultiple } from 'react-icons/bi';
import { CiMail } from 'react-icons/ci';
import { IoDocumentOutline, IoSettingsOutline } from 'react-icons/io5';
import { SiBookstack, SiReacthookform } from 'react-icons/si';
import { TiStopwatch } from 'react-icons/ti';
import { RiCustomerService2Line } from 'react-icons/ri';
export const allIcons: Record<string, React.ReactNode> = {
  CgGirl: <CgGirl />,
  CiMail: <CiMail />,
  SlUser: <SlUser />,
  FiUsers: <FiUsers />,
  PiChats: <PiChats />,
  FaUsers: <FaUsers />,
  FaCrown: <FaCrown />,
  FaClock: <FaClock />,
  FaMagic: <FaMagic />,
  FaTimes: <FaTimes />,
  CgLogOff: <CgLogOff />,
  CgProfile: <CgProfile />,
  FaRunning: <FaRunning />,
  IoIosAt: <IoIosAt />,
  IoMdLink: <IoMdLink />,
  PiInfinity: <PiInfinity />,
  FaDownload: <FaDownload />,
  FaEnvelope: <FaEnvelope />,
  FaUserPlus: <FaUserPlus />,
  TiStopwatch: <TiStopwatch />,
  FaUserCheck: <FaUserCheck />,
  SiBookstack: <SiBookstack />,
  IoMdAttach: <IoMdAttach />,
  BsEmojiSmile: <BsEmojiSmile />,
  TfiAlignRight: <TfiAlignRight />,
  FaCalendarAlt: <FaCalendarAlt />,
  FaChevronRight: <FaChevronRight />,
  FaClipboardCheck: <FaClipboardCheck />,
  PiNumberThreeBold: <PiNumberThreeBold />,
  MdChatBubbleOutline: <MdChatBubbleOutline />,
  LuLayoutGrid: <LuLayoutGrid />,
  CgFormatLeft: <CgFormatLeft />,
  PiAddressBook: <PiAddressBook />,
  MdAccessibility: <MdAccessibility />,
  IoIosHelpCircle: <IoIosHelpCircle />,
  SiReacthookform: <SiReacthookform />,
  BiSelectMultiple: <BiSelectMultiple />,
  AiOutlineSchedule: <AiOutlineSchedule />,
  IoDocumentOutline: <IoDocumentOutline />,
  IoSettingsOutline: <IoSettingsOutline />,
  MdOutlineCelebration: <MdOutlineCelebration />,
  MdOutlineSupportAgent: <MdOutlineSupportAgent />,
  RiCustomerService2Line: <RiCustomerService2Line />,
  IoMdNotificationsOutline: <IoMdNotificationsOutline />,
  IoIosNotificationsOutline: <IoIosNotificationsOutline />,
};

export function getIconByName(name: string): React.ReactNode {
  return allIcons[name];
}
