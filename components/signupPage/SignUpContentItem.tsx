import { Button } from '@/base-components/button';
import { Input } from '@/base-components/input';
import { motion } from 'framer-motion';
import {
  bottomToTopAnimation,
  rightToLeftAnimation,
} from '@/lib/animationUtils';
import { SignUpContentItemProps } from './types';
import SelectBox from '@/base-components/selectbox';
import { FIND_US } from '@/lib/en';

export function SignUpContentItem({
  item,
  form,
  errs,
  isLoading,
  handleChange,
  handleSubmit,
}: Readonly<SignUpContentItemProps>) {
  switch (item.type) {
    case 'input-group':
      return (
        <motion.div
          variants={rightToLeftAnimation}
          className={`mt-4 flex ${
            (item?.inputs?.length ?? 0) > 1 ? 'flex-row gap-4' : 'flex-col'
          }`}
        >
          {item?.inputs?.map(input => (
            <Input
              key={input.name}
              name={input.name}
              type={input.type as 'number' | 'text' | 'password' | 'email'}
              value={
                typeof form === 'string'
                  ? ''
                  : form[input.name]?.toString?.() || ''
              }
              onChange={handleChange}
              placeholder={input.label}
              error={!!errs?.[input.name]}
              helpText={errs?.[input.name] ? `${input.label} is invalid` : ''}
            />
          ))}
        </motion.div>
      );
    case 'select':
      return (
        <motion.div
          variants={rightToLeftAnimation}
          className="mt-4 flex flex-col"
        >
          <SelectBox
            value={form[item.name as string]}
            onChange={(selected: string) =>
              handleChange({
                target: { name: item.name as string, value: selected },
              } as React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)
            }
            placeholder={item.label || FIND_US}
            filteredOptions={(item.options ?? []).map(opt => ({
              id: opt.value,
              value: opt.value,
              label: opt.label,
            }))}
            setSelectedItems={() => []}
            setFilteredOptions={() => []}
            selectedItems={[]}
          />
        </motion.div>
      );
    case 'button':
      return (
        <motion.div
          variants={bottomToTopAnimation}
          className="text-center mt-6"
        >
          <Button
            onClick={handleSubmit}
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-2 px-6 rounded-full text-sm transition"
          >
            {isLoading ? 'Signing up...' : item.label}
          </Button>
        </motion.div>
      );

    default:
      return null;
  }
}
