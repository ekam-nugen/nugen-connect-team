import { StaticImageData } from 'next/image';
import React from 'react';

export type CommonTableHeader = {
  accessKey: keyof TableDataType;
  title: string;
  sortable?: boolean;
  isVisible?: (data: TableDataType) => boolean;
  cell?: ({
    row,
    getValue,
    setFunction,
    prevValue,
  }: {
    row: TableDataType;
    getValue: () => any;
    setFunction: (val: TableDataType[]) => void;
    prevValue: TableDataType[];
  }) => React.ReactNode;
};

export type onActionClickProps = {
  fn1: (rowData: TableDataType) => void;
  fn2?: (rowData: TableDataType) => void;
  onEdit?: (newData: TableDataType[]) => void;
  onToggle?: (rowData: TableDataType) => void;
};

export type TableDataType = {
  button?: {
    label?: string;
    onClick?: (row: TableDataType) => void;
  };
  switch?: boolean;
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  image?: StaticImageData | string;
  icon?: React.ReactNode;
  isBooked?: boolean;
  isActive?: boolean;
};

export type TableProps = {
  className?: string;
  notScrolable?: boolean;
  isHeaders?: boolean;
  headerCellClass?: string;
  data: TableDataType[];
  headers: CommonTableHeader[];
  actionButtonLabel?: { label: string }[];
  onActionClick?: onActionClickProps;
};

export type Props = TableProps & {
  selectedImage?: string | null;
  setSelectedImage?: (value: string | null) => void;
  closeModal?: () => void;
};

export interface EditableCellProps {
  value: string;
  rowId: string;
  accessKey: string;
  onChange: (id: string, key: string, value: string) => void;
}
