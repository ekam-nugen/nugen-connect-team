'use client';
import { MdSchool, MdMoreHoriz } from 'react-icons/md';
import React, { useEffect, useState } from 'react';
import { Card } from '@/base-components/card';
import { Button } from '@/base-components/button';
import { TChatPerson } from './types';
import { chatPersons } from './constants';
import ChatList from './ChatList';
import ChatBox from './chatBox';

export default function Chat() {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1400
  );
  const [personDetail, setPersonDetail] = useState<TChatPerson | null>(null);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth >= 1024) {
      setPersonDetail(chatPersons[0]);
    } else {
      setPersonDetail(null);
    }
  };

  useEffect(() => {
    handleResize();

    //update on resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 1024;

  return (
    <Card className="flex flex-col justify-between md:flex-row rounded-xl w-full">
      {/* People list - Show on desktop OR mobile if no chat is selected */}
      {(!isMobile || (isMobile && !personDetail)) && (
        <div className="w-full lg:max-w-md border-r-2">
          <div className="flex justify-between p-4 border-b-2 items-center">
            <Button
              variant={'outline'}
              className="bg-primary text-white rounded-3xl px-4 py-2 hover:bg-primary-hover hover:text-white"
            >
              Add New
            </Button>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="rounded-full !h-10 !w-10 shadow-sm text-sm sm:text-md border-gray-subtle hover:text-primary"
              >
                <MdMoreHoriz className="text-primary h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="flex items-center rounded-full gap-x-2 text-primary shadow-sm text-sm sm:text-md border-gray-subtle hover:text-primary"
              >
                <MdSchool size={20} />
                <span className="font-semibold">0/3</span>
              </Button>
            </div>
          </div>

          {/* Chat Filters and List */}
          <ChatList
            personDetail={personDetail}
            setPersonDetail={setPersonDetail}
          />
        </div>
      )}

      {/* Chat Box - Show on desktop OR mobile if a person is selected */}
      {(!isMobile || (isMobile && personDetail)) && personDetail && (
        <ChatBox
          chatData={personDetail}
          onSendMessage={() => console.log('message sent')}
          onBack={() => isMobile && setPersonDetail(null)}
        />
      )}
    </Card>
  );
}
