import React from 'react';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { TaskCardProps } from './types';

const TaskCard = ({
  title,
  subtitle,
  progress,
  total,
  showProgress = true,
  iconType = 'arrow',
  onClick,
}: TaskCardProps) => {
  return (
    <div className="relative flex items-center bg-white shadow-md rounded-xl px-6 py-6 w-full max-w-3xl">
      {/* Left Gradient Line */}
      <div className="absolute left-0 top-0 bottom-0 w-2 rounded-l-full bg-gradient-to-b from-purple-500 to-blue-400" />
      <div className="flex flex-1 items-center justify-between pl-4 w-full">
        <div className="flex flex-col">
          <span className="text-gray-800 text-base font-medium">{title}</span>
          {subtitle && (
            <span className="text-sm text-gray-500 mt-1">{subtitle}</span>
          )}
        </div>
        {iconType !== 'none' && (
          <div className="flex items-center gap-2">
            {showProgress && (
              <span className="text-gray-500 text-sm">
                {progress}/{total}
              </span>
            )}
            <button
              onClick={onClick}
              className="bg-blue-500 hover:bg-blue-600 text-accent rounded-full w-8 h-8 flex items-center justify-center shadow"
            >
              {iconType === 'arrow' ? (
                <FiArrowRight size={16} />
              ) : (
                <FiDownload size={16} />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskCard;
