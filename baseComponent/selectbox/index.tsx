'use client';

import React, { useState, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from './Select';
import { Label } from '../label';
import SelectSearch from './SelectSearch';
import { AlertCircle, Asterisk } from 'lucide-react';
import { cn } from '@/lib/utils';
import PageLoader from '../loader';
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from '../tooltip';
import Checkbox from '../checkbox';

export type SelectBoxOption = {
  id: string;
  value: string;
  label: string;
};

export type SelectBoxProps = {
  title?: string;
  placeholder?: string;
  options?: SelectBoxOption[];
  error?: boolean;
  helpText?: string;
  disable?: boolean;
  isSearchBar?: boolean;
  toolkit?: boolean;
  searchPlaceholder?: string;
  className?: string;
  iconClass?: string;
  onChange: (value: string) => void;
  value?: string;
  lableClass?: string;
  loading?: boolean;
  requiredField?: boolean;
  tooltipText?: string;
  multipleCheck?: boolean;
  onMultiChange?: (values: string[]) => void;
  selectedValues?: string[];
};

export const SelectBox = ({
  title,
  placeholder,
  options = [],
  error,
  helpText,
  disable,
  toolkit,
  searchPlaceholder,
  className,
  iconClass,
  onChange,
  value,
  lableClass,
  isSearchBar,
  requiredField,
  loading,
  tooltipText,
  multipleCheck,
  onMultiChange,
  selectedValues = [],
}: SelectBoxProps) => {
  const [filteredOptions, setFilteredOptions] =
    useState<SelectBoxOption[]>(options);
  const [selectedItems, setSelectedItems] = useState<string[]>(selectedValues);
  useEffect(() => {
    if (JSON.stringify(filteredOptions) !== JSON.stringify(options)) {
      setFilteredOptions(options);
    }
  }, [options]);

  const updateFilterOption = (option: SelectBoxOption[]) => {
    setFilteredOptions(option);
  };
  const handleCheckboxChange = (value: string) => {
    const newSelectedItems = selectedItems.includes(value)
      ? selectedItems.filter(item => item !== value)
      : [...selectedItems, value];

    setSelectedItems(newSelectedItems);
    onMultiChange?.(newSelectedItems);
  };

  return (
    <div className={cn('flex flex-col gap-1 w-full', className)}>
      {title?.length || requiredField ? (
        <div className="flex justify-between px-3 w-full h-5 items-center">
          <div className="flex gap-0.5">
            <Label
              className={cn(lableClass, {
                'text-red-600': error,
              })}
              htmlFor="select"
            >
              {title}
            </Label>

            {requiredField && (
              <Asterisk
                size={12}
                className={cn('text-red-500 cursor-pointer ', iconClass, {
                  'opacity-40': disable,
                })}
              />
            )}
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <AlertCircle
                  className={`${iconClass} w-5 text-slate-700 ${
                    toolkit ? '' : 'hidden'
                  } ${error ? 'text-red-600' : ''}`}
                />
              </TooltipTrigger>
              <TooltipContent className="left-full mr-16">
                {tooltipText}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      ) : null}

      <Select
        onValueChange={value => {
          onChange(value);
        }}
      >
        <SelectTrigger
          error={error}
          disabled={disable}
          placeholder={placeholder}
          value={value}
        />

        <SelectContent>
          <SelectGroup className="flex flex-col gap-1 ">
            {isSearchBar && (
              <div className="flex flex-col sticky top-0 z-50 pt-0 gap-y-1">
                <SelectSearch
                  searchPlaceholder={searchPlaceholder}
                  options={options}
                  setFilteredOptions={updateFilterOption}
                />
                <hr />
              </div>
            )}
            <div className=" max-h-[250px] overflow-y-auto">
              {loading ? (
                <PageLoader />
              ) : (
                filteredOptions?.map(option =>
                  !multipleCheck ? (
                    <SelectItem
                      key={option.id}
                      value={option.value}
                      className="cursor-pointer"
                    >
                      {option.label}
                    </SelectItem>
                  ) : (
                    <>
                      <div
                        className={cn(
                          'flex items-start cursor-pointer w-56 md:w-48 lg:w-56 rounded-sm py-2 text-wrap px-4 gap-2 text-sm outline-none'
                        )}
                        onClick={() => handleCheckboxChange(option?.value)}
                      >
                        <Checkbox
                          className="w-4 h-4 mt-1"
                          checked={selectedItems?.includes(option?.value)}
                        />
                        <div className="cursor-pointer mt-1">
                          {option?.label}
                        </div>
                      </div>
                    </>
                  )
                )
              )}
            </div>
          </SelectGroup>
        </SelectContent>
      </Select>

      {error && (
        <Label className={`text-red-600 text-xs font-normal px-3`}>
          {helpText}
        </Label>
      )}
    </div>
  );
};

export default SelectBox;
