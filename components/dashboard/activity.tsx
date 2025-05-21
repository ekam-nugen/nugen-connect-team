'use client';

import { useState } from 'react';
import { DatePicker } from '@/base-components/datepicker';
import { RiMenuLine } from 'react-icons/ri';

interface Activity {
  id: number;
  type: string;
  icon: string;
  color: string;
  user: string;
  action: string;
  title: string;
  description: string;
  timestamp: string;
}

interface ActivityLogProps {
  activities: Activity[];
}

export default function ActivityLog({ activities }: ActivityLogProps) {
  const [activeTab, setActiveTab] = useState('log');

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow rounded-lg p-4 flex items-center gap-4 mb-6">
        <RiMenuLine className="text-gray-500 w-5 h-5" />
        <h1 className="text-lg font-semibold text-gray-800">Activity</h1>
      </div>

      <div className="bg-white shadow rounded-lg px-6 pt-4 pb-2">
        {/* Tabs */}
        <div className="flex space-x-8 border-b text-sm font-medium text-gray-500">
          <button
            onClick={() => setActiveTab('log')}
            className={`pb-2 ${
              activeTab === 'log'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'hover:text-blue-600'
            }`}
          >
            Activity Log
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`pb-2 ${
              activeTab === 'analytics'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'hover:text-blue-600'
            }`}
          >
            Activity Analytics
          </button>
          <button
            onClick={() => setActiveTab('sales')}
            className={`pb-2 flex items-center gap-1 ${
              activeTab === 'sales'
                ? 'border-b-2 border-blue-600 text-blue-600'
                : 'hover:text-blue-600'
            }`}
          >
            Sales vs Labor
            <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
              New
            </span>
          </button>
        </div>

        {/* Date Picker */}
        <div className="mt-4 flex items-center space-x-2 text-sm">
          <span className="text-gray-600">Date range:</span>
          <DatePicker mode={'range'} />
        </div>

        {/* Tab Content */}
        <div className="mt-6 max-h-[400px] overflow-y-auto pr-2">
          {activeTab === 'log' && (
            <>
              <div className="text-sm text-gray-500 mb-4">Tue 20/5</div>
              <div className="space-y-6">
                {activities.map(item => (
                  <div
                    key={item.id}
                    className="flex items-start gap-4 relative"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                    <div className="flex items-center justify-center w-8 h-8 rounded-full text-white font-semibold text-xs shrink-0">
                      <div
                        className={`${item.color} w-full h-full rounded-full flex items-center justify-center`}
                      >
                        {item.icon}
                      </div>
                    </div>
                    <div className="text-sm text-gray-700">
                      {item.user && (
                        <span className="font-medium">{item.user} </span>
                      )}
                      {item.action}{' '}
                      {item.title && (
                        <span className="text-blue-600 font-medium hover:underline cursor-pointer">
                          {item.title}
                        </span>
                      )}
                      {item.description && (
                        <span className="text-gray-500">
                          {' '}
                          – {item.description}
                        </span>
                      )}
                      <div className="text-xs text-gray-500 mt-1">
                        {item.timestamp}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'analytics' && (
            <div className="text-center py-10 text-gray-500">
              📊 Analytics View (design this section as needed)
            </div>
          )}

          {activeTab === 'sales' && (
            <div className="text-center py-10 text-gray-500">
              💼 Sales vs Labor Chart (design this section as needed)
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
