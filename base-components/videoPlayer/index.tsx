import React, { useRef } from 'react';
import { VideoPlayerProps } from './types';
import { AiOutlineClose } from 'react-icons/ai';

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  type,
  controls = true,
  autoPlay = true,
  loop = false,
  muted = true,
  className = '',
  showTime = false,
  currentTime,
  caption,
  popupMode = false,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOpenPopup = () => {
    if (popupMode && modalRef.current) {
      modalRef.current.classList.remove('hidden');
    }
  };

  const handleClosePopup = () => {
    if (modalRef.current) {
      modalRef.current.classList.add('hidden');
    }
  };

  return (
    <>
      <div
        className={`relative w-full h-full rounded-xl overflow-hidden cursor-pointer ${className}`}
        onClick={handleOpenPopup}
      >
        <video
          className="w-full h-full object-cover rounded-xl"
          controls={controls}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
        >
          <source src={src} type={type} />
        </video>

        {caption && (
          <div className="absolute top-1/3 left-4 text-white font-bold text-lg drop-shadow-md">
            {caption}
          </div>
        )}

        {showTime && currentTime && (
          <div className="absolute bottom-2 left-4 text-sm text-white bg-black/60 px-2 py-1 rounded">
            {currentTime}
          </div>
        )}
      </div>
      <div
        ref={modalRef}
        className="hidden fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      >
        <div className="relative w-full max-w-2xl mx-auto p-4">
          <button
            onClick={handleClosePopup}
            className="absolute top-[25px] right-8 z-10 text-white bg-black/60 rounded-full p-2 hover:bg-black/80"
          >
            <AiOutlineClose size={20} />
          </button>
          <video
            className="w-full h-auto rounded-xl"
            controls
            autoPlay
            loop={loop}
            muted={muted}
          >
            <source src={src} type={type} />
          </video>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
