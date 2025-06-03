import React from 'react';
import { FiRefreshCw } from 'react-icons/fi';
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';
import { EngagementChartProps } from './types';
import { DatePicker } from '../datepicker';
import SelectBox from '../selectbox';

export default function EngagementChart({
  data,
  title,
  subtitle,
}: Readonly<EngagementChartProps>) {
  return (
    <div className="bg-background rounded-2xl p-4 shadow-sm w-full">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <h2 className="text-xl font-semibold text-gray-dark">{title}</h2>
        <div className="flex flex-wrap md:flex-nowrap items-center gap-2">
          <div className="min-w-[180px]">
            <SelectBox
              placeholder="All Users Groups"
              onChange={() => ''}
              filteredOptions={[
                { id: 'admin', value: 'Admin Groups', label: 'Admin Groups' },
                { id: 'team1', value: 'Team 1', label: 'Team 1' },
                { id: 'team2', value: 'Team 2', label: 'Team 2' },
              ]}
              setFilteredOptions={() => ''}
              selectedItems={[]}
              setSelectedItems={() => ''}
            />
          </div>

          <div className="min-w-[80px]">
            <SelectBox
              placeholder="Day"
              onChange={() => ''}
              filteredOptions={[
                { id: 'day', value: 'Day', label: 'Day' },
                { id: 'week', value: 'Week', label: 'Week' },
                { id: 'month', value: 'Month', label: 'Month' },
              ]}
              setFilteredOptions={() => ''}
              selectedItems={[]}
              setSelectedItems={() => ''}
            />
          </div>

          <div className="min-w-[100px]">
            <DatePicker mode="range" />
          </div>

          <button className="p-2 border rounded-full">
            <FiRefreshCw />
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-text mb-2">{subtitle}</p>
      <div className="h-60 sm:h-72 md:h-80">
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
