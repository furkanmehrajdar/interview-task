import React, { useState } from 'react';

const Toggle = ({ initialState = false, label, verifyMode = false }) => {
  const [isChecked, setIsChecked] = useState(initialState);
  
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex items-center">
      <label className="inline-flex relative items-center cursor-pointer">
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={handleToggle} 
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 dark:after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1e6bb8] dark:peer-checked:bg-blue-600 transition-colors"></div>
      </label>
      <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">
        {verifyMode ? (isChecked ? 'Verified' : 'Verify') : label}
      </span>
    </div>
  );
};

export default Toggle;
