import React from 'react';
import { FiChevronDown, FiRefreshCw } from 'react-icons/fi';
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';

const data = [
  { date: '08/05', value: 0 },
  { date: '10/05', value: 0 },
  { date: '12/05', value: 0 },
  { date: '14/05', value: 0 },
  { date: '16/05', value: 0 },
  { date: '18/05', value: 1 },
  { date: '20/05', value: 2 },
  { date: '21/05', value: 1 },
];

export default function EngagementChart() {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Engagement</h2>
        <div className="flex items-center space-x-2">
          <button className="flex items-center px-3 py-3 border rounded-full text-sm text-gray-700">
            All users group <FiChevronDown className="ml-2" />
          </button>
          <button className="flex items-center px-3 py-3 border rounded-full text-sm text-gray-700">
            Day <FiChevronDown className="ml-2" />
          </button>
          <button className="flex items-center px-3 py-3 border rounded-full text-sm text-gray-700">
            07/05 to 21/05 <FiChevronDown className="ml-2" />
          </button>
          <button className="p-2 border rounded-full">
            <FiRefreshCw />
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-2">
        Users activity throughout the period
      </p>
      <div className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="#aaa" />
            <YAxis tick={{ fontSize: 12 }} stroke="#aaa" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#3B82F6"
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
