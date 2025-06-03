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
  MdChatBubbleOutline,
  MdOutlineCelebration,
  MdOutlineSupportAgent,
} from 'react-icons/md';
import { TfiAlignRight } from 'react-icons/tfi';
import { PiAddressBook, PiChats, PiNumberThreeBold } from 'react-icons/pi';
import { LuLayoutGrid } from 'react-icons/lu';
import { CgFormatLeft } from 'react-icons/cg';
import { FiUsers } from 'react-icons/fi';
import { SlUser } from 'react-icons/sl';
import { AiOutlineSchedule } from 'react-icons/ai';
import { BiSelectMultiple } from 'react-icons/bi';
import { CiMail } from 'react-icons/ci';
import { IoDocumentOutline } from 'react-icons/io5';
import { SiBookstack, SiReacthookform } from 'react-icons/si';
import { TiStopwatch } from 'react-icons/ti';

export const allIcons: Record<string, React.ReactNode> = {
  FaUsers: <FaUsers />,
  FaCrown: <FaCrown />,
  FaClock: <FaClock />,
  FaMagic: <FaMagic />,
  FaTimes: <FaTimes />,
  FaRunning: <FaRunning />,
  FaDownload: <FaDownload />,
  FaEnvelope: <FaEnvelope />,
  FaUserPlus: <FaUserPlus />,
  FaUserCheck: <FaUserCheck />,
  TfiAlignRight: <TfiAlignRight />,
  FaCalendarAlt: <FaCalendarAlt />,
  FaChevronRight: <FaChevronRight />,
  FaClipboardCheck: <FaClipboardCheck />,
  PiNumberThreeBold: <PiNumberThreeBold />,
  MdChatBubbleOutline: <MdChatBubbleOutline />,
  LuLayoutGrid: <LuLayoutGrid />,
  CgFormatLeft: <CgFormatLeft />,
  SlUser: <SlUser />,
  FiUsers: <FiUsers />,
  PiChats: <PiChats />,
  CiMail: <CiMail />,
  PiAddressBook: <PiAddressBook />,
  TiStopwatch: <TiStopwatch />,
  MdOutlineSupportAgent: <MdOutlineSupportAgent />,
  SiBookstack: <SiBookstack />,
  MdOutlineCelebration: <MdOutlineCelebration />,
  SiReacthookform: <SiReacthookform />,
  AiOutlineSchedule: <AiOutlineSchedule />,
  BiSelectMultiple: <BiSelectMultiple />,
  IoDocumentOutline: <IoDocumentOutline />,
};

export function getIconByName(name: string): React.ReactNode {
  return allIcons[name];
}
