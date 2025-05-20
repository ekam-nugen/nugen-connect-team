import { IconType } from 'react-icons/lib';

export interface IStep {
  id: string | number;
  icon: IconType;
  title?: string;
  completed?: boolean;
  current?: boolean;
}

export interface StepperProps {
  steps: IStep[];
}
