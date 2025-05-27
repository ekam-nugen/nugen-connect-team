import React from 'react';
import { LoginContentItemProps } from './types';
import { Input } from '@/base-components/input';
import { Button } from '@/base-components/button';

export const LoginContentItem: React.FC<LoginContentItemProps> = ({
  item,
  form,
  isLoading,
  handleChange,
  handleSubmit,
}) => {
  if (item.type === 'input') {
    return (
      <div className="space-y-4">
        {item.inputs.map(input => (
          <div key={input.name}>
            <label className="block text-sm font-medium mb-1">
              {input.label}
            </label>
            <Input
              type={input.type}
              name={input.name}
              value={form[input.name]}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>
        ))}
        <div className="justify-center items-center flex">
          <Button
            onClick={handleSubmit}
            disabled={isLoading}
            className="mt-4 w-full bg-primary text-gray-light p-4 rounded-md hover:bg-primary/90"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </Button>
        </div>
      </div>
    );
  }

  if (item.type === 'link') {
    return (
      <div className="text-center mt-4">
        <a href={item.link.href} className="text-primary-hover hover:underline">
          {item.label}
        </a>
      </div>
    );
  }

  return null;
};
