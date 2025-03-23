import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-48 bg-white shadow-md flex flex-col">
      <div className="p-4 border-b hover:bg-gray-100 flex items-center space-x-2 cursor-pointer">
        <i className="fas fa-home text-gray-500"></i>
        <span className="text-gray-700">Dashboard</span>
      </div>
      
      {/* Idab Profiles Section */}
      <div className="border-b">
        <div className="p-4 flex items-center justify-between bg-gray-100">
          <span className="text-gray-700 font-medium">Idab Profiles</span>
          <i className="fas fa-chevron-up text-sm text-gray-500"></i>
        </div>
        
        <div className="bg-blue-100 p-4 border-l-4 border-[#1e6bb8] flex items-center">
          <i className="fas fa-building text-[#1e6bb8]"></i>
          <span className="ml-2 text-[#1e6bb8] font-medium">Company</span>
        </div>
        
        <div className="p-4 hover:bg-gray-100 flex items-center cursor-pointer">
          <i className="fas fa-user text-gray-500"></i>
          <span className="ml-2 text-gray-700">Candidate</span>
        </div>
        
        <div className="p-4 hover:bg-gray-100 flex items-center cursor-pointer">
          <i className="fas fa-clipboard-list text-gray-500"></i>
          <span className="ml-2 text-gray-700">Orders</span>
        </div>
        
        <div className="p-4 hover:bg-gray-100 flex items-center cursor-pointer">
          <i className="fas fa-file-alt text-gray-500"></i>
          <span className="ml-2 text-gray-700">Request</span>
        </div>
        
        <div className="p-4 hover:bg-gray-100 flex items-center cursor-pointer">
          <i className="fas fa-user-tag text-gray-500"></i>
          <span className="ml-2 text-gray-700">User role</span>
        </div>
      </div>
      
      {/* Jobs Section */}
      <div className="border-b">
        <div className="p-4 flex items-center justify-between hover:bg-gray-100 cursor-pointer">
          <span className="text-gray-700 font-medium">Jobs</span>
          <i className="fas fa-chevron-down text-sm text-gray-500"></i>
        </div>
      </div>
      
      {/* Attributes Section */}
      <div className="border-b">
        <div className="p-4 flex items-center justify-between hover:bg-gray-100 cursor-pointer">
          <span className="text-gray-700 font-medium">Attributes</span>
          <i className="fas fa-chevron-down text-sm text-gray-500"></i>
        </div>
      </div>
      
      {/* Settings Section */}
      <div>
        <div className="p-4 flex items-center justify-between hover:bg-gray-100 cursor-pointer">
          <span className="text-gray-700 font-medium">Settings</span>
          <i className="fas fa-chevron-down text-sm text-gray-500"></i>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
