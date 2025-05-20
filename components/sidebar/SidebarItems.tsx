import React from 'react';
import { sideBarData } from './constant';
// import { CgMenuGridO } from 'react-icons/cg';
import { IoAddOutline } from 'react-icons/io5';

export default function SidebarItems() {
  return (
    <div>
      <div className="w-56 bg-background space-y-4 p-2">
        {sideBarData.map((section, index) => (
          <div key={index}>
            {section?.section && (
              <h2 className="text-sm font-bold  mb-2 pl-2">
                {section.section}
              </h2>
            )}
            <ul className="space-y-1">
              {section.items.map(item => (
                <>
                  <div className="flex items-center gap-2 hover:bg-gray-50 px-2 py-1.5 rounded-lg cursor-pointer">
                    {/* <div className="">
                      <CgMenuGridO className="h-4 w-4 mr-1  text-gray-500" />
                    </div> */}
                    <span
                      className={`text-xl ${section?.section ? 'text-background' : 'text-foreground'} flex items-center justify-center rounded-md ${item?.color} px-1 p-1`}
                    >
                      <item.icon />
                    </span>
                    <div className="text-sm cursor-pointer">{item.title}</div>
                  </div>
                </>
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
    </div>
  );
}
