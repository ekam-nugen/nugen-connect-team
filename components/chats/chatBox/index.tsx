'use client';
import React, { useEffect, useRef, useState } from 'react';

import { getIconByName } from '@/lib/iconMap';

import { PiPaperPlaneTiltFill } from 'react-icons/pi';
import { TiMicrophoneOutline } from 'react-icons/ti';
import { ChatInputProps } from '../types';
import ChatHeader from './ChatHeader';
import { actionIcons } from '../constants';

const ChatBox: React.FC<ChatInputProps> = ({
  onSendMessage,
  chatData,
  onBack,
}) => {
  const [text, setText] = useState<string>('');
  const modalRef = useRef<HTMLDivElement>(null);
  const [modalcard, setModalcard] = useState<boolean>(false);

  const handleSend = () => {
    if (text.trim()) {
      onSendMessage(text);
      setText('');
    }
  };

  useEffect(() => {
    if (!modalcard) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModalcard(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalcard]);

  return (
    <div className="w-full max-w-4xl mx-auto bg-blue-50 flex flex-col justify-between rounded-xl space-y-80 lg:space-y-0">
      {/* Header */}
      <ChatHeader
        onBack={onBack}
        modalRef={modalRef}
        chatData={chatData}
        modalcard={modalcard}
        setModalcard={setModalcard}
      />

      {/* Input Area */}
      <div className="mx-2 sm:mx-5 px-3 gap-2 !mb-5 bg-white border border-gray-300 rounded-xl flex flex-col">
        <textarea
          placeholder="Write something..."
          className="bg-white text-gray-text w-full resize-none px-2 pt-2 rounded-md focus:outline-none text-sm sm:text-base"
          rows={2}
          value={text}
          onChange={e => setText(e.target.value)}
        />

        <div className="flex justify-between items-center pb-2">
          <div className="flex gap-3 px-2 text-lg text-gray-muted">
            {actionIcons?.map((icon: string, index: number) => {
              const Icon = getIconByName(icon);
              return (
                <span key={icon + index} className="cursor-pointer">
                  {Icon}
                </span>
              );
            })}
          </div>
          {text.trim() ? (
            <PiPaperPlaneTiltFill
              onClick={handleSend}
              className="text-primary cursor-pointer text-lg"
            />
          ) : (
            <TiMicrophoneOutline className="text-gray-muted text-lg" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
