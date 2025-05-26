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
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        ))}
        <Button
          onClick={handleSubmit}
          disabled={isLoading}
          className="mt-4 w-full bg-primary text-white p-2 rounded-md hover:bg-primary/90"
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
      </div>
    );
  }

  if (item.type === 'subtitle') {
    return <h2 className="text-center text-gray-500 my-4">{item.label}</h2>;
  }

  if (item.type === 'link') {
    return (
      <div className="text-center mt-4">
        <a href={item.link.href} className="text-blue-600 hover:underline">
          {item.label}
        </a>
      </div>
    );
  }

  return null;
};
