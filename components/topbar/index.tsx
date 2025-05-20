'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { CgGirl, CgLogOff, CgProfile } from 'react-icons/cg';
import { MdAccessibility } from 'react-icons/md';
import { PiChats } from 'react-icons/pi';
import {
  IoIosNotificationsOutline,
  IoMdNotificationsOutline,
  IoIosHelpCircle,
} from 'react-icons/io';
import { RiCustomerService2Line } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import logoImage from '../../public/images/connecteam-logo.svg';
import logoMobile from '../../public/images/icon.jpg';
import userImage from '../../public/images/connecteam-logo.svg';
import { Button } from '@/base-components/button';
import { Input } from '@/base-components/input';
import UserProfileCard from './UserAvatarCard';

export const ModalCardData3 = [
  { icon: <CgProfile />, text: "Switch to user's view" },
  { icon: <IoSettingsOutline />, text: 'Setting' },
  { icon: <IoIosNotificationsOutline />, text: 'Notification' },
  { icon: <CgProfile />, text: 'Admin dashboard' },
  { icon: <CgLogOff />, text: 'Sign out' },
];

const TopbarComponent = () => {
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
    <div className="py-2 px-4 w-full flex flex-wrap items-center justify-between gap-y-2">
      <div className="flex items-center gap-4">
        <Image
          src={logoImage}
          alt="Logo"
          width={120}
          height={50}
          className="hidden lg:block object-scale-down"
        />
        <Image
          src={logoMobile}
          alt="Logo"
          width={40}
          height={50}
          className="block lg:hidden object-scale-down"
        />
        <Input
          className="hidden lg:block"
          searchIcon
          placeholder="Search anything..."
        />
      </div>
      <div className="flex items-center gap-4 flex-wrap justify-end">
        <Button className="hidden sm:block rounded-full bg-[#af52de]">
          Upgrade
        </Button>
        <div className="hidden sm:flex text-primary items-center gap-1 border-l-2 pl-4">
          <CgGirl className="text-2xl" />
          <span className="hidden xl:inline">Talk to an Expert</span>
        </div>
        <div className="hidden sm:flex text-primary items-center gap-1 border-l-2 pl-4">
          <IoIosHelpCircle className="text-xl" />
          <span className="hidden xl:inline">Help</span>
        </div>
        <div className="flex items-center gap-3 text-accent-foreground border-l-2 pl-4">
          <MdAccessibility className="text-2xl" />
          <PiChats className="text-2xl" />
          <RiCustomerService2Line className="text-2xl" />
          <IoMdNotificationsOutline className="text-2xl" />
        </div>
        <UserProfileCard
          imagesss={userImage}
          userName="Pardeep Kumar"
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

export default TopbarComponent;
