import { DatePicker } from '@/base-components/datepicker';
import { Input } from '@/base-components/input';
import { TableTopbarProps } from './types';

const TableTopbar: React.FC<TableTopbarProps> = ({
  isSearch,
  isDatePicker,
}) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4 px-4 py-3 bg-background rounded-t-xl shadow-sm border border-gray-200">
      {isSearch && (
        <div className="flex-1 min-w-[200px] md:max-w-xs">
          <Input
            searchIcon
            placeholder="Search..."
            className="w-full rounded-md border-gray-subtle focus:border-primary focus:ring-1 focus:ring-primary transition"
          />
        </div>
      )}

      {isDatePicker && (
        <div className="flex-1 min-w-[250px] md:max-w-sm">
          <DatePicker
            mode="range"
            className="w-full rounded-md border-gray-subtle focus:border-primary focus:ring-1 focus:ring-primary transition"
          />
        </div>
      )}
    </div>
  );
};

export default TableTopbar;
