import Image from 'next/image';
import React from 'react';
import { Card } from '../card';
import { Button } from '../button';
import { FaEllipsis } from 'react-icons/fa6';
import { TimeClockProps } from './types';

const TimeClock = ({
  smallTitle,
  largeTitle,
  assigned,
  groupLabel,
  nameTitle,
  name,
  buttonText,
  roles,
}: TimeClockProps) => {
  return (
    <div className="flex justify-start p-3">
      <Card className="h-auto rounded-lg w-full border-gray-subtle shadow-none border hover:shadow-md">
        <div className="flex justify-center bg-gradient-to-b from-background to-blue-50 pt-7">
          <Image
            src="https://app.connecteam.com/images/categories/punch-clock/main-page/punch-clock-active.svg"
            alt="A sample image from Unsplash"
            width={118}
            height={65}
          />
        </div>
        <div className="p-4">
          <div className="text-xs text-gray-text mb-2">{smallTitle}</div>

          <div className="text-lg font-bold text-zinc-dark mb-4">
            {largeTitle}
          </div>

          <div className="flex items-center mb-4">
            <span className="text-base text-zinc-dark mr-2 ">{assigned}</span>
            <div className="truncate w-[100px] bg-blue-100 rounded-full px-4 py-1 text-sm text-zinc-dark">
              {groupLabel}
            </div>
          </div>

          <div className="flex items-center mb-1">
            <span className="text-base text-zinc-dark mr-2 w-14">{roles}</span>
            <div className="flex items-center space-x-2">
              <div className="rounded-full h-6 w-6 flex justify-center items-center text-xs font-bold bg-[#689F38] text-destructive-foreground">
                {nameTitle}
              </div>
              <div className="text-sm text-zinc-dark capitalize">{name}</div>
            </div>
          </div>
        </div>
        <hr className="border-1 border-gray-subtle" />
        <div className=" border-slate-400 flex items-center py-3 px-3 gap-6">
          <div className="w-10 h-10 flex justify-center items-center cursor-pointer rounded-full border-2 text-slate-400">
            <FaEllipsis />
          </div>
          <Button className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-3xl text-base capitalize px-8 shadow shadow-primary hover:shadow-primary-hover hover:shadow-sm">
            {buttonText}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default TimeClock;
