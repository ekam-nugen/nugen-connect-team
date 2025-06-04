import React, { ReactNode } from 'react';
import { ChatHeaderProps } from '../types';
import { getIconByName } from '@/lib/iconMap';
import { Button } from '@/base-components/button';
import { FaArrowLeft, FaEllipsisH, FaSearch } from 'react-icons/fa';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { LiaFileExportSolid } from 'react-icons/lia';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { cn } from '@/lib/utils';

const ChatHeader: React.FC<ChatHeaderProps> = ({
  chatData,
  onBack,
  modalRef,
  modalcard,
  setModalcard,
}) => {
  const ModalCardData: { icon: ReactNode; text: string }[] = [
    { icon: <RiDeleteBin6Line />, text: 'Delete Account' },
    { icon: <LiaFileExportSolid />, text: 'Export Data' },
    { icon: <IoIosInformationCircleOutline />, text: 'View Profile' },
  ];
  return (
    <div className="flex justify-between bg-white items-center py-3 px-3 sm:px-4 rounded-tr-xl">
      <div className="flex items-center gap-3">
        {/* Back Button for Mobile */}
        <button
          onClick={onBack}
          className="lg:hidden text-primary text-lg mr-1"
        >
          <FaArrowLeft strokeWidth={1} />
        </button>
        {/* Logo Icon */}
        <div
          className={cn(
            'rounded-full h-10 w-10 sm:h-12 sm:w-12 text-lg flex items-center justify-center text-white font-bold',
            chatData.logoclass
          )}
        >
          {chatData.logoIcon ? getIconByName(chatData.logoIcon) : chatData.logo}
        </div>
        <div className="font-bold text-base sm:text-lg text-gray-text truncate max-w-[140px] sm:max-w-none">
          {chatData.name}
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <Button
          variant="outline"
          className="rounded-full !h-9 !w-9 sm:!h-10 sm:!w-10 shadow-sm text-sm border-gray-subtle hover:text-primary"
        >
          <FaSearch className="text-primary h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          onClick={() => setModalcard(true)}
          className="rounded-full !h-9 !w-9 sm:!h-10 sm:!w-10 shadow-sm text-sm border-gray-subtle hover:text-primary"
        >
          <FaEllipsisH className="text-primary h-4 w-4" />
        </Button>
        {modalcard && (
          <div
            className="absolute z-50 mt-44 right-4 sm:right-8 bg-white rounded-md shadow p-2"
            ref={modalRef}
          >
            {ModalCardData?.map((item, index) => (
              <div
                key={item.text + index}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-subtle hover:text-gray-text cursor-pointer"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatHeader;
