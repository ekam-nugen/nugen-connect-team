'use client';

import { useState } from 'react';
import { HiMiniArrowDownOnSquareStack } from 'react-icons/hi2';
import TimeClockHeader from './header';
import TimeClock from './card';
import { TimeClockCard, TimeClockHeading } from './constants';
import { TTimeClockCard, TTimeClockHeading } from './types';
import TabSectionHeader from './accessTimeClock/tabSection';
import { NO_ARCHIVED_CONTENT } from '@/lib/en';

export default function TimeClockLobby() {
  const [activeTab, setActiveTab] = useState<'active' | 'archived'>('active');

  return (
    <div className="min-h-screen bg-gray-light p-4">
      {TimeClockHeading?.map((heading: TTimeClockHeading) => (
        <TimeClockHeader
          key={heading.username}
          title={heading.title}
          username={heading.username}
        />
      ))}
      <div className="bg-background rounded-xl shadow-sm p-4 mb-4">
        <div className="bg-background rounded-xl shadow-sm p-4 mb-4">
          <TabSectionHeader
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            activeCount={1}
            archivedCount={0}
            showExportButton={true}
            activeLabel="ACTIVE"
            archivedLabel="ARCHIVED"
            onAddNew={() => alert('Add new clicked')}
            onFilter={() => console.log('Filter clicked')}
            onSearch={e => console.log('Search:', e.target.value)}
          />
        </div>
        {activeTab === 'active' ? (
          <div className="flex gap-2 justify-items-center px-5 pb-10">
            {TimeClockCard?.map((card: TTimeClockCard) => (
              <TimeClock
                key={card.name}
                smallTitle={card.smallTitle}
                largeTitle={card.largeTitle}
                assigned={card.assigned}
                groupLabel={card.groupLabel}
                nameTitle={card.nameTitle}
                name={card.name}
                buttonText={card.buttonText}
                roles={card.roles}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-12 text-gray-subtle">
            <HiMiniArrowDownOnSquareStack size={60} className="mb-4" />
            <p>{NO_ARCHIVED_CONTENT}</p>
          </div>
        )}
      </div>
    </div>
  );
}
