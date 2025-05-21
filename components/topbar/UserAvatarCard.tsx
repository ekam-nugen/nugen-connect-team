import Image from 'next/image';
import { ProfileTCardype } from './types';
import UserProfileDropdown from './UserInfo';

const UserProfileCard = ({
  imagesss,
  userName,
  openModel,
  modalcard,
  ModalCardData3,
  modalRef,
}: ProfileTCardype) => {
  return (
    <div
      onClick={openModel}
      className="flex items-center gap-2 pl-2 border-l-2 relative"
    >
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image
          src={imagesss}
          alt="avatar"
          fill
          className="rounded-full object-cover"
        />
      </div>

      <p className="hidden sm:block text-primary cursor-pointer whitespace-nowrap">
        {userName}
      </p>

      {modalcard && (
        <div
          className="absolute z-50 top-full mt-4 right-0"
          onClick={e => e.stopPropagation()}
        >
          <div ref={modalRef}>
            <UserProfileDropdown
              userRole={'owner'}
              userName={userName}
              Modaldata={ModalCardData3}
              loginUserIcon
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileCard;
