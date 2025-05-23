'use client';

import React from 'react';
import { Card, CardTitle } from '@/base-components/card';
import {
  dailyActivity,
  engagementData,
  quickActions,
  tabledata,
  tasks,
} from './constants';
import TaskCard from '@/base-components/activityCard';
import SmallCardWithIcon from '@/base-components/smallCardWithIcon';
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
import { Button } from '@/base-components/button';
function OverviewComponent() {
  return (
    <motion.div {...staggerParent} className="flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-2/3">
        <motion.div variants={topToBottomAnimation} className="space-y-6 py-4">
          <Card className="p-5 space-x-6 md:p-3 lg:p-5 shadow-none">
            <CardTitle className="text-xl md:text-lg lg:text-xl text-zinc-700 font-bold m-3 md:m-2 lg:m-3">
              Quick Actions
            </CardTitle>
            <div className="flex justify-center gap-x-6 gap-y-4 flex-wrap">
              {quickActions?.map((action, index) => (
                <SmallCardWithIcon
                  key={action.title + index}
                  icon={action.icon}
                  title={action.title}
                  iconColor={action.iconColor}
                />
              ))}
            </div>
          </Card>
        </motion.div>
        <motion.div
          variants={topToBottomAnimation}
          className="w-full py-4 space-y-6"
        >
          <AttendanceSection />
        </motion.div>
        {tabledata?.map((data, index) => (
          <EngagementChart
            key={data.title + index}
            data={engagementData}
            title={data.title}
            subtitle={data.subtitle}
            groupLabel={data.groupLabel}
          />
        ))}
        <motion.div variants={topToBottomAnimation} className="space-y-6 py-4">
          <Card className="p-4 w-full bg-white rounded-xl shadow-none min-h-[300px]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-zinc-800">
                {dailyActivity?.title}
              </h2>
              <Button className="border border-gray-300 text-blue-600 font-medium rounded-full lg:px-6 px-2 md:px-4 py-2 hover:bg-gray-100 transition">
                {dailyActivity?.buttonLabel}
              </Button>
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
        </motion.div>
        <motion.div
          variants={rightToLeftAnimation}
          className="space-y-4 rounded-xl bg-white p-10"
        >
          {tasks.map((task, index) => (
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
        <LeftSideOverview />
      </motion.div>
    </motion.div>
  );
}

export default OverviewComponent;
