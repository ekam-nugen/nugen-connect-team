'use client';

import React from 'react';
import { Card, CardTitle } from '@/base-components/card';
import { dailyActivity, quickActions, tasks } from './constants';
import TaskCard from '@/base-components/activityCard';
import SmallCardWithIcon from '@/base-components/smallCardWithIcon';
import EngagementCard from '@/base-components/graphs';
import AttendanceSection from './attendanceSection/AttendanceSection';
import LeftSideOverview from './leftSideOverView';

function OverviewComponent() {
  return (
    <div className="flex justify-between gap-4 md:gap-2 lg:gap-4">
      <div className="w-full">
        <Card className="p-5 space-x-6 md:p-3 lg:p-5 shadow-none">
          <CardTitle className="text-xl md:text-lg lg:text-xl text-zinc-700 font-bold m-3 md:m-2 lg:m-3">
            Quick Actions
          </CardTitle>
          <div className="flex gap-4 flex-wrap">
            {quickActions.map((action, index) => (
              <SmallCardWithIcon
                key={index}
                icon={action.icon}
                title={action.title}
                iconColor={action.iconColor}
              />
            ))}
          </div>
        </Card>
        <div className="p-6 space-y-6">
          <AttendanceSection />
        </div>
        <EngagementCard />
        <div className="space-y-6 p-5">
          <Card className="p-6 bg-white rounded-xl shadow-none">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-zinc-800">
                Daily Activity
              </h2>
              <button className="border border-gray-300 text-blue-600 font-medium rounded-full px-6 py-2 hover:bg-gray-100 transition">
                View History
              </button>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <span
                className="text-6xl text-zinc-400 flex items-center justify-center mb-4"
                style={{ width: 100, height: 100 }}
              >
                {dailyActivity.icon && <dailyActivity.icon />}
              </span>
              <h3 className="font-semibold text-lg text-zinc-800 mb-1">
                {dailyActivity.messageTitle}
              </h3>
              <p className="text-sm text-gray-500 whitespace-pre-line">
                {dailyActivity.messageSubtitle}
              </p>
            </div>
          </Card>
        </div>
        <div className="space-y-4 bg-accent p-10">
          {tasks.map((task, index) => (
            <TaskCard
              key={index}
              title={task.title}
              subtitle={task.subtitle}
              progress={task.progress}
              total={task.total}
              iconType={task.iconType}
              showProgress={task.showProgress}
              onClick={() => alert(`Clicked on: ${task.title}`)}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-end">
        <LeftSideOverview />
      </div>
    </div>
  );
}

export default OverviewComponent;
