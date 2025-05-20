import { DateRange } from 'react-day-picker';

export type DatePickerProps = {
  className?: string;
  mode: 'range' | 'single';
  handleCheckInValue?: (value: Date) => void;
  checkInPropValue?: Date;
  handleDateRange?: (val: DateRange) => void;
  checkInVariant?: boolean;
  checkoutVariant?: boolean;
};

export type DPSelectedOption = {
  id: string;
  label: string;
  value: string;
};
