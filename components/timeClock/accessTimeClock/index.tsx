'use client';
import React, { useState } from 'react';
import TimeClockHeader from '../header';
import {
  activities,
  tableData,
  TableHeader,
  TimeClockHeading,
} from '../constants';
import { TTimeClockHeading } from '../types';
import TabSectionHeader from './tabSection';
import TableComponent from '@/base-components/common/table';
import ActivityTimeline from './activitySection';
import { VIEW_REQUESTS } from '@/lib/en';

export default function AccessTimeClock() {
  const [activeTab, setActiveTab] = useState<'active' | 'archived'>('active');

  return (
    <div>
      {TimeClockHeading?.map((heading: TTimeClockHeading) => (
        <TimeClockHeader
          key={heading.username}
          title={heading.title}
          username={heading.username}
        />
      ))}
      <div className="bg-background rounded-xl shadow-sm p-4 mb-4">
        <TabSectionHeader
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeCount={1}
          archivedCount={0}
          showExportButton={true}
          activeLabel="TODAY"
          archivedLabel="TIMESHEETS"
          onAddNew={() => alert('Add new clicked')}
          onFilter={() => console.log('Filter clicked')}
          onSearch={e => console.log('Search:', e.target.value)}
        />
        <div className="flex items-center justify-between px-4 py-3 bg-white rounded-md shadow-sm mb-4">
          <p className="text-sm text-gray-700">
            <span className="text-primary font-medium">1</span>
            <span className="text-gray-400">/3</span>
            <span className="text-gray-800">employees clocked in today</span>
          </p>
          <button className="text-sm text-orange-500 border border-orange-200 px-4 py-1.5 rounded-full hover:bg-orange-50 transition">
            {VIEW_REQUESTS}
          </button>
        </div>
        <TableComponent data={tableData} headers={TableHeader} />
        <div className="relative bg-gray-100 border rounded-xl overflow-hidden shadow-sm h-96 mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509065!2d144.95373531531584!3d-37.8162791797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f2b1f3e3%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1611771785409!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="border-0 w-full h-full"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <ActivityTimeline date="05/06" items={activities} />
      </div>
    </div>
  );
}
