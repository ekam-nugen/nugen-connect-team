export type SelectBoxOption = {
  id: string;
  value: string;
  label: string;
};

export type SelectBoxProps = {
  title?: string;
  placeholder?: string;
  options?: SelectBoxOption[];
  error?: boolean;
  helpText?: string;
  disable?: boolean;
  isSearchBar?: boolean;
  toolkit?: boolean;
  searchPlaceholder?: string;
  className?: string;
  iconClass?: string;
  onChange: (value: string) => void;
  value?: string;
  lableClass?: string;
  loading?: boolean;
  requiredField?: boolean;
  tooltipText?: string;
  multipleCheck?: boolean;
  onMultiChange?: (values: string[]) => void;
  filteredOptions: SelectBoxOption[];
  setFilteredOptions: (options: SelectBoxOption[]) => void;
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
};
