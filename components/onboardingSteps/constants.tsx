import {
  FaBuilding,
  FaHeartbeat,
  FaUtensils,
  FaShoppingBag,
  FaBroom,
  FaIndustry,
  FaShieldAlt,
  FaHotel,
  FaHome,
  FaUniversity,
  FaInfoCircle,
  FaHandsHelping,
} from 'react-icons/fa';
import {
  FaBook,
  FaClipboardCheck,
  FaMoneyBillWave,
  FaMusic,
  FaTruck,
  FaUserGroup,
  FaWarehouse,
} from 'react-icons/fa6';

import {
  FirstStepContentType,
  SecondStepContentType,
  TLogoUploadStep,
  TPhoneNumberStep,
  TStepThreeFeatureCategory,
} from './types';
import { MdPhoneIphone } from 'react-icons/md';
export const iconMap: Record<string, React.ReactNode> = {
  FaBuilding: <FaBuilding className="text-yellow-500" />,
  FaHeartbeat: <FaHeartbeat className="text-rose-500" />,
  FaUtensils: <FaUtensils className="text-orange-500" />,
  FaShoppingBag: <FaShoppingBag className="text-purple-500" />,
  FaBroom: <FaBroom className="text-blue-500" />,
  FaIndustry: <FaIndustry className="text-lime-500" />,
  FaShieldAlt: <FaShieldAlt className="text-blue-800" />,
  FaHotel: <FaHotel className="text-amber-700" />,
  FaUserGroup: <FaUserGroup className="text-pink-500" />,
  FaTruck: <FaTruck className="text-amber-950" />,
  FaMusic: <FaMusic className="text-pink-500" />,
  FaHome: <FaHome className="text-green-600" />,
  FaUniversity: <FaUniversity className="text-blue-600" />,
  FaBook: <FaBook className="text-indigo-600" />,
  FaInfoCircle: <FaInfoCircle className="text-teal-500" />,
  FaWarehouse: <FaWarehouse className="text-orange-700" />,
  FaMoneyBillWave: <FaMoneyBillWave className="text-green-700" />,
  FaClipboardCheck: <FaClipboardCheck className="text-cyan-600" />,
  FaHandsHelping: <FaHandsHelping className="text-pink-600" />,
  MdPhoneIphone: <MdPhoneIphone />,
};
export const FirstStepContent: FirstStepContentType[] = [
  {
    type: 'input',
    placeholder: 'Company name',
    label: 'What’s your company name?',
  },
  {
    type: 'input',
    placeholder: 'Job title',
    label: 'What’s your role in the company?',
  },
];

export const SecondStepContent: SecondStepContentType[] = [
  {
    label: 'How many employees do you have?',
    options: [
      { label: '1-10' },
      { label: '11-30' },
      { label: '31-50' },
      { label: '51-100' },
      { label: '101-200' },
      { label: '201-500' },
      { label: '501-1000' },
      { label: '1000+' },
    ],
  },
  {
    label: 'What is your business industry?',
    options: [
      {
        label: 'Construction',
        icon: 'FaBuilding ',
        subIndustries: [
          'Commercial',
          'Heavy Civil',
          'Industrial',
          'Residential',
          'Specialty Trades',
          'Other',
        ],
      },
      {
        label: 'Healthcare',
        icon: 'FaHeartbeat ',
        subIndustries: [
          'Ambulatory',
          'Assisted Living',
          'Home Care',
          'Hospitals',
          'Social Care',
          'Staffing',
          'Other',
        ],
      },
      {
        label: 'Food & Beverage',
        icon: 'FaUtensils ',
        subIndustries: ['Bars', 'Caterers', 'Restaurants', 'Other'],
      },
      {
        label: 'Retail',
        icon: 'FaShoppingBag ',
        subIndustries: [
          'Apparel',
          'Home Goods',
          'Sporting Goods',
          'Super Market',
          'Other',
        ],
      },
      {
        label: 'Cleaning',
        icon: 'FaBroom ',
        subIndustries: ['Commercial', 'Residential', 'Other'],
      },
      {
        label: 'Manufacturing',
        icon: 'FaIndustry ',
        subIndustries: [
          'Food & Beverages',
          'Machinery',
          'Metal Products',
          'Plastics and Chemicals',
          'Printing',
          'Textile and Leather',
          'Miscellaneous',
          'Other',
        ],
      },
      {
        label: 'Security',
        icon: 'FaShieldAlt ',
        subIndustries: [],
      },
      {
        label: 'Accommodation',
        icon: 'FaHotel ',
        subIndustries: [
          'Air BnB',
          'B&B Inns',
          'Casino-Hotels',
          'Hotels',
          'Parks & Campgrounds',
          'Other',
        ],
      },
      {
        label: 'Staffing',
        icon: 'FaUserGroup ',
        subIndustries: ['Healthcare', 'Other'],
      },
      {
        label: 'Transportation',
        icon: 'FaTruck ',
        subIndustries: [
          'Logistics',
          'Truck Transportation',
          'Transit',
          'Other',
        ],
      },
      {
        label: 'Entertainment & Recreation',
        icon: 'FaMusic ',
        subIndustries: [
          'Live Entertainment',
          'Museums & Monuments',
          'Recreation & Amusement',
          'Other',
        ],
      },
      {
        label: 'Real Estate',
        icon: 'FaHome ',
        subIndustries: ['Licensing', 'Real Estate', 'Rental Services', 'Other'],
      },
      {
        label: 'Government',
        icon: 'FaUniversity ',
        subIndustries: [
          'Economic Management',
          'Government Administration',
          'Human Resource Management',
          'Public Safety',
          'Other',
        ],
      },
      {
        label: 'Education',
        icon: 'FaBook ',
        subIndustries: ['Other'],
      },
      {
        label: 'Information',
        icon: 'FaInfoCircle ',
        subIndustries: [
          'Information Services',
          'Telecommunication',
          'Media',
          'Publishing',
          'Other',
        ],
      },
      {
        label: 'Warehousing',
        icon: 'FaWarehouse ',
        subIndustries: ['Warehousing', 'Storage', 'Other'],
      },
      {
        label: 'Finance',
        icon: 'FaMoneyBillWave ',
        subIndustries: [
          'Monetary Authority',
          'Commercial Banking',
          'Financial Services',
          'Other',
        ],
      },
      {
        label: 'Insurance',
        icon: 'FaClipboardCheck ',
        subIndustries: [
          'Agencies & Brokerages',
          'Funds & Trusts',
          'Insurance Carriers',
          'Other',
        ],
      },
      {
        label: 'Personal Services',
        icon: 'FaHandsHelping ',
        subIndustries: [
          'Household',
          'Personal Care',
          'Religious',
          'Repair and Maintenance',
          'Social',
          'Other',
        ],
      },
      {
        label: 'Other',
        subIndustries: [],
      },
    ],
  },
];

export const StepThreeFeaturesContent: TStepThreeFeatureCategory[] = [
  {
    category: 'Operations',
    features: [
      { label: 'Time clock', icon: '⏱️' },
      { label: 'Schedule', icon: '📅' },
      { label: 'Forms & Checklists', icon: '📋' },
      { label: 'Task management', icon: '🗓️' },
    ],
  },
  {
    category: 'Communication',
    features: [
      { label: 'Chat & Updates', icon: '💬' },
      { label: 'Directory', icon: '📇' },
      { label: 'Events', icon: '📆' },
      { label: 'Knowledge base', icon: '📚' },
    ],
  },
  {
    category: 'HR & Skills',
    features: [
      { label: 'Time off management', icon: '🌤️' },
      { label: 'Training & Onboarding', icon: '📖' },
      { label: 'Document management', icon: '📁' },
      { label: 'Recognitions & Rewards', icon: '🎁' },
    ],
  },
];

export const LogoUploadStepContent: TLogoUploadStep = {
  title: 'Make it your own',
  subtitle: 'Insert your logo',
  uploadPrompt: 'Drag your logo here',
  browseText: 'Browse',
  note: 'Change from the settings menu at any time',
};
export const PhoneNumberStepContent: TPhoneNumberStep = {
  title: "What's your mobile number?",
  subtitle:
    'Log in to your app easily and securely with your mobile phone number',
  helperText: "We'll text you the link to download your mobile app",
  icon: 'MdPhoneIphone',
};
