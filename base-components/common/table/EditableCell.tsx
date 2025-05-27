'use client';

import { ChangeEvent } from 'react';
import { EditableCellProps } from './constants';

const EditableCell = ({
  value,
  rowId,
  accessKey,
  onChange,
}: EditableCellProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(rowId, accessKey, e.target.value);
  };

  return (
    <input
      className="rounded-md border p-1"
      defaultValue={value}
      onChange={handleChange}
    />
  );
};

export default EditableCell;
