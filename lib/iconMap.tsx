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
import { PiInfinity, PiNumberThreeBold } from 'react-icons/pi';
import { IoIosAt, IoMdAttach, IoMdLink } from 'react-icons/io';
import { BsEmojiSmile } from 'react-icons/bs';
export const allIcons: Record<string, React.ReactNode> = {
  FaUsers: <FaUsers />,
  FaCrown: <FaCrown />,
  FaClock: <FaClock />,
  FaMagic: <FaMagic />,
  FaTimes: <FaTimes />,
  FaRunning: <FaRunning />,
  IoIosAt: <IoIosAt />,
  IoMdLink: <IoMdLink />,
  PiInfinity: <PiInfinity />,
  FaDownload: <FaDownload />,
  FaEnvelope: <FaEnvelope />,
  FaUserPlus: <FaUserPlus />,
  IoMdAttach: <IoMdAttach />,
  FaUserCheck: <FaUserCheck />,
  BsEmojiSmile: <BsEmojiSmile />,
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
