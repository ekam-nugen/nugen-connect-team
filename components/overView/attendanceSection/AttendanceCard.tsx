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
        ${isSelected ? 'bg-blue-50 border-blue-300' : 'bg-white border-gray-200'}
        hover:shadow-sm`}
    >
      <div className="text-2xl font-semibold text-gray-500">{count}</div>
      <div className="text-sm mt-1 text-gray-700">{label}</div>
    </div>
  );
};

export default AttendanceCard;
