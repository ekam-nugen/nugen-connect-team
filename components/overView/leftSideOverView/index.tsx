'use client';

import { Card, CardTitle } from '@/base-components/card';
import SmallCard from '@/base-components/smallCard';
import VideoPlayer from '@/base-components/videoPlayer';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import creditLogo from '../../../public/images/free-credits.svg';
import { PiNumberThreeBold } from 'react-icons/pi';
import { MdStar } from 'react-icons/md';
import { achievedMilestone, nextMilestones } from '../constant';

function LeftSideDashboard() {
  return (
    <div className="flex flex-col gap-4 md:gap-2 lg:gap-4 items-center">
      <Card className="p-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold text-zinc-600">
            All about Connecteam
          </CardTitle>
          <FaTimes className="h-4 w-4 text-gray-500 cursor-pointer" />
        </div>
        <div className="w-[290px] h-[173px]">
          <VideoPlayer
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
            showTime
          />
        </div>
      </Card>
      <SmallCard
        description={
          'Get up to 170$ worth of credits to use when upgrading to our paid'
        }
        descriptionClassName="text-sm"
        buttonLabel={' Get Credit'}
        imageUrl={creditLogo}
      />
      <SmallCard
        description={"Users didn't log in to the app yet"}
        buttonLabel="Select users to invite"
        icon={<PiNumberThreeBold />}
        iconClassName="text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-md text-2xl shadow-xl"
      />
      <Card className="p-5 w-full max-w-md bg-white shadow-md rounded-2xl">
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Achieved milestones
          </h2>
          <div className="flex flex-col items-center">
            <div className="relative mb-2">
              <div className="bg-blue-500 bg-gradient-to-b from-blue-400 to-blue-600 p-4 rounded-2xl shadow-md">
                {React.createElement(achievedMilestone.icon, {
                  className: 'text-white text-3xl',
                })}
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white flex items-center justify-center">
                <MdStar className="text-yellow-400 text-sm" />
              </div>
            </div>
            <p className="text-lg font-bold">{achievedMilestone.count}</p>
            <p className="text-sm text-gray-500">{achievedMilestone.label}</p>
          </div>
        </div>
        <hr className="my-6 border-gray-200" />
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            Next milestones
          </h2>
          <div className="flex flex-col gap-4">
            {nextMilestones.map((milestone, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="relative">
                  <div
                    className={`p-2 rounded-xl shadow-md text-white bg-gradient-to-r ${milestone.gradient}`}
                  >
                    {React.createElement(milestone.icon, {
                      className: 'text-xl',
                    })}
                  </div>
                  <div className="absolute -bottom-1 -right-1 flex gap-[1px]">
                    {[...Array(milestone.stars ?? 1)].map((_, i) => (
                      <MdStar key={i} className="text-yellow-400 text-xs" />
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-800">
                    {milestone.label}
                  </p>
                  <div className="h-2 bg-blue-100 rounded-full mt-1">
                    <div
                      className="h-2 bg-blue-500 rounded-full"
                      style={{ width: `${milestone.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default LeftSideDashboard;
