'use client';

import React from 'react';
import { Card, CardTitle } from '@/base-components/card';
import SmallCard from '@/base-components/smallCard';
import VideoPlayer from '@/base-components/videoPlayer';
import { MdStar } from 'react-icons/md';
import { leftSideOverviewData } from '../constants';

function LeftSideOverview() {
  const { videoCard, creditCard, inviteCard, milestones } =
    leftSideOverviewData;

  return (
    <div className="flex flex-col gap-4 md:gap-2 lg:gap-4 items-center w-full max-w-md mx-auto">
      <Card className="p-4 w-full">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold text-zinc-600">
            {videoCard.title}
          </CardTitle>
          {videoCard.closeIcon && (
            <videoCard.closeIcon className="h-4 w-4 text-gray-500 cursor-pointer" />
          )}
        </div>
        <div className="w-full aspect-video">
          <VideoPlayer
            src={videoCard.video.src}
            type={videoCard.video.type}
            showTime
          />
        </div>
      </Card>
      <SmallCard
        description={creditCard.description}
        descriptionClassName="text-sm"
        buttonLabel={creditCard.buttonLabel}
        imageUrl={creditCard.imageUrl}
      />
      <div className="w-full">
        <SmallCard
          description={inviteCard.description}
          buttonLabel={inviteCard.buttonLabel}
          icon={<inviteCard.icon />}
          iconClassName={inviteCard.iconClassName}
        />
      </div>
      <Card className="p-5 w-full bg-accent shadow-md rounded-2xl">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            {milestones.achieved.title}
          </h2>
          <div className="relative mb-2">
            <div className="bg-blue-500 bg-gradient-to-b from-blue-400 to-blue-600 p-4 rounded-2xl shadow-md">
              {React.createElement(milestones.achieved.icon, {
                className: 'text-white text-3xl',
              })}
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-accent flex items-center justify-center">
              <MdStar className="text-yellow-400 text-sm" />
            </div>
          </div>
          <p className="text-lg font-bold">{milestones.achieved.count}</p>
          <p className="text-sm text-gray-500">{milestones.achieved.label}</p>
        </div>
        <hr className="my-6 border-gray-200" />
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">
            {milestones.nextTitle}
          </h2>
          <div className="flex flex-col gap-4">
            {milestones.next.map((milestone, idx) => (
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

export default LeftSideOverview;
