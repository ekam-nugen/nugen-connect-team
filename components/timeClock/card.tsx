import React from 'react';
import Image from 'next/image';
import { Card } from '@/base-components/card';
import { Button } from '@/base-components/button';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { TimeClockProp } from './types';
import { SAMPLE } from '@/lib/en';

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
        <div className="flex justify-center bg-gradient-to-b from-white to-blue-50 ">
          <Image
            src="/images/timeClock.svg"
            alt={SAMPLE}
            width={100}
            height={100}
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
            <BiDotsHorizontalRounded size={20} />
          </div>
          <Button className="bg-primary hover:bg-primary-hover text-white rounded-3xl text-base capitalize px-8 shadow hover:shadow-sm">
            {buttonText}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default TimeClock;
