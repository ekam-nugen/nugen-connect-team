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
import { MdChatBubbleOutline } from 'react-icons/md';
import { TfiAlignRight } from 'react-icons/tfi';
import { PiNumberThreeBold } from 'react-icons/pi';

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
};

export function getIconByName(name: string): React.ReactNode {
  return allIcons[name];
}
