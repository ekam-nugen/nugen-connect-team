import React from 'react';
import { Card } from '../card';
import { SmallCardWithIconType } from './types';
import { IconType } from 'react-icons';

const SmallCardWithIcon = ({
  icon,
  title,
  iconColor,
}: SmallCardWithIconType) => {
  const Icon = icon as IconType;
  return (
    <Card className="w-44 min-h-24 rounded-3xl py-4 px-4 drop-shadow-xl hover:bg-[#eeeeee] cursor-pointer flex-col justify-center gap-2 border-none">
      <div className={`flex justify-center text-[32px] ${iconColor}`}>
        <Icon />
      </div>
      <h1 className="text-center text-[#3f4648]">{title}</h1>
    </Card>
  );
};

export default SmallCardWithIcon;
