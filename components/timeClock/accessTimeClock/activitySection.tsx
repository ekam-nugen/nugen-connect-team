import React from 'react';
import { TimelineProps } from '../types';
import { ACTIVITY } from '@/lib/en';

const ActivityTimeline: React.FC<TimelineProps> = ({ date, items }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">{ACTIVITY}</h2>
      <div className="flex">
        <div className="w-16 text-sm font-semibold text-gray-500 pt-2">
          {date}
        </div>
        <div className="relative flex flex-col items-center mx-4">
          <div className="absolute top-0 bottom-0 w-px bg-gray-300 left-1/2 -translate-x-1/2" />
        </div>
        <div className="flex-1 space-y-6">
          {items?.map((item, index) => (
            <div key={index} className="relative flex items-start gap-4">
              <div className="absolute -left-6 top-[30%] transform -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full z-10" />
              <div className="flex items-center justify-center w-10 h-10 bg-green-600 rounded-full text-white font-semibold text-sm">
                {item.initials}
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900 mb-1">
                  {item.user} {item.action}
                </p>
                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${item.tagColor}`}
                >
                  {item.tag}
                </div>
                <p className="text-xs text-gray-400 mt-1">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityTimeline;
