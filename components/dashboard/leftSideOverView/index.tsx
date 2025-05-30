'use client';

import React from 'react';
import { Card, CardTitle } from '@/base-components/card';
import SmallCard from '@/base-components/smallCard';
import VideoPlayer from '@/base-components/videoPlayer';
import { CardItem, LeftSideOverviewData } from '../types';
import { getIconByName } from '@/lib/iconMap';
import creditLogo from '@/public/images/free-credits.svg';
import MilestonesSection from './Milestones';

function LeftSideOverview({
  leftSideOverviewData,
  cards = [],
}: Readonly<{
  cards?: CardItem[];
  leftSideOverviewData?: LeftSideOverviewData;
}>) {
  const { videoCard, milestones } = leftSideOverviewData || {};

  return (
    <div className="flex flex-col gap-4 md:gap-2 lg:gap-4 items-center w-full max-w-md mx-auto">
      {videoCard && (
        <Card className="p-4 w-full">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-bold text-zinc-text">
              {videoCard?.title}
            </CardTitle>
            {videoCard?.closeIcon && (
              <span className="h-4 w-4 text-gray-muted cursor-pointer">
                {getIconByName(videoCard?.closeIcon)}
              </span>
            )}
          </div>
          <div className="w-full aspect-video">
            <VideoPlayer
              src={videoCard?.video.src}
              type={videoCard?.video.type}
              showTime
            />
          </div>
        </Card>
      )}
      {cards?.map((card: CardItem) => (
        <div key={card.id} className="w-full">
          <SmallCard
            description={card.description}
            descriptionClassName="text-sm"
            buttonLabel={card.buttonLabel}
            imageUrl={creditLogo}
            icon={getIconByName(card?.icon as string)}
            iconClassName={card.iconClassName}
          />
        </div>
      ))}
      {milestones && <MilestonesSection milestonesData={milestones} />}
    </div>
  );
}

export default LeftSideOverview;
