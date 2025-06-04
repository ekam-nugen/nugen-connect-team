import React from 'react';
import { chatPersons } from './constants';
import { Card } from '@/base-components/card';
import { Input } from '@/base-components/input';
import { getIconByName } from '@/lib/iconMap';
import { BsPinFill } from 'react-icons/bs';
import { MdMoreHoriz } from 'react-icons/md';
import { cn } from '@/lib/utils';
import { ChatListProps, TChatPerson } from './types';

function ChatList({ personDetail, setPersonDetail }: Readonly<ChatListProps>) {
  return (
    <div className="p-5 flex flex-col gap-y-4">
      <Input searchIcon />
      <div className="flex flex-col">
        <div className="flex gap-2">
          {['All', 'Unread', 'Teams']?.map((tab: string, index: number) => (
            <div
              key={tab + index}
              className="rounded-full bg-blue-50 text-primary px-3 py-1.5 font-bold text-sm hover:bg-primary hover:text-white cursor-pointer"
            >
              {tab}
            </div>
          ))}
        </div>

        <div className="mt-2">
          {chatPersons?.map((person: TChatPerson, index: number) => (
            <div key={person.name + index} className="group">
              <Card
                onClick={() => setPersonDetail(person)}
                className={cn(
                  'border-none shadow-none flex w-full p-3 bg-white rounded-xl hover:bg-blue-50 transition-all cursor-pointer',
                  personDetail?.name === person.name && 'bg-blue-50'
                )}
              >
                <div className="flex w-full justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <div
                      className={cn(
                        'rounded-full h-12 w-12 text-lg flex items-center justify-center text-white font-bold',
                        person.logoclass
                      )}
                    >
                      {person.logoIcon
                        ? getIconByName(person.logoIcon)
                        : person.logo}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-800 text-sm">
                        {person.name}
                      </span>
                      <span className="text-sm text-gray-500 truncate w-[200px]">
                        {person.message}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-end gap-1">
                    <span className="text-xs text-gray-muted">
                      {person.time}
                    </span>
                    <div className="flex gap-1 items-end">
                      {person.unreadCount && (
                        <span className="bg-primary text-white rounded-full py-0.5 px-1.5 text-xs font-semibold">
                          {person.unreadCount}
                        </span>
                      )}
                      {person.showStatusIcon && (
                        <BsPinFill className="text-gray-muted h-4 w-4 rotate-90" />
                      )}
                      <MdMoreHoriz className="h-4 w-4 group-hover:ml-1 text-gray-muted hidden group-hover:inline-flex transition-transform duration-300 group-hover:-translate-x-1 group-hover:scale-80" />
                    </div>
                  </div>
                </div>
              </Card>
              <hr className="w-full max-w-sm mx-auto border-gray-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChatList;
