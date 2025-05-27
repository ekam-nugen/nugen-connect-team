'use client';

import { useState } from 'react';
import { FaQrcode, FaCrown } from 'react-icons/fa';
import { GiRadarSweep } from 'react-icons/gi';

import TableTopbar from '@/base-components/common/tableTopBar';
import TableComponent from '@/base-components/common/table';

import image1 from '../../../public/1.jpg';
import {
  CommonTableHeader,
  TableDataType,
} from '@/base-components/common/table/constants';
import EditableCell from '@/base-components/common/table/EditableCell';

const Page = () => {
  const [tableData, setTableData] = useState<TableDataType[]>([
    {
      id: '1',
      name: 'Alice',
      email: 'alice@test.com',
      phone: '1234567890',
      image: image1,
      icon: <FaQrcode className="w-5 h-5" />,
      button: { label: 'Edit' },
      switch: true,
    },
    {
      id: '2',
      name: 'Bob',
      email: 'bob@test.com',
      phone: '9876543210',
      icon: <FaCrown className="w-5 h-5" />,
      button: { label: 'Edit' },
      switch: true,
    },
    {
      id: '3',
      name: 'Charlie',
      email: 'charlie@test.com',
      phone: '1234567890',
      icon: <GiRadarSweep className="w-5 h-5" />,
      button: { label: 'Edit' },
      switch: true,
    },
  ]);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const closeModal = () => setSelectedImage(null);

  const handleInputChange = (
    id: string,
    key: string,
    value: string | number
  ) => {
    const updated = tableData.map(item =>
      item.id === id ? { ...item, [key]: value } : item
    );
    setTableData(updated);
  };

  const apiHeaders = [
    {
      accessKey: 'name',
      title: 'Name',
      sortable: true,
      isEdit: true,
    },
    {
      accessKey: 'email',
      title: 'Email',
      sortable: true,
      isEdit: true,
    },
    {
      accessKey: 'phone',
      title: 'Contact',
    },
    { accessKey: 'icon', title: 'Icon' },
    { accessKey: 'image', title: 'Image' },
    { accessKey: 'button', title: 'Button' },
    { accessKey: 'switch', title: 'Switch' },
  ];

  const header: CommonTableHeader[] = apiHeaders.map(col => {
    const base = {
      accessKey: col.accessKey as keyof TableDataType,
      title: col.title,
      sortable: col.sortable ?? false,
    };

    if (col.isEdit) {
      return {
        ...base,
        cell: ({ row, getValue }) => (
          <EditableCell
            value={getValue()}
            rowId={row.id}
            accessKey={col.accessKey}
            onChange={handleInputChange}
          />
        ),
      };
    }

    return base;
  });

  return (
    <div className="p-4">
      <TableTopbar isSearch isDatePicker />
      <TableComponent
        headers={header}
        data={tableData}
        isHeaders={true}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
        closeModal={closeModal}
      />
    </div>
  );
};

export default Page;
