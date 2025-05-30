import { Button } from '@/base-components/button';
import { Card } from '@/base-components/card';
import { TdailyActivity } from '@/base-components/graphs/types';
import { topToBottomAnimation } from '@/lib/animationUtils';
import { getIconByName } from '@/lib/iconMap';
import { motion } from 'framer-motion';
import React from 'react';

function DailyActivity({
  dailyActivityData,
}: Readonly<{
  dailyActivityData: TdailyActivity;
}>) {
  const Icon =
    dailyActivityData?.icon && getIconByName(dailyActivityData?.icon);
  return (
    <motion.div variants={topToBottomAnimation} className="space-y-6 py-4">
      <Card className="p-4 w-full bg-background rounded-xl shadow-none min-h-[300px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-zinc-heading">
            {dailyActivityData?.title}
          </h2>
          <Button
            variant={'outline'}
            className="border border-gray-subtle text-primary font-medium rounded-full lg:px-6 px-2 md:px-4 py-2 hover:bg-gray-light transition"
          >
            {dailyActivityData?.buttonLabel}
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <span
            className="text-6xl text-zinc-light flex items-center justify-center mb-4"
            style={{ width: 100, height: 100 }}
          >
            {Icon}
          </span>
          <h3 className="font-semibold text-lg text-zinc-heading mb-1">
            {dailyActivityData?.messageTitle}
          </h3>
          <p className="text-sm text-gray-muted whitespace-pre-line">
            {dailyActivityData?.messageSubtitle}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}

export default DailyActivity;
