import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="bg-[#0a4d8c] dark:bg-gray-800 text-white py-2 px-4 flex items-center justify-between border-b border-[#083b6d] dark:border-gray-700 transition-colors">
      <div className="flex items-center space-x-4">
        <div className="border border-white p-2 rounded">
          <span className="text-2xl font-light tracking-wider">idab</span>
        </div>
        <div className="flex items-center bg-[#0a4d8c] dark:bg-gray-800 px-3 py-2 rounded">
          <i className="fas fa-address-card mr-2"></i>
          <span className="font-medium">RMS - Profiles</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <div className="flex items-center border border-white rounded px-2 py-1">
          <span>Eng</span>
          <i className="fas fa-angle-down ml-1"></i>
        </div>
        <div className="relative">
          <i className="fas fa-bell text-lg"></i>
          <span className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center bg-red-500 text-white text-xs rounded-full">1</span>
        </div>
        <i className="fas fa-cog text-lg"></i>
        <i className="fas fa-power-off text-lg"></i>
        <div className="h-8 w-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
          <span className="text-sm text-gray-700 dark:text-gray-200">ID</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
