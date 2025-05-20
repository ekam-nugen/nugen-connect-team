import React from 'react';
import { Card, CardDescription, CardTitle } from '../card';
import Image from 'next/image';
import { Button } from '../button';
import { SmallCardProps } from './types';

const SmallCard: React.FC<SmallCardProps> = ({
  title,
  heading,
  imageUrl,
  description,
  icon,
  buttonLabel,
  className,
  iconClassName,
  cardClassName,
  titleClassName,
  descriptionClassName,
}) => {
  return (
    <div className="flex flex-col">
      <Card
        className={`${cardClassName} flex flex-col p-4 md:p-2 lg:p-4 w-80 shadow-none `}
      >
        <div className="text-xl md:text-lg lg:text-xl font-bold text-zinc-600 flex justify-start items-start">
          {heading}
        </div>
        <div className="md:px-4 lg:px-8 md:py-2 lg:py-4 px-8 py-4 flex flex-col justify-center items-center">
          <div className="text-center mb-2 pt-2 md:pt-1 lg:pt-2 md:mb-1 lg:mb-2">
            <div
              className={`h-12 w-12 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full flex justify-center items-center ${className} ${iconClassName}`}
            >
              {icon && (
                <div
                  className={`h-6 w-6 md:h-4 md:w-4 lg:h-6 lg:w-6 flex items-center justify-center ${className}`}
                >
                  {icon}
                </div>
              )}
              {imageUrl && (
                <Image
                  className="h-16 w-16"
                  src={imageUrl}
                  width={100}
                  height={100}
                  alt="image"
                />
              )}
            </div>
          </div>
          {title && (
            <CardTitle
              className={`text-sm md:text-xs lg:text-sm font-bold leading-5 tracking-wide  ${titleClassName}`}
            >
              {title}
            </CardTitle>
          )}
          {description && (
            <CardDescription
              className={`text-sm md:text-xs lg:text-sm font-normal text-gray-600 text-center tracking-wide ${descriptionClassName}`}
            >
              {description}
            </CardDescription>
          )}
          {buttonLabel && (
            <Button className="ring-2 ring-gray-200 text-blue-500 bg-white hover:bg-gray-100 rounded-2xl mt-3 capitalize px-4 text-sm md:text-xs lg:text-sm">
              {buttonLabel}
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};

export default SmallCard;
