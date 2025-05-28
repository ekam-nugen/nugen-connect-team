import {
  fadeInAnimation,
  staggerParent,
  topToBottomAnimation,
} from '@/lib/animationUtils';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { ISecondStepOption, SecondStepContentItemProps } from './types';
import { Button } from '@/base-components/button';
import { RxCross2 } from 'react-icons/rx';
import { cn } from '@/lib/utils';
import { iconMap } from './constants';

function SecondStepContentItem({
  item,
  selectedIndustry,
  setSelectedIndustry,
  handleIndustryClick,
}: Readonly<SecondStepContentItemProps>) {
  const [selectedSubIndustry, setSelectedSubIndustry] = useState<string | null>(
    null
  );
  const [selectedEmp, setSelectedEmp] = useState<string | null>(null);
  return (
    <motion.div {...staggerParent} className="flex flex-col py-2 w-full px-2">
      <motion.h1
        className="text-md font-bold text-center mb-2 text-gray-dark"
        variants={topToBottomAnimation}
      >
        {item.label} <span className="text-destructive">*</span>
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-3">
        {item?.options?.map((option: ISecondStepOption, idx: number) => {
          const { icon, label, subIndustries } = option;
          const Icon = iconMap[icon as string] ?? null;
          const isSelected = selectedIndustry === label;

          return (
            <motion.div key={item.label + idx} variants={fadeInAnimation}>
              {selectedIndustry === null && (
                <Button
                  className={cn(
                    'flex items-center gap-2 border-2 border-gray-sublte bg-transparent rounded-lg py-0.5 px-2 text-gray-muted font-semibold text-xs shadow-sm transition duration-150 ease-in-out',
                    selectedEmp === label &&
                      'border border-primary text-primary-hover bg-blue-50'
                  )}
                  onClick={() =>
                    option.subIndustries
                      ? handleIndustryClick(label)
                      : setSelectedEmp(label)
                  }
                >
                  {icon && <span className="text-sm">{Icon}</span>}
                  <span>{label}</span>
                </Button>
              )}

              {isSelected && (
                <div>
                  <Button
                    className="flex items-center mb-6 mx-auto gap-2 border border-primary bg-blue-50  rounded-lg py-0.5 px-2 text-gray-muted font-semibold text-xs shadow-sm transition duration-150 ease-in-out"
                    onClick={() => setSelectedIndustry(null)}
                  >
                    {icon && <span className="text-sm">{iconMap[icon]}</span>}
                    <span>{label}</span>
                    <RxCross2 className="ml-2" />
                  </Button>

                  <div className="mt-2 flex flex-wrap justify-center gap-2">
                    <p className="w-full text-center font-semibold text-sm text-gray-dark mb-2">
                      Which sub-industry fits best?
                    </p>
                    {subIndustries?.map((sub: string, i: number) => (
                      <Button
                        key={sub + i}
                        onClick={() => {
                          setSelectedSubIndustry(sub);
                        }}
                        className={`bg-transparent font-semibold rounded-lg py-0.5 px-2 text-xs transition ${
                          selectedSubIndustry === sub
                            ? 'border border-primary text-primary-hover bg-blue-50'
                            : 'border-2 border-gray-subtle text-gray-muted'
                        }`}
                      >
                        {sub}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default SecondStepContentItem;
