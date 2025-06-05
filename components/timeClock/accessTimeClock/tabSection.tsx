import { CiCircleCheck } from 'react-icons/ci';
import { MdOutlineArchive } from 'react-icons/md';
import { BiFilter } from 'react-icons/bi';
import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';
import { TTabSectionHeaderProps } from '../types';
import { ADD_NEW, EXPORT, FILTER } from '@/lib/en';

const TabSectionHeader = ({
  activeTab,
  setActiveTab,
  activeCount = 0,
  archivedCount = 0,
  onAddNew,
  showExportButton = false,
  onFilter,
  onSearch,
  activeLabel,
  archivedLabel,
}: TTabSectionHeaderProps) => {
  return (
    <>
      <div className="px-32 py-4 flex justify-between items-center bg-white">
        <button
          onClick={() => setActiveTab('active')}
          className={`flex items-center gap-1 font-medium pb-1 ${
            activeTab === 'active'
              ? 'text-primary-hover bg-white'
              : 'text-gray-subtle'
          }`}
        >
          <CiCircleCheck size={16} />
          {activeLabel} ({activeCount})
        </button>
        <button
          onClick={() => setActiveTab('archived')}
          className={`flex items-center gap-1 pb-1 ${
            activeTab === 'archived' ? 'text-primary-hover' : 'text-gray-subtle'
          }`}
        >
          <MdOutlineArchive size={16} />
          {archivedLabel} ({archivedCount})
        </button>
      </div>
      <div className="p-4 flex flex-wrap gap-2 justify-between border-b items-center mb-4">
        <button
          className="flex items-center gap-1 px-3 py-2 border rounded-full bg-background text-sm text-primary-hover"
          onClick={onFilter}
        >
          <BiFilter size={18} />
          {FILTER}
        </button>
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              onChange={onSearch}
              className="pl-8 pr-3 py-2 border rounded-full text-sm"
            />
            <AiOutlineSearch className="absolute left-2 top-2.5 text-gray-subtle" />
          </div>

          {activeTab === 'active' && showExportButton && (
            <button
              disabled
              className="px-4 py-2 border text-sm text-primary rounded-full"
            >
              {EXPORT}
            </button>
          )}
          {activeTab === 'active' && onAddNew && (
            <button
              onClick={onAddNew}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-background rounded-full text-sm"
            >
              <AiOutlinePlus className="border rounded-full" size={16} />
              {ADD_NEW}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default TabSectionHeader;
