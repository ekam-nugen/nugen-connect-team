'use client';

import { useState } from 'react';
import { FaFilter, FaCog } from 'react-icons/fa';
import clsx from 'clsx';
import { Button } from '@/base-components/button';
import { getMessage } from '../constants';
import { Input } from '@/base-components/input';
import { ATTENDANCE } from '@/lib/en';
import { AttendanceItem } from '../types';

export default function AttendanceSection({
  attendanceData,
}: Readonly<{
  attendanceData: AttendanceItem[];
}>) {
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  return (
    <div className="p-6 bg-background rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <h2 className="text-2xl font-bold text-slate-800">{ATTENDANCE}</h2>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Input searchIcon placeholder="Search" />
          </div>
          <Button variant="outline" size="icon" className="rounded-full">
            <FaFilter className="text-primary w-10 h-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <FaCog className="text-primary w-10 h-4" />
          </Button>
        </div>
      </div>

      {/* Attendance Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {attendanceData?.map(({ label, value }) => (
          <div
            key={label}
            onClick={() => setSelectedLabel(label)}
            className={clsx(
              'cursor-pointer rounded-xl border p-6 text-center transition-all duration-200 w-full',
              selectedLabel === label
                ? 'bg-blue-50 border-blue-300'
                : 'border-gray-light hover:border-blue-200'
            )}
          >
            <div className="text-2xl font-semibold text-gray-muted">
              {value}
            </div>
            <div className="mt-1 text-md font-medium text-slate-800">
              {label}
            </div>
          </div>
        ))}
      </div>
      {selectedLabel && getMessage(selectedLabel) && (
        <div className="mt-12 flex flex-col items-center text-center text-gray-muted">
          {(() => {
            const { icon: Icon, message } = getMessage(selectedLabel)!;
            return (
              <>
                <Icon className="w-10 h-10 text-gray-subtle" />
                <div className="mt-3 text-sm">{message}</div>
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
}
