'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { CgGirl } from 'react-icons/cg';
import { MdAccessibility } from 'react-icons/md';
import { PiChats } from 'react-icons/pi';
import { IoMdNotificationsOutline, IoIosHelpCircle } from 'react-icons/io';
import { RiCustomerService2Line } from 'react-icons/ri';
import logoMobile from '../../public/images/icon.jpg';
import userImage from '../../public/images/connecteam-logo.svg';
import { Button } from '@/base-components/button';
import { Input } from '@/base-components/input';
import UserProfileCard from './UserAvatarCard';
import { ModalCardData3 } from './constants';
import {
  HELP,
  LOGO,
  SEARCH_PLACEHOLDER,
  TALK_TO_EXPERT,
  UPGRADE,
  USER_NAME,
} from '@/lib/en';

const Topbar = () => {
  const [modalcard, setModalcard] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalcard &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModalcard(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [modalcard]);

  return (
    <div className="py-2 px-4 w-full flex flex-wrap items-center justify-between gap-y-2 sticky top-0 z-40 shadow-sm bg-background">
      <div className="flex items-center gap-7">
        <Image
          src={userImage}
          alt={LOGO}
          width={120}
          height={50}
          className="hidden lg:block object-scale-down w-full"
        />
        <Image
          src={logoMobile}
          alt={LOGO}
          width={40}
          height={50}
          className="block lg:hidden object-scale-down"
        />
        <Input
          className="hidden lg:block"
          searchIcon
          placeholder={SEARCH_PLACEHOLDER}
        />
      </div>
      <div className="flex items-center gap-4 flex-wrap justify-end">
        <Button className="hidden sm:block rounded-full bg-[#af52de]">
          {UPGRADE}
        </Button>
        <div className="hidden sm:flex text-primary items-center gap-1 border-l-2 pl-4">
          <CgGirl className="text-2xl" />
          <span className="hidden xl:inline">{TALK_TO_EXPERT}</span>
        </div>
        <div className="hidden sm:flex text-primary items-center gap-1 border-l-2 pl-4">
          <IoIosHelpCircle className="text-xl" />
          <span className="hidden xl:inline">{HELP}</span>
        </div>
        <div className="flex items-center gap-3 text-accent-foreground border-l-2 pl-4">
          <MdAccessibility className="text-2xl" />
          <PiChats className="text-2xl" />
          <RiCustomerService2Line className="text-2xl" />
          <IoMdNotificationsOutline className="text-2xl" />
        </div>
        <UserProfileCard
          imagesss={userImage}
          userName={USER_NAME}
          openModel={() => setModalcard(true)}
          closeModel={() => setModalcard(false)}
          modalcard={modalcard}
          ModalCardData3={ModalCardData3}
          modalRef={modalRef}
        />
      </div>
    </div>
  );
};

export default Topbar;
