import React from 'react';
import { IconTextModalProps } from './types';

const UserProfileDropdown = ({
  userName,
  Modaldata,
  userRole,
  loginUserIcon = false,
}: IconTextModalProps) => {
  return (
    <div className="shadow-2xl rounded-xl w-64 p-4">
      {loginUserIcon && (
        <>
          <div className="flex items-center rounded-lg p-2 mb-2">
            <div className="relative w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-primary text-primary-foreground font-bold text-sm">
              PK
            </div>
            <div className="ml-3">
              <p className="text-black font-bold text-sm">{userName}</p>
              <p className="text-sm">{userRole}</p>
            </div>
          </div>
          <hr className="mb-2" />
        </>
      )}
      <div>
        {Modaldata?.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.text + index}
              className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-subtle hover:text-gray-text cursor-pointer"
            >
              <Icon className="text-lg" />
              <span className="text-sm">{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserProfileDropdown;
