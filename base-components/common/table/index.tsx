import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Props, TableDataType } from './constants';
import { TableHeaderComponent } from './UtilityComponents';
import { Table, TableBody, TableCell, TableRow } from '@/base-components/table';
import { Button } from '@/base-components/button';
import { LuPencilLine } from 'react-icons/lu';
import ViewImageModal from '@/base-components/viewImageModal';
import { Switch } from '@/base-components/switch';

export default function TableComponent({
  data,
  headers,
  onActionClick,
  className,
  isHeaders = true,
  headerCellClass,
  notScrolable = false,
  selectedImage,
  setSelectedImage,
  closeModal,
}: Readonly<Props>) {
  const handleImageClick = (imageUrl: string) => setSelectedImage(imageUrl);

  return (
    <div
      className={cn(
        className,
        'relative w-full',
        !notScrolable && 'overflow-y-auto',
        'max-h-[76vh] 2xl:max-h-[80vh]'
      )}
    >
      <Table className="bg-background rounded-lg min-w-[800px]">
        {isHeaders && (
          <TableHeaderComponent
            sortColumn={''}
            sortOrder={1}
            headerCellClass={headerCellClass}
            headers={headers}
            handleTableDataSort={() => {}}
          />
        )}

        <TableBody>
          {data?.map((rowData: TableDataType, rowIndex) => (
            <TableRow
              key={rowIndex}
              className="cursor-pointer hover:bg-gray-ligh transition-colors duration-200"
            >
              {headers?.map((header, index) => {
                const { accessKey, title, cell } = header;
                const value =
                  typeof accessKey === 'string'
                    ? rowData[accessKey]
                    : undefined;

                if (cell) {
                  return (
                    <TableCell
                      key={title + index}
                      className="text-center capitalize pl-4 md:pl-12 lg:pl-24"
                    >
                      {cell({
                        row: rowData,
                        getValue: () => value,
                        prevValue: data,
                        setFunction: newData => {
                          onActionClick?.onEdit?.(newData);
                        },
                      })}
                    </TableCell>
                  );
                }

                if (accessKey?.toLowerCase() === 'image' && rowData.image) {
                  const imageSrc =
                    typeof rowData.image === 'string'
                      ? rowData.image
                      : rowData.image.src;

                  return (
                    <TableCell key={title + index} className="text-center">
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          handleImageClick(imageSrc);
                        }}
                        className="cursor-pointer"
                      >
                        <img
                          src={imageSrc}
                          alt={title}
                          width={50}
                          height={50}
                          className="object-cover rounded-md"
                        />
                      </button>
                    </TableCell>
                  );
                }

                if (accessKey?.toLowerCase() === 'button' && rowData.button) {
                  const buttonLabel =
                    typeof rowData.button === 'string'
                      ? rowData.button
                      : rowData.button.label || 'Click';

                  const buttonAction =
                    typeof rowData.button === 'object' &&
                    typeof rowData.button.onClick === 'function'
                      ? rowData.button.onClick
                      : () => console.log('Button clicked');

                  return (
                    <TableCell
                      key={title + index}
                      className="text-center pl-4 md:pl-12 lg:pl-24"
                    >
                      <Button
                        variant="ghost"
                        onClick={e => {
                          e.stopPropagation();
                          buttonAction(rowData);
                        }}
                        className="px-3 py-1 text-sm border shadow-md flex items-center gap-1 rounded-md"
                      >
                        <LuPencilLine size={14} />
                        {buttonLabel}
                      </Button>
                    </TableCell>
                  );
                }

                if (accessKey?.toLowerCase() === 'switch') {
                  return (
                    <TableCell
                      key={title + index}
                      className="text-center pl-4 md:pl-12 lg:pl-24"
                    >
                      <div className="w-full flex justify-center items-center">
                        <Switch
                          checked={rowData.isActive || false}
                          onChange={e => {
                            e.stopPropagation();
                            onActionClick?.onToggle?.(rowData);
                          }}
                        />
                      </div>
                    </TableCell>
                  );
                }

                return (
                  <TableCell
                    key={title + index}
                    className="text-center capitalize pl-4 md:pl-24 lg:pl-32"
                  >
                    {value as ReactNode}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selectedImage && (
        <ViewImageModal closeModal={closeModal} selectedImage={selectedImage} />
      )}
    </div>
  );
}
