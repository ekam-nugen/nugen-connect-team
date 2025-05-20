import React from 'react';
import { Card } from '../card';
import { SmallCardWithIconType } from './types';

const SmallCardWithIcon: React.FC<SmallCardWithIconType> = ({
  icon,
  title,
  iconColor,
}) => {
  return (
    <Card className="w-44 min-h-24 rounded-3xl py-4 px-6 drop-shadow-2xl flex flex-col justify-center gap-2 border-none">
      <div className={`flex justify-center text-[32px] ${iconColor}`}>
        {icon}
      </div>
      <h1 className="text-center text-[#3f4648]">{title}</h1>
    </Card>
  );
};

export default SmallCardWithIcon;
