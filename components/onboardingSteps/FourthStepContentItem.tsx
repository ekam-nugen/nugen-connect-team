import { Button } from '@/base-components/button';
import { Input } from '@/base-components/input';
import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import Image from 'next/image';
import { LogoUploadStepProps } from './types';

export default function LogoUploadStep({
  data,
  logo,
  handleRemoveClick,
  handleFileChange,
}: Readonly<LogoUploadStepProps>) {
  return (
    <div className="max-w-xl flex flex-col justify-center items-center mx-auto pt-6 text-center">
      <h2 className="text-2xl font-semibold text-gray-dark mb-1">
        {data?.title}
      </h2>
      <p className="text-gray-muted text-sm  mb-6">{data?.subtitle}</p>

      <div className=" flex border-2 border-dashed rounded-xl p-6 mb-2 bg-muted w-fit ">
        {!logo ? (
          <>
            <div
              className="flex justify-between mb-2 gap-x-5 cursor-pointer"
              onClick={() =>
                document.getElementById('logo-upload-input')?.click()
              }
            >
              <div className="w-16 h-16 border-2 border-dashed rounded-3xl relative">
                <FaRegStar className="text-primary text-5xl bg-background shadow rounded-2xl p-2 absolute left-6 top-6" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-sm text-gray-muted">
                  {data?.uploadPrompt} <br />
                  Or{' '}
                  <span className="text-primary cursor-pointer text-sm">
                    {data?.browseText}
                  </span>
                </span>
              </div>
            </div>
            <Input
              id="logo-upload-input"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </>
        ) : (
          <div>
            <Image
              src={logo ? URL.createObjectURL(logo) : ''}
              alt="Uploaded Logo"
              width={96}
              height={96}
              className="w-24 h-24 mx-auto object-contain"
            />
            <Button
              variant={'ghost'}
              onClick={handleRemoveClick}
              className="mt-2 text-sm hover:bg-transparent text-destructive underline"
            >
              Remove
            </Button>
          </div>
        )}
      </div>
      <p className="text-xs text-gray-muted mb-4">{data?.note}</p>
    </div>
  );
}
