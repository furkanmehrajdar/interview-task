import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Initialize dark mode based on localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    // Update localStorage
    localStorage.setItem('darkMode', newDarkMode.toString());
    
    // Toggle dark class on html element
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="flex items-center">
      <label className="inline-flex relative items-center cursor-pointer">
        <input 
          type="checkbox" 
          checked={darkMode} 
          onChange={toggleDarkMode} 
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 dark:bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 dark:after:border-gray-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1e6bb8] dark:peer-checked:bg-blue-600 transition-colors"></div>
      </label>
    </div>
  );
};

export default ThemeToggle;