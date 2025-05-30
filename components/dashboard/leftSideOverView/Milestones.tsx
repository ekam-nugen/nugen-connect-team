import { Card } from '@/base-components/card';
import { getIconByName } from '@/lib/iconMap';
import React from 'react';
import { MdStar } from 'react-icons/md';
import { Milestones } from '../types';

function MilestonesSection({
  milestonesData,
}: Readonly<{ milestonesData: Milestones }>) {
  return (
    <Card className="p-5 w-full bg-background shadow-md rounded-2xl">
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-lg font-bold text-gray-dark mb-4">
          {milestonesData?.achieved.title}
        </h2>
        <div className="relative mb-2">
          <div className="bg-primary bg-gradient-to-b from-blue-400 to-blue-600 p-4 rounded-2xl shadow-md">
            <span className="text-accent text-3xl">
              {milestonesData?.achieved?.icon &&
                getIconByName(milestonesData?.achieved?.icon)}
            </span>
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-accent flex items-center justify-center">
            <MdStar className="text-lightyellow text-sm" />
          </div>
        </div>
        <p className="text-lg font-bold">{milestonesData?.achieved.count}</p>
        <p className="text-sm text-gray-muted">
          {milestonesData?.achieved.label}
        </p>
      </div>
      <hr className="my-6 border-gray-light" />
      <div>
        <h2 className="text-lg font-bold text-gray-dark mb-4">
          {milestonesData?.nextTitle}
        </h2>
        <div className="flex flex-col gap-4">
          {milestonesData?.next.map((milestone, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="relative">
                <div
                  className={`p-2 rounded-xl shadow-md text-accent bg-gradient-to-r ${milestone.gradient}`}
                >
                  <span className="text-xl">
                    {milestonesData?.achieved?.icon &&
                      getIconByName(milestone?.icon)}
                  </span>
                </div>
                <div className="absolute -bottom-1 -right-1 flex gap-[1px]">
                  {[...Array(milestone.stars ?? 1)].map((_, i) => (
                    <MdStar key={i} className="text-lightyellow text-xs" />
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-dark">
                  {milestone.label}
                </p>
                <div className="h-2 bg-blue-100 rounded-full mt-1">
                  <div
                    className="h-2 bg-primary rounded-full"
                    style={{ width: `${milestone.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default MilestonesSection;
