import React from 'react';
import { Card } from '@/base-components/card';
import { FaChevronDown, FaPlusCircle, FaUsers } from 'react-icons/fa';
import { categories } from './constants';
import { Input } from '@/base-components/input';
import { Button } from '@/base-components/button';
import { FaChevronUp } from 'react-icons/fa6';
import TableComponent from '@/base-components/common/table';
import { GroupedTableCardProps } from './types';

function GroupedTableCard({
  allExpanded,
  toggledArrows,
  handleToggle,
  handleExpandCollapseAll,
}: Readonly<GroupedTableCardProps>) {
  return (
    <Card className="w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 p-4 sm:p-6">
        <div
          className="flex items-center justify-center sm:justify-start w-full gap-2 text-sm sm:text-md text-primary"
          onClick={handleExpandCollapseAll}
        >
          <div className="flex flex-col w-4 h-4 cursor-pointer">
            <FaChevronUp className={allExpanded ? 'rotate-180' : ''} />
            <FaChevronDown className={allExpanded ? 'rotate-180' : ''} />
          </div>
          <span> {allExpanded ? 'Collapse All' : 'Expand All'}</span>
        </div>

        <div className="flex flex-row gap-3 w-full sm:w-auto">
          <Input placeholder="Search" className="w-full sm:w-56" searchIcon />
          <Button
            variant="outline"
            className="flex items-center gap-1 rounded-full text-primary hover:text-primary w-fit"
          >
            <FaPlusCircle size={18} />
            <span className="text-sm sm:text-md">Add segment</span>
          </Button>
        </div>
      </div>
      <hr className="w-full" />
      <div className="flex flex-col p-4 sm:p-5 space-y-4">
        {categories?.map((cat, idx) => {
          const isToggled = toggledArrows[idx];
          return (
            <Card
              key={idx}
              onClick={() => handleToggle(idx)}
              className="p-3 hover:bg-gray-50 flex flex-col"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-4 py-3 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="flex flex-col w-4 h-4 text-gray-muted">
                    <FaChevronUp
                      className={`${isToggled ? 'rotate-180' : ''} transition-transform`}
                    />
                    <FaChevronDown
                      className={`${isToggled ? 'rotate-180' : ''} transition-transform`}
                    />
                  </div>
                  <div className={`w-3 h-3 rounded-full ${cat.dot}`} />
                  <span className={`font-semibold text-sm ${cat.color}`}>
                    {cat.name}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-muted pl-1 sm:pl-0">
                  <FaUsers size={14} />
                  <span>{cat.count} groups</span>
                </div>
              </div>
              <div>
                {(isToggled || allExpanded) && (
                  <div className="p-3">
                    <TableComponent
                      headerCellClass="text-sm text-nowrap text-gray-dark"
                      data={cat.tableData?.data ?? []}
                      headers={cat.tableData?.header ?? []}
                    />
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </Card>
  );
}

export default GroupedTableCard;
