import React from 'react';
import { sideBarData } from './constant';
import { CgMenuGridO } from 'react-icons/cg';
import { IoAddOutline } from 'react-icons/io5';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { cn } from '@/lib/utils';

export default function Sidebar() {
  return (
    <div className="w-56 bg-background space-y-4 p-2">
      {sideBarData.map((section, index) => (
        <div key={section.title + index}>
          {section?.section && (
            <h2 className="text-sm font-bold mb-2 pl-2">{section.section}</h2>
          )}
          <ul className="space-y-1">
            {section.items.map((item, index) => (
              <div
                key={item.title + index}
                className={cn(
                  'group relative flex items-center gap-2 hover:bg-gray-100 px-2 py-1.5 rounded-lg cursor-pointer',
                  section.hoverAnimate !== false &&
                    'duration-500 hover:translate-x-1 transition-transform '
                )}
              >
                {section.hoverAnimate !== false && (
                  <CgMenuGridO className="h-6 w-6 text-gray-500 hidden group-hover:flex transition-opacity group-hover:duration-500" />
                )}
                <span
                  className={`text-xl ${section?.section ? 'text-background' : 'text-foreground'} flex items-center justify-center rounded-md ${item?.color} px-1 p-1`}
                >
                  <item.icon />
                </span>
                <div className="flex justify-between w-full">
                  <div className="text-sm cursor-pointer">{item.title}</div>
                  {section.hoverAnimate !== false && (
                    <BsThreeDotsVertical className="h-4 w-4 mr-0.5 text-gray-500 hidden group-hover:flex transition-opacity group-hover:duration-500" />
                  )}
                </div>
              </div>
            ))}
          </ul>

          {section.addOption && (
            <div className="my-2 pl-2 flex items-center gap-2">
              <span
                className={`text-xl w-6 h-6 flex text-blue-400 items-center justify-center rounded-full border-[1px] border-gray-400 px-1 p-1`}
              >
                <IoAddOutline />
              </span>
              <div className="text-sm text-blue-400 cursor-pointer">
                Add New
              </div>
            </div>
          )}
          <div className="w-full border-[1px] border-gray-200"></div>
        </div>
      ))}
    </div>
  );
}
