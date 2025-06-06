import React, { ReactNode } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

const Input: React.FC<InputProps> = ({ icon, ...props }) => {
  return (
    <div className="relative rounded-md">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
      <input
        className={`block w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-400 transition-all duration-200 outline-none ${
          icon ? 'pl-10' : ''
        }`}
        {...props}
      />
    </div>
  );
};

export default Input;