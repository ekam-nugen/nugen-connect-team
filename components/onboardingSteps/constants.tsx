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
  SecondStepContentType,
  TLogoUploadStep,
  TPhoneNumberStep,
  TStepThreeFeatureCategory,
} from './types';
import { MdPhoneIphone } from 'react-icons/md';
export const FirstStepContent = [
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
        icon: <FaBuilding className="text-yellow-500" />,
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
        icon: <FaHeartbeat className="text-rose-500" />,
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
        icon: <FaUtensils className="text-orange-500" />,
        subIndustries: ['Bars', 'Caterers', 'Restaurants', 'Other'],
      },
      {
        label: 'Retail',
        icon: <FaShoppingBag className="text-purple-500" />,
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
        icon: <FaBroom className="text-blue-500" />,
        subIndustries: ['Commercial', 'Residential', 'Other'],
      },
      {
        label: 'Manufacturing',
        icon: <FaIndustry className="text-lime-500" />,
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
        icon: <FaShieldAlt className="text-blue-800" />,
        subIndustries: [],
      },
      {
        label: 'Accommodation',
        icon: <FaHotel className="text-amber-700" />,
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
        icon: <FaUserGroup className="text-pink-500" />,
        subIndustries: ['Healthcare', 'Other'],
      },
      {
        label: 'Transportation',
        icon: <FaTruck className="text-amber-950" />,
        subIndustries: [
          'Logistics',
          'Truck Transportation',
          'Transit',
          'Other',
        ],
      },
      {
        label: 'Entertainment & Recreation',
        icon: <FaMusic className="text-pink-500" />,
        subIndustries: [
          'Live Entertainment',
          'Museums & Monuments',
          'Recreation & Amusement',
          'Other',
        ],
      },
      {
        label: 'Real Estate',
        icon: <FaHome className="text-green-600" />,
        subIndustries: ['Licensing', 'Real Estate', 'Rental Services', 'Other'],
      },
      {
        label: 'Government',
        icon: <FaUniversity className="text-blue-600" />,
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
        icon: <FaBook className="text-indigo-600" />,
        subIndustries: ['Other'],
      },
      {
        label: 'Information',
        icon: <FaInfoCircle className="text-teal-500" />,
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
        icon: <FaWarehouse className="text-orange-700" />,
        subIndustries: ['Warehousing', 'Storage', 'Other'],
      },
      {
        label: 'Finance',
        icon: <FaMoneyBillWave className="text-green-700" />,
        subIndustries: [
          'Monetary Authority',
          'Commercial Banking',
          'Financial Services',
          'Other',
        ],
      },
      {
        label: 'Insurance',
        icon: <FaClipboardCheck className="text-cyan-600" />,
        subIndustries: [
          'Agencies & Brokerages',
          'Funds & Trusts',
          'Insurance Carriers',
          'Other',
        ],
      },
      {
        label: 'Personal Services',
        icon: <FaHandsHelping className="text-pink-600" />,
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
  icon: MdPhoneIphone,
};
