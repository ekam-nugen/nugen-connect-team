'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import logoMobile from '../../public/images/icon.jpg';
import userImage from '../../public/images/connecteam-logo.svg';
import { Button } from '@/base-components/button';
import { Input } from '@/base-components/input';
import UserProfileCard from './UserAvatarCard';
import { actionIcons, actionItems, ModalCardContent } from './constants';
import { LOGO, SEARCH_PLACEHOLDER, UPGRADE, USER_NAME } from '@/lib/en';
import { getIconByName } from '@/lib/iconMap';

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
    <div className="py-2 px-4 w-full flex flex-wrap items-center justify-between  gap-y-2  sticky top-0 z-40 shadow-sm bg-background ">
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
        {actionItems?.map((item, idx) => (
          <div
            key={item.label + idx}
            className="hidden sm:flex text-primary items-center gap-1 border-l-2 pl-4"
          >
            <span className={item.iconClass}>{getIconByName(item.icon)}</span>
            <span className="hidden xl:inline">{item.label}</span>
          </div>
        ))}
        <div className="flex items-center gap-3 text-accent-foreground border-l-2 pl-4">
          {actionIcons?.map((icon: string, idx: number) => (
            <span key={icon + idx} className="text-2xl">
              {getIconByName(icon)}
            </span>
          ))}
        </div>
        <UserProfileCard
          imagesss={userImage}
          userName={USER_NAME}
          openModel={() => setModalcard(true)}
          closeModel={() => setModalcard(false)}
          modalcard={modalcard}
          ModalCardContent={ModalCardContent}
          modalRef={modalRef}
        />
      </div>
    </div>
  );
};

export default Topbar;
