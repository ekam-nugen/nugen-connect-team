import React from 'react';
import { Card } from '@/base-components/card';
import { FaUsers } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import Image from 'next/image';
import { AVTAR } from '@/lib/en';
import UserProfile from '@/public/images/userprofile.png';
import { Button } from '@/base-components/button';

function GroupHeader() {
  return (
    <Card className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white p-4 sm:p-6 gap-4 sm:gap-0">
      <div className="flex items-center gap-2 text-xl sm:text-2xl text-gray-muted">
        <FaUsers className="text-primary" /> <span>Groups</span>
      </div>

      <div className="flex flex-row items-center justify-between sm:justify-center gap-5 w-full sm:w-auto">
        <div className="flex items-center  gap-2">
          <span className="text-gray-text text-sm">Permissions</span>
          <div className="relative w-8 h-8 rounded-full overflow-hidden">
            <Image
              src={UserProfile}
              alt={AVTAR}
              fill
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <Button
          variant="outline"
          className="flex items-center rounded-full gap-x-2 text-primary shadow-sm text-sm sm:text-md border-gray-subtle hover:text-primary"
        >
          <MdSchool size={20} />
          <span className="font-semibold">0/3</span>
        </Button>
      </div>
    </Card>
  );
}

export default GroupHeader;
