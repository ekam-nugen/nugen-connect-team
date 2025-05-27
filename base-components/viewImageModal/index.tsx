import React from 'react';
import Image from 'next/image';
import { RxCross2 } from 'react-icons/rx';

function ViewImageModal({
  closeModal,
  selectedImage,
}: Readonly<{
  closeModal: () => void;
  selectedImage: string;
}>) {
  return (
    <div className="fixed inset-0 bg-foreground bg-opacity-50 flex items-center justify-center z-50">
      <div className="p-6 max-w-5xl w-full">
        <button
          onClick={closeModal}
          className="absolute top-4 right-56 text-gray-text hover:text-gray-dark bg-foreground p-2 rounded-full transition duration-200"
          aria-label="Close"
        >
          <RxCross2 className="w-5 h-5" />
        </button>
        <Image
          src={selectedImage}
          alt="Selected"
          width={500}
          height={500}
          className="object-contain w-full h-auto"
        />
      </div>
    </div>
  );
}

export default ViewImageModal;
