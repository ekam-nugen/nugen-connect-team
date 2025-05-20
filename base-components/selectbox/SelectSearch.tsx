import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import { cn } from '@/lib/utils';
import { SelectSearchProps } from './types';

function SelectSearch({
  className,
  searchPlaceholder,
  options = [],
  setFilteredOptions,
}: Readonly<SelectSearchProps>) {
  const search = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim().toLowerCase();
    if (value === '') {
      setFilteredOptions(options);
    } else {
      const filteredOptions = options?.filter(element => {
        const label = element?.label?.toLowerCase().replace(/\s+/g, ' ').trim();
        return label.includes(value);
      });
      setFilteredOptions(filteredOptions);
    }
  };

  return (
    <div className="relative" onKeyDown={e => e.stopPropagation()}>
      <div className="absolute top-0 flex h-full p-2 justify-center items-center text-foreground/40">
        <IoMdSearch className="w-4 h-4 text-slate-800/60" />
      </div>

      <input
        onChange={search}
        className={cn(
          'flex w-full pl-6 py-1 border border-solid border-[#CBD5E1] rounded-sm items-center',
          className
        )}
        type="text"
        placeholder={searchPlaceholder}
      />
    </div>
  );
}

export default SelectSearch;
