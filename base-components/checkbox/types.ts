export type CheckBoxProps = {
  title?: string;
  description?: string;
  checked?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  innerClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  checkClass?: string;
};
