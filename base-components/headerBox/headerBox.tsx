import React from 'react';
import { Card } from '../card';
import { HeaderBoxProp } from '@/types';

const HeaderBox = ({
  header,
  title,
  headerIcon,
  buttonIcon,
  buttonLabel,
  secondayButtonIcon,
  secondrayButtonLabel,
  borderClassName,
}: HeaderBoxProp) => {
  return (
    <div>
      <Card className="flex h-20 items-center justify-between mb-3 rounded-xl shadow-sm pl-3 bg-background text-card-foreground">
        {/* Header section with icon and label */}
        <div className="flex items-center ml-7">
          <div className="mr-4 text-2xl text-primary [&_svg]:w-8 [&_svg]:h-8">
            {headerIcon}
          </div>
          <div className="text-2xl text-zinc-heading">{header}</div>
        </div>

        {/* Right controls: badge + buttons */}
        <div className="flex items-center gap-4 pr-4">
          {/* Title Badge */}
          <div className="flex items-center gap-2 text-sm text-gray-text">
            <div className="bg-ring text-gray-light rounded-full h-7 w-7 flex items-center justify-center text-xs font-bold cursor-pointer">
              {title}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2 px-2">
            {/* Primary Button */}
            {buttonIcon && (
              <div className="pl-1">
                <div className="flex items-center gap-1 rounded-full border border-border hover:border-primary px-3 py-2 cursor-pointer">
                  <div className="h-6 w-6 text-primary flex items-center">
                    {buttonIcon}
                  </div>
                  {buttonLabel && (
                    <div className="text-base font-normal text-primary">
                      {buttonLabel}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Secondary Button */}
            {secondayButtonIcon && (
              <div
                className={`flex items-center justify-center gap-2 rounded-full border border-border bg-background hover:border-primary px-3 py-2 cursor-pointer ${borderClassName}`}
              >
                {secondrayButtonLabel && (
                  <div className="text-base font-normal text-primary">
                    {secondrayButtonLabel}
                  </div>
                )}
                <div className="h-6 w-6 flex items-center">
                  {secondayButtonIcon}
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HeaderBox;
