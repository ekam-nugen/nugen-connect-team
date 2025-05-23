'use client';
import React, { useState } from 'react';
import { sideBarData } from './constants';
import { CgMenuGridO } from 'react-icons/cg';
import {
  IoAddOutline,
  IoChevronBackSharp,
  IoChevronForwardSharp,
} from 'react-icons/io5';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { cn } from '@/lib/utils';
import { Button } from '@/base-components/button';
import { SidebarDataType, SidebarItems } from './types';
import { ADD_NEW } from '@/lib/en';

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <div
      className={cn(
        'max-h-[92vh] bg-background transition-all duration-300 ease-in-out overflow-y-scroll scrollbar-thin sticky top-14 z-40',
        collapsed ? 'w-16' : 'w-56 space-y-4 '
      )}
    >
      <div className="w-full flex justify-end items-center">
        <Button
          onClick={() => setCollapsed(!collapsed)}
          className="!w-1 !h-5 bg-gray-subtle rounded-r-sm hover:none text-black"
        >
          {collapsed ? <IoChevronForwardSharp /> : <IoChevronBackSharp />}
        </Button>
      </div>
      {sideBarData?.map((section: SidebarDataType, index: number) => (
        <div key={section.title + index} className="p-1">
          {!collapsed && section?.section && (
            <h2 className="text-sm font-bold mb-2 pl-2">{section.section}</h2>
          )}
          <ul className="space-y-1">
            {section.items.map((item: SidebarItems, index: number) => (
              <div
                key={item.title + index}
                className={cn(
                  'group relative flex items-center gap-2 hover:bg-gray-light px-2 py-1.5 rounded-lg cursor-pointer',
                  section.hoverAnimate !== false &&
                    'duration-500 hover:translate-x-1 transition-transform '
                )}
              >
                {section.hoverAnimate !== false && !collapsed && (
                  <CgMenuGridO className="h-6 w-6 text-gray-subtle hidden group-hover:flex transition-opacity group-hover:duration-500" />
                )}
                <span
                  className={cn(
                    'text-xl flex items-center justify-center rounded-md px-1 p-1',
                    section?.section ? 'text-background' : 'text-foreground',
                    item?.color,
                    collapsed ? 'mx-auto' : 'px-1'
                  )}
                >
                  <item.icon />
                </span>
                {!collapsed && (
                  <div className="flex justify-between w-full">
                    <div className="text-sm cursor-pointer">{item.title}</div>
                    {section.hoverAnimate !== false && (
                      <BsThreeDotsVertical className="h-4 w-4 mr-0.5 text-gray-subtle hidden group-hover:flex transition-opacity group-hover:duration-500" />
                    )}
                  </div>
                )}
              </div>
            ))}
          </ul>

          {section.addOption && !collapsed && (
            <div className="my-2 pl-2 flex items-center gap-2">
              <span
                className={`text-xl w-6 h-6 flex text-primary items-center justify-center rounded-full border-[1px] border-gray-muted px-1 p-1`}
              >
                <IoAddOutline />
              </span>
              <div className="text-sm text-primary cursor-pointer">
                {ADD_NEW}
              </div>
            </div>
          )}
          <div className="w-full border-[1px] border-gray-subtle"></div>
        </div>
      ))}
    </div>
  );
}
