import { TableHead, TableHeader, TableRow } from '@/base-components/table';
import { CommonTableHeader } from './types';
import { cn } from '@/lib/utils';
import { FaChevronDown } from 'react-icons/fa6';

export const TableHeaderComponent = ({
  headers,
  sortOrder,
  sortColumn,
  headerCellClass,
  handleTableDataSort,
}: {
  sortColumn: string;
  sortOrder: number;
  headerCellClass?: string;
  headers: CommonTableHeader[];
  handleTableDataSort: (column: string) => void;
}) => {
  return (
    <TableHeader className="w-full bg-slate-100">
      <TableRow className="w-full">
        {headers?.map((header: CommonTableHeader, index: number) => {
          const { accessKey, title, sortable } = header;
          return (
            <TableHead
              key={title + index.toString()}
              className={cn(
                'sticky top-0 z-30 w-[11%] bg-slate-100 pl-4 md:pl-8 text-black font-bold border-b-2',
                headerCellClass
              )}
            >
              <div className="flex justify-center items-center gap-2">
                {title}
                {sortable && (
                  <button
                    title="Sort"
                    onClick={() => {
                      handleTableDataSort(accessKey);
                    }}
                  >
                    <FaChevronDown
                      className={`w-3 transition-all ${
                        sortColumn === accessKey && sortOrder
                          ? 'rotate-180'
                          : ''
                      }`}
                    />
                  </button>
                )}
              </div>
            </TableHead>
          );
        })}
      </TableRow>
    </TableHeader>
  );
};
