import Image from 'next/image';
import React from 'react';
import { Card } from '../card';
import { Button } from '../button';
import { FaEllipsis } from 'react-icons/fa6';

export interface TimeClockProp {
  smallTitle: string;
  largeTitle: string;
  assigned: string;
  groupLabel: string;
  nameTitle: string;
  name: string;
  buttonText: string;
  roles: string;
}

const TimeClock = ({
  smallTitle,
  largeTitle,
  assigned,
  groupLabel,
  nameTitle,
  name,
  buttonText,
  roles,
}: TimeClockProp) => {
  return (
    <div className="flex justify-start p-3">
      <Card className="h-auto rounded-lg w-full border-gray-200 shadow-none border hover:shadow-md">
        <div className="flex justify-center bg-gradient-to-b from-white to-blue-50 pt-7">
          <Image
            src="https://app.connecteam.com/images/categories/punch-clock/main-page/punch-clock-active.svg"
            alt="A sample image from Unsplash"
            width={118}
            height={65}
          />
        </div>
        <div className="p-4">
          <div className="text-xs text-gray-600 mb-2">{smallTitle}</div>

          <div className="text-lg font-bold text-zinc-900 mb-4">
            {largeTitle}
          </div>

          <div className="flex items-center mb-4">
            <span className="text-base text-zinc-900 mr-2 ">{assigned}</span>
            <div className="truncate w-[100px] bg-blue-100 rounded-full px-4 py-1 text-sm text-zinc-900">
              {groupLabel}
            </div>
          </div>

          <div className="flex items-center mb-1">
            <span className="text-base text-zinc-900 mr-2 w-14">{roles}</span>
            <div className="flex items-center space-x-2">
              <div className="rounded-full h-6 w-6 flex justify-center items-center text-xs font-bold bg-[#689F38] text-white">
                {nameTitle}
              </div>
              <div className="text-sm text-zinc-900 capitalize">{name}</div>
            </div>
          </div>
        </div>
        <hr className="border-1 border-gray-200" />
        <div className=" border-slate-400 flex items-center py-3 px-3 gap-6">
          <div className="w-10 h-10 flex justify-center items-center cursor-pointer rounded-full border-2 text-slate-400">
            <FaEllipsis />
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-3xl text-base capitalize px-8 shadow shadow-blue-500 hover:shadow-blue-600 hover:shadow-sm">
            {buttonText}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default TimeClock;
