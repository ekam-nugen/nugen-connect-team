export type FirstStepContentType = {
  type: string;
  placeholder: string;
  label: string;
};
export interface ISecondStepOption {
  label: string;
  icon?: string;
  subIndustries?: string[];
}

export type SecondStepContentType = {
  label: string;
  options: ISecondStepOption[];
};

export type SecondStepContentItemProps = {
  item: SecondStepContentType;
  selectedIndustry: string | null;
  setSelectedIndustry: (industry: string | null) => void;
  handleIndustryClick: (industry: string) => void;
};

export type TStepThreeFeatureItem = {
  label: string;
  icon: string;
};

export type TStepThreeFeatureCategory = {
  category: string;
  features: TStepThreeFeatureItem[];
};
export type StepThreeFeaturesProps = {
  data: TStepThreeFeatureCategory[];
  selectedFeatures: string[];
  handleFeatureClick: (label: string) => void;
};

export type TLogoUploadStep = {
  title: string;
  subtitle: string;
  uploadPrompt: string;
  browseText: string;
  note: string;
};

export type LogoUploadStepProps = {
  data: TLogoUploadStep;
  logo: File | null;
  handleRemoveClick: () => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TPhoneNumberStep = {
  title: string;
  subtitle: string;
  helperText: string;
  icon: string;
};
export type PhoneNumberStepProps = {
  data: TPhoneNumberStep;
  phone: string;
  setPhone: (phone: string) => void;
};
export type OnboardingStepsDataType = {
  FirstStepContent: FirstStepContentType[];
  SecondStepContent: SecondStepContentType[];
  StepThreeFeaturesContent: TStepThreeFeatureCategory[];
  LogoUploadStepContent: TLogoUploadStep;
  PhoneNumberStepContent: TPhoneNumberStep;
};
export interface OnboardingStepsProps {
  boardingStepsData: OnboardingStepsDataType;
  boardingStep: number;
  companyName: string;
  setCompanyName: (val: string) => void;
  role: string;
  setRole: (val: string) => void;
  selectedIndustry: string | null;
  setSelectedIndustry: (industry: string | null) => void;
  handleIndustryClick: (industry: string) => void;
  selectedFeatures: string[];
  handleFeatureClick: (feature: string) => void;
  logo: File | null;
  setLogo: (file: File | null) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  phone: string;
  handlePhoneChange: (val: string) => void;
}
