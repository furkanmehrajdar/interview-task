import React, { useState } from 'react';
import { useLocation, Link } from 'wouter';

const Sidebar = () => {
  const [location] = useLocation();
  const [expandedJobs, setExpandedJobs] = useState(true);
  const [expandedPrice, setExpandedPrice] = useState(false);

  const toggleJobs = () => {
    setExpandedJobs(!expandedJobs);
  };

  const togglePrice = () => {
    setExpandedPrice(!expandedPrice);
  };

  return (
    <aside className="w-48 bg-white dark:bg-gray-800 shadow-md flex flex-col transition-colors">
      <div className={`p-4 border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 cursor-pointer transition-colors ${location === '/' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>
        <Link href="/">
          <i className="fas fa-home text-gray-500 dark:text-gray-400"></i>
          <span className="ml-2 text-gray-700 dark:text-gray-200">Dashboard</span>
        </Link>
      </div>
      
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
        <div 
          onClick={toggleJobs}
          className="p-4 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
        >
          <span className="text-gray-700 dark:text-gray-200 font-medium">Jobs</span>
          <i className={`fas fa-chevron-${expandedJobs ? 'up' : 'down'} text-sm text-gray-500 dark:text-gray-400`}></i>
        </div>
        
        {expandedJobs && (
          <>
            <div className="pl-8 pr-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center cursor-pointer transition-colors">
              <i className="fas fa-list text-gray-500 dark:text-gray-400"></i>
              <span className="ml-2 text-gray-700 dark:text-gray-200 text-sm">Jobs list</span>
            </div>
            
            <div className="pl-8 pr-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center cursor-pointer transition-colors">
              <i className="fas fa-tag text-gray-500 dark:text-gray-400"></i>
              <span className="ml-2 text-gray-700 dark:text-gray-200 text-sm">Job category</span>
            </div>
            
            <div className="pl-8 pr-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center cursor-pointer transition-colors">
              <i className="fas fa-user-tie text-gray-500 dark:text-gray-400"></i>
              <span className="ml-2 text-gray-700 dark:text-gray-200 text-sm">Job role</span>
            </div>
            
            <div 
              onClick={togglePrice}
              className="pl-8 pr-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-between cursor-pointer transition-colors"
            >
              <div className="flex items-center">
                <i className="fas fa-dollar-sign text-gray-500 dark:text-gray-400"></i>
                <span className="ml-2 text-gray-700 dark:text-gray-200 text-sm">Price plan</span>
              </div>
              <i className={`fas fa-chevron-${expandedPrice ? 'up' : 'down'} text-xs text-gray-500 dark:text-gray-400`}></i>
            </div>
            
            {expandedPrice && (
              <>
                <div className="pl-12 pr-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center cursor-pointer transition-colors">
                  <i className="fas fa-building text-gray-500 dark:text-gray-400 text-xs"></i>
                  <Link href="/company-plan">
                    <span className="ml-2 text-gray-700 dark:text-gray-200 text-sm">Company Plan</span>
                  </Link>
                </div>
                
                <div className="pl-12 pr-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center cursor-pointer transition-colors">
                  <i className="fas fa-user text-gray-500 dark:text-gray-400 text-xs"></i>
                  <span className="ml-2 text-gray-700 dark:text-gray-200 text-sm">Candidate Plan</span>
                </div>
              </>
            )}
          </>
        )}
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
