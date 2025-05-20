'use client';

import * as React from 'react';
import { addDays, format, isBefore, subDays } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { Button } from '../button';
import { cn } from '../../lib/utils';
import { useEffect, useState } from 'react';
import SelectBox from '../selectbox';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';
import { Calendar } from './Calendar';
import { SelectBoxOption } from '../selectbox/type';

type DatePickerProps = {
  className?: string;
  mode: 'range' | 'single';
  handleCheckInValue?: (value: Date) => void;
  checkInPropValue?: Date;
  handleDateRange?: (val: DateRange) => void;
  checkInVariant?: boolean;
  checkoutVariant?: boolean;
};

type SelectedOptionType = {
  id: string;
  label: string;
  value: string;
};

const dummyOption: SelectedOptionType = { id: '', label: '', value: '' };

export function DatePicker({
  className,
  mode,
  handleCheckInValue,
  checkInPropValue,
  handleDateRange,
  checkInVariant,
  checkoutVariant,
}: Readonly<DatePickerProps>) {
  const selectBoxOptions: SelectedOptionType[] =
    checkInVariant || checkoutVariant
      ? [
          { id: 'id-0', label: 'Today', value: '0' },
          { id: 'id-1', label: 'Next 5 Days', value: '1' },
          { id: 'id-2', label: 'Next 1 Week', value: '2' },
          { id: 'id-3', label: 'Next 1 Month', value: '3' },
        ]
      : [
          { id: 'id-0', label: 'Today', value: '0' },
          { id: 'id-1', label: 'Last 5 Days', value: '1' },
          { id: 'id-2', label: 'Last 1 Week', value: '2' },
          { id: 'id-3', label: 'Last 1 Month', value: '3' },
        ];

  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(),
    to: new Date(),
  });

  const [singleDate, setSingleDate] = useState<Date | undefined>(
    mode === 'single' ? new Date() : undefined
  );
  const [selectedOption, setSelectedOption] =
    useState<SelectedOptionType>(dummyOption);
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
  const [filteredOptions, setFilteredOptions] =
    useState<SelectBoxOption[]>(selectBoxOptions);

  useEffect(() => {
    if (mode === 'single') {
      setSingleDate(new Date());
    }
  }, [mode]);

  useEffect(() => {
    if (checkInPropValue) {
      const newCheckInDate = addDays(checkInPropValue, 1);
      setSingleDate(newCheckInDate);
    }
  }, [checkInPropValue]);

  const handleDateChange = (selectedDate: DateRange | Date | undefined) => {
    if (selectedDate) {
      if (mode === 'range' && 'from' in selectedDate && 'to' in selectedDate) {
        setDateRange(selectedDate);
        if (handleDateRange) {
          handleDateRange(selectedDate);
        }
        if (selectedDate.from && selectedDate.to) {
          setIsPopoverOpen(false);
        }
      }
      if (mode === 'single' && selectedDate instanceof Date) {
        setSingleDate(selectedDate);
        setIsPopoverOpen(false);
      }
    }
  };

  const reset = () => {
    if (mode === 'range') {
      const clearedRange: DateRange = { from: undefined, to: undefined };
      setDateRange(clearedRange);
      if (handleDateRange) {
        handleDateRange(clearedRange);
      }
    } else if (mode === 'single') {
      setSingleDate(new Date());
    }
    setSelectedOption(dummyOption);
  };
  const handlePresetSelect = (value: string) => {
    const days = parseInt(value);
    let newFromDate: Date | undefined;
    let newToDate: Date | undefined;

    const now = new Date();

    switch (days) {
      case 0:
        newFromDate = now;
        newToDate = checkInVariant || checkoutVariant ? addDays(now, 1) : now;
        break;
      case 1:
        newFromDate = checkInVariant || checkoutVariant ? now : subDays(now, 5);
        newToDate = checkInVariant || checkoutVariant ? addDays(now, 5) : now;
        break;
      case 2:
        newFromDate = checkInVariant || checkoutVariant ? now : subDays(now, 7);
        newToDate = checkInVariant || checkoutVariant ? addDays(now, 7) : now;
        break;
      case 3:
        newFromDate =
          checkInVariant || checkoutVariant ? now : subDays(now, 30);
        newToDate = checkInVariant || checkoutVariant ? addDays(now, 30) : now;
        break;
      default:
        newFromDate = undefined;
        newToDate = undefined;
    }

    if (mode === 'range') {
      setDateRange({ from: newFromDate, to: newToDate });
      if (handleDateRange) {
        handleDateRange({ from: newFromDate, to: newToDate });
      }
    } else if (mode === 'single') {
      setSingleDate(newToDate);
    }
    setIsPopoverOpen(false);
    const selectedValue: SelectedOptionType | undefined = selectBoxOptions.find(
      (item: SelectedOptionType) => item.value === value
    );
    setSelectedOption(selectedValue ?? dummyOption);
  };

  const disabledDates = (date: Date): boolean => {
    const normalizeDate = (d: Date): number => {
      const newDate = new Date(d);
      newDate.setHours(0, 0, 0, 0);
      return newDate.getTime();
    };

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (mode === 'single') {
      if (checkoutVariant && checkInPropValue) {
        return (
          date < today ||
          (checkInPropValue
            ? normalizeDate(date) === normalizeDate(checkInPropValue)
            : false)
        );
      } else if (checkInVariant) {
        return date < today;
      } else {
        return (
          date < today || (singleDate ? isBefore(date, singleDate) : false)
        );
      }
    }
    return date > today;
  };

  const formattedDate =
    mode === 'range' ? (
      dateRange?.from ? (
        dateRange?.to ? (
          <>
            {format(dateRange.from, 'LLL dd, y')} -{' '}
            {format(dateRange.to, 'LLL dd, y')}
          </>
        ) : (
          format(dateRange.from, 'LLL dd, y')
        )
      ) : (
        <span>Pick a date</span>
      )
    ) : singleDate ? (
      format(singleDate, 'LLL dd, y')
    ) : (
      <span>Pick a date</span>
    );

  if (singleDate && handleCheckInValue) {
    handleCheckInValue(singleDate);
  }

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            '!w-full justify-start text-left font-normal',
            !dateRange && 'text-muted-foreground',
            className
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {formattedDate}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
        {!checkoutVariant && (
          <div
            className={cn(
              'flex justify-between gap-2',
              mode === 'range' && 'gap-2'
            )}
          >
            <SelectBox
              onChange={handlePresetSelect}
              placeholder="Select"
              value={selectedOption.label}
              options={selectBoxOptions}
              filteredOptions={filteredOptions}
              setFilteredOptions={setFilteredOptions}
              selectedItems={[selectedOption.value]}
              setSelectedItems={(items: string[]) => {
                const selected = selectBoxOptions.find(
                  opt => opt.value === items[0]
                );
                setSelectedOption(selected ?? dummyOption);
              }}
            />
            {mode === 'range' && (
              <Button variant="default" onClick={reset}>
                Reset
              </Button>
            )}
          </div>
        )}
        <div className="rounded-md border">
          {mode === 'range' ? (
            <Calendar
              className=""
              mode="range"
              classNames={[]}
              showOutsideDays={false}
              initialFocus
              defaultMonth={dateRange?.from}
              selected={dateRange}
              onSelect={handleDateChange}
              numberOfMonths={2}
              disabled={disabledDates}
            />
          ) : (
            <Calendar
              mode="single"
              className=""
              classNames={[]}
              showOutsideDays={false}
              initialFocus
              defaultMonth={singleDate}
              selected={singleDate}
              onSelect={handleDateChange}
              numberOfMonths={1}
              disabled={disabledDates}
              fromDate={
                checkInPropValue ?? (checkInVariant ? new Date() : singleDate)
              }
            />
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
