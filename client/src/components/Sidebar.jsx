import React from 'react';
import { useLocation, Link } from 'wouter';

const Sidebar = () => {
  const [location] = useLocation();

  return (
    <aside className="w-48 bg-white dark:bg-gray-800 shadow-md flex flex-col transition-colors">
      <Link href="/">
        <a className={`p-4 border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 cursor-pointer transition-colors ${location === '/' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>
          <i className="fas fa-home text-gray-500 dark:text-gray-400"></i>
          <span className="text-gray-700 dark:text-gray-200">Dashboard</span>
        </a>
      </Link>
      
      {/* Idab Profiles Section */}
      <div className="border-b dark:border-gray-700">
        <div className="p-4 flex items-center justify-between bg-gray-100 dark:bg-gray-700 transition-colors">
          <span className="text-gray-700 dark:text-gray-200 font-medium">Idab Profiles</span>
          <i className="fas fa-chevron-up text-sm text-gray-500 dark:text-gray-400"></i>
        </div>
        
        <div className="bg-blue-100 dark:bg-blue-900 p-4 border-l-4 border-[#1e6bb8] flex items-center transition-colors">
          <i className="fas fa-building text-[#1e6bb8] dark:text-blue-400"></i>
          <span className="ml-2 text-[#1e6bb8] dark:text-blue-400 font-medium">Company</span>
        </div>
        
        <div className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center cursor-pointer transition-colors">
          <i className="fas fa-user text-gray-500 dark:text-gray-400"></i>
          <span className="ml-2 text-gray-700 dark:text-gray-200">Candidate</span>
        </div>
        
        <div className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center cursor-pointer transition-colors">
          <i className="fas fa-clipboard-list text-gray-500 dark:text-gray-400"></i>
          <span className="ml-2 text-gray-700 dark:text-gray-200">Orders</span>
        </div>
        
        <div className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center cursor-pointer transition-colors">
          <i className="fas fa-file-alt text-gray-500 dark:text-gray-400"></i>
          <span className="ml-2 text-gray-700 dark:text-gray-200">Request</span>
        </div>
        
        <div className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center cursor-pointer transition-colors">
          <i className="fas fa-user-tag text-gray-500 dark:text-gray-400"></i>
          <span className="ml-2 text-gray-700 dark:text-gray-200">User role</span>
        </div>
      </div>
      
      {/* Jobs Section */}
      <div className="border-b dark:border-gray-700">
        <div className="p-4 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors">
          <span className="text-gray-700 dark:text-gray-200 font-medium">Jobs</span>
          <i className="fas fa-chevron-down text-sm text-gray-500 dark:text-gray-400"></i>
        </div>
      </div>
      
      {/* Attributes Section */}
      <div className="border-b dark:border-gray-700">
        <div className="p-4 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors">
          <span className="text-gray-700 dark:text-gray-200 font-medium">Attributes</span>
          <i className="fas fa-chevron-down text-sm text-gray-500 dark:text-gray-400"></i>
        </div>
      </div>
      
      {/* Settings Section */}
      <div>
        <div className="p-4 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors">
          <span className="text-gray-700 dark:text-gray-200 font-medium">Settings</span>
          <i className="fas fa-chevron-down text-sm text-gray-500 dark:text-gray-400"></i>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
