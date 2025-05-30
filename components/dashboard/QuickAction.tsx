import { Card, CardTitle } from '@/base-components/card';
import PageLoader from '@/base-components/loader';
import SmallCardWithIcon from '@/base-components/smallCardWithIcon';
import { QUICK_ACTIONS } from '@/lib/en';
import { getIconByName } from '@/lib/iconMap';
import React from 'react';
import { TQuickAction } from './types';

function QuickActionSection({
  quickActionsData,
}: Readonly<{
  quickActionsData: TQuickAction[];
}>) {
  return (
    <Card className="flex flex-col p-5 space-x-6 md:p-3 lg:p-4 shadow-none">
      <CardTitle className="text-xl md:text-lg lg:text-xl text-zinc-text font-bold m-3 md:m-2 lg:m-3">
        {QUICK_ACTIONS}
      </CardTitle>

      <div className="flex flex-1 justify-center items-center min-h-[100px]">
        {quickActionsData ? (
          <div className="flex justify-center gap-x-4 gap-y-8 flex-wrap">
            {quickActionsData?.map((action: TQuickAction, index: number) => {
              const Icon = action.icon && getIconByName(action?.icon);
              return (
                <SmallCardWithIcon
                  key={action.title + index}
                  icon={Icon}
                  title={action.title}
                  iconColor={action.iconColor}
                />
              );
            })}
          </div>
        ) : (
          <PageLoader />
        )}
      </div>
    </Card>
  );
}

export default QuickActionSection;
