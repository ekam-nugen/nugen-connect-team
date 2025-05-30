'use client';
import React from 'react';
import TaskCard from '@/base-components/activityCard';
import AttendanceSection from './attendanceSection/AttendanceSection';
import LeftSideOverview from './leftSideOverView';
import EngagementChart from '@/base-components/graphs';
import { motion } from 'framer-motion';
import {
  leftToRightAnimation,
  rightToLeftAnimation,
  staggerParent,
  topToBottomAnimation,
} from '@/lib/animationUtils';
import { UseDashboard } from '@/hooks/useAuth';
import { TableDataItem, Task } from './types';
import DailyActivity from './DailyActivity';

import QuickActionSection from './QuickAction';
function Dashboard() {
  const { data } = UseDashboard();
  const dashboardData = data?.data;
  return (
    <motion.div {...staggerParent} className="flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-2/3">
        <motion.div variants={topToBottomAnimation} className="space-y-6 py-4">
          <QuickActionSection quickActionsData={dashboardData?.quickActions} />
        </motion.div>
        <motion.div
          variants={topToBottomAnimation}
          className="w-full py-4 space-y-6"
        >
          <AttendanceSection attendanceData={dashboardData?.attendanceData} />
        </motion.div>
        {dashboardData?.tabledata?.map((data: TableDataItem, index: number) => (
          <EngagementChart
            key={data.title + index}
            data={dashboardData?.engagementData}
            title={data.title}
            subtitle={data.subtitle}
            groupLabel={data.groupLabel}
          />
        ))}
        <DailyActivity dailyActivityData={dashboardData?.dailyActivity} />
        <motion.div
          variants={rightToLeftAnimation}
          className="space-y-4 rounded-xl bg-accent p-10"
        >
          {dashboardData?.tasks.map((task: Task, index: number) => (
            <TaskCard
              key={task.title + index}
              title={task.title}
              subtitle={task.subtitle}
              progress={task.progress}
              total={task.total}
              iconType={task.iconType}
              showProgress={task.showProgress}
              onClick={() => alert(`Clicked on: ${task.title}`)}
            />
          ))}
        </motion.div>
      </div>
      <motion.div
        variants={leftToRightAnimation}
        className="hidden lg:block lg:w-1/3"
      >
        <LeftSideOverview
          cards={dashboardData?.cards}
          leftSideOverviewData={dashboardData?.leftSideOverviewData}
        />
      </motion.div>
    </motion.div>
  );
}

export default Dashboard;
