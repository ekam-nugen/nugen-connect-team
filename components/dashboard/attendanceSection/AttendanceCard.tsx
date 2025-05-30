import React from 'react';
import { AttendanceCardProps } from '../types';

const AttendanceCard = ({
  count,
  label,
  isSelected,
  onClick,
}: AttendanceCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer w-full p-6 border rounded-2xl text-left transition-all 
        ${isSelected ? 'bg-blue-50 border-blue-300' : 'bg-accent border-gray-light'}
        hover:shadow-sm`}
    >
      <div className="text-2xl font-semibold text-gray-muted">{count}</div>
      <div className="text-sm mt-1 text-gray-dark">{label}</div>
    </div>
  );
};

export default AttendanceCard;
