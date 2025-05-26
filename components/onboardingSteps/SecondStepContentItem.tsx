import {
  fadeInAnimation,
  staggerParent,
  topToBottomAnimation,
} from '@/lib/animationUtils';
import { motion } from 'framer-motion';
import React from 'react';
import { ISecondStepOption, SecondStepContentItemProps } from './types';
import { Button } from '@/base-components/button';
import { RxCross2 } from 'react-icons/rx';

function SecondStepContentItem({
  item,
  selectedIndustry,
  setSelectedIndustry,
  handleIndustryClick,
}: Readonly<SecondStepContentItemProps>) {
  return (
    <motion.div {...staggerParent} className="flex flex-col py-2 w-full px-2">
      <motion.h1
        className="text-md font-bold text-center mb-2 text-gray-dark"
        variants={topToBottomAnimation}
      >
        {item.label} <span className="text-red-500">*</span>
      </motion.h1>

      <div className="flex flex-wrap justify-center gap-3">
        {item?.options?.map((option: ISecondStepOption, idx: number) => {
          const { icon, label, subIndustries } = option;
          const isSelected = selectedIndustry === label;

          return (
            <motion.div key={item.label + idx} variants={fadeInAnimation}>
              {selectedIndustry === null && (
                <Button
                  className="flex items-center gap-2 border border-gray-300 bg-white hover:border-blue-500 rounded-lg py-0.5 px-2 text-gray-muted font-semibold text-xs shadow-sm transition duration-150 ease-in-out"
                  onClick={() => handleIndustryClick(label)}
                >
                  {icon && <span className="text-sm">{icon}</span>}
                  <span>{label}</span>
                </Button>
              )}

              {isSelected && (
                <div>
                  <Button
                    className="flex items-center mb-6 mx-auto gap-2 border border-blue-500 bg-blue-50  rounded-lg py-0.5 px-2 text-gray-muted font-semibold text-xs shadow-sm transition duration-150 ease-in-out"
                    onClick={() => setSelectedIndustry(null)}
                  >
                    {icon && <span className="text-sm">{icon}</span>}
                    <span>{label}</span>
                    <RxCross2 className="ml-2" />
                  </Button>

                  <div className="mt-2 flex flex-wrap justify-center gap-2">
                    <p className="w-full text-center font-semibold text-sm text-gray-700 mb-2">
                      Which sub-industry fits best?
                    </p>
                    {subIndustries?.map((sub: string, i: number) => (
                      <Button
                        key={sub + i}
                        className="bg-white border border-gray-300 text-gray-muted font-semibold rounded-lg py-0.5 px-2 text-xs hover:border-blue-500 transition"
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
