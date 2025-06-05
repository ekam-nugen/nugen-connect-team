import React from 'react';
import { BiAlarm } from 'react-icons/bi';
import { PiGraduationCapDuotone } from 'react-icons/pi';
import { TimeClockHeaderProps } from './types';
import { PERMISSION } from '@/lib/en';

export default function TimeClockHeader({
  title,
  username,
  onPermissionClick,
  onHelpClick,
}: TimeClockHeaderProps) {
  return (
    <div className="bg-background rounded-xl shadow-sm p-4 flex justify-between items-center mb-4">
      <h1 className="flex items-center gap-2 text-2xl  text-gray-dark">
        <BiAlarm className="text-primary" size={24} />
        {title}
      </h1>
      <div className="flex items-center gap-4">
        <button
          className="text-gray-muted text-sm font-medium"
          onClick={onPermissionClick}
        >
          {PERMISSION}
        </button>
        <div className="bg-green-600 text-background text-sm font-semibold w-8 h-8 rounded-full flex items-center justify-center">
          {username}
        </div>
        <button
          onClick={onHelpClick}
          className="p-2 rounded-full hover:bg-gray-light border text-teal-400"
        >
          <PiGraduationCapDuotone size={20} />
        </button>
      </div>
    </div>
  );
}
