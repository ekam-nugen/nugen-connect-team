import { ReactNode } from 'react';

export interface ISecondStepOption {
  label: string;
  icon?: ReactNode;
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
