'use client';
import React, { useState } from 'react';
import GroupHeader from './GroupHeader';
import GroupedTableCard from './GroupedTableCard';
import { categories } from './constants';

export default function SmartGroups() {
  const [toggledArrows, setToggledArrows] = useState<Record<number, boolean>>(
    {}
  );

  const handleToggle = (idx: number) => {
    setToggledArrows(prev => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };
  const allExpanded = categories.every((_, idx) => toggledArrows[idx]);

  const handleExpandCollapseAll = () => {
    const newState: Record<number, boolean> = {};
    categories.forEach((_, idx) => {
      newState[idx] = !allExpanded;
    });
    setToggledArrows(newState);
  };
  return (
    <div className="flex flex-col gap-y-5 ">
      <GroupHeader />
      <GroupedTableCard
        allExpanded={allExpanded}
        toggledArrows={toggledArrows}
        handleToggle={handleToggle}
        handleExpandCollapseAll={handleExpandCollapseAll}
      />
    </div>
  );
}
