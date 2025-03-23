import React, { useState } from 'react';
import { useLocation, Link } from 'wouter';

const Sidebar = () => {
  const [location, navigate] = useLocation();
  const [activeSection, setActiveSection] = useState('Test-Profiles');
  const [expandedPrice, setExpandedPrice] = useState(false);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
    // Close price submenu when switching main sections
    if (section !== 'jobs') {
      setExpandedPrice(false);
    }
  };

  const togglePrice = (e) => {
    e.stopPropagation(); // Prevent triggering the parent's onClick
    setExpandedPrice(!expandedPrice);
  };
  
  return (
    <aside className="w-48 bg-white dark:bg-gray-800 shadow-md flex flex-col transition-colors h-screen overflow-y-auto">
      <div 
        onClick={() => navigate('/')}
        className={`p-4 border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2 cursor-pointer transition-colors ${location === '/' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
      >
        <i className="fas fa-home text-gray-500 dark:text-gray-400"></i>
        <span className="ml-2 text-gray-700 dark:text-gray-200">Dashboard</span>
      </div>
      
      {/* Test-Profiles Section */}
      <div className="border-b dark:border-gray-700">
        <div 
          onClick={() => toggleSection('Test-Profiles')} 
          className="p-4 flex items-center justify-between cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
          style={{ backgroundColor: activeSection === 'Test-Profiles' ? '#f3f4f6' : '', 
                 color: activeSection === 'Test-Profiles' ? '#1e6bb8' : '' }}
        >
          <span className="font-medium">Test-Profiles</span>
          <i className={`fas fa-chevron-${activeSection === 'Test-Profiles' ? 'up' : 'down'} text-sm text-gray-500 dark:text-gray-400`}></i>
        </div>
        
        {activeSection === 'Test-Profiles' && (
          <>
            <Link href="/">
              <div className="bg-blue-100 dark:bg-blue-900 p-4 border-l-4 border-[#1e6bb8] flex items-center transition-colors cursor-pointer">
                <i className="fas fa-building text-[#1e6bb8] dark:text-blue-400"></i>
                <span className="ml-2 text-[#1e6bb8] dark:text-blue-400 font-medium">Company</span>
              </div>
            </Link>
            
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
          </>
        )}
      </div>
      
      {/* Jobs Section */}
      <div className="border-b dark:border-gray-700">
        <div 
          onClick={() => toggleSection('jobs')}
          className="p-4 flex items-center justify-between cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
          style={{ backgroundColor: activeSection === 'jobs' ? '#f3f4f6' : '', 
                 color: activeSection === 'jobs' ? '#1e6bb8' : '' }}
        >
          <span className="font-medium">Jobs</span>
          <i className={`fas fa-chevron-${activeSection === 'jobs' ? 'up' : 'down'} text-sm text-gray-500 dark:text-gray-400`}></i>
        </div>
        
        {activeSection === 'jobs' && (
          <>
            <div className="pl-8 pr-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center cursor-pointer transition-colors">
              <i className="fas fa-list text-gray-500 dark:text-gray-400"></i>
              <span className="ml-2 text-gray-700 dark:text-gray-200">Jobs list</span>
            </div>
            
            <div className="pl-8 pr-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center cursor-pointer transition-colors">
              <i className="fas fa-tag text-gray-500 dark:text-gray-400"></i>
              <span className="ml-2 text-gray-700 dark:text-gray-200">Job category</span>
            </div>
            
            <div className="pl-8 pr-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center cursor-pointer transition-colors">
              <i className="fas fa-user-tie text-gray-500 dark:text-gray-400"></i>
              <span className="ml-2 text-gray-700 dark:text-gray-200">Job role</span>
            </div>
            
            <div 
              onClick={togglePrice}
              className="pl-8 pr-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-between cursor-pointer transition-colors"
            >
              <div className="flex items-center">
                <i className="fas fa-dollar-sign text-gray-500 dark:text-gray-400"></i>
                <span className="ml-2 text-[#1e6bb8] dark:text-blue-400 ">Price plan</span>
              </div>
              <i className={`fas fa-chevron-${expandedPrice ? 'up' : 'down'} text-xs text-gray-500 dark:text-gray-400`}></i>
            </div>
            
            {expandedPrice && (
              <>
                <div className="pl-12 pr-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center cursor-pointer transition-colors">
                  <i className="fas fa-building text-gray-500 dark:text-gray-400 text-xs"></i>
                  <Link href="/company-plan">
                    <span className="ml-2 text-gray-700 dark:text-gray-200">Company Plan</span>
                  </Link>
                </div>
                
                <div className="pl-12 pr-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center cursor-pointer transition-colors">
                  <i className="fas fa-user text-gray-500 dark:text-gray-400 text-xs"></i>
                  <span className="ml-2 text-gray-700 dark:text-gray-200">Candidate Plan</span>
                </div>
              </>
            )}
          </>
        )}
      </div>
      
      {/* Attributes Section */}
      <div className="border-b dark:border-gray-700">
        <div 
          onClick={() => toggleSection('attributes')}
          className="p-4 flex items-center justify-between cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
          style={{ backgroundColor: activeSection === 'attributes' ? '#f3f4f6' : '', 
                 color: activeSection === 'attributes' ? '#1e6bb8' : '' }}
        >
          <span className="font-medium">Attributes</span>
          <i className={`fas fa-chevron-${activeSection === 'attributes' ? 'up' : 'down'} text-sm text-gray-500 dark:text-gray-400`}></i>
        </div>
        
        {activeSection === 'attributes' && (
          <div className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center cursor-pointer transition-colors">
            <span className="ml-2 text-gray-700 dark:text-gray-200">Attributes content</span>
          </div>
        )}
      </div>
      
      {/* Settings Section */}
      <div>
        <div 
          onClick={() => toggleSection('settings')}
          className="p-4 flex items-center justify-between cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
          style={{ backgroundColor: activeSection === 'settings' ? '#f3f4f6' : '', 
                 color: activeSection === 'settings' ? '#1e6bb8' : '' }}
        >
          <span className="font-medium">Settings</span>
          <i className={`fas fa-chevron-${activeSection === 'settings' ? 'up' : 'down'} text-sm text-gray-500 dark:text-gray-400`}></i>
        </div>
        
        {activeSection === 'settings' && (
          <div className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center cursor-pointer transition-colors">
            <span className="ml-2 text-gray-700 dark:text-gray-200">Settings content</span>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
