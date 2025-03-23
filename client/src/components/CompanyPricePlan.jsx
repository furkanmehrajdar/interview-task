import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const PricePlanCard = ({ plan, isDefault, onEdit, onDelete }) => {
  const { 
    name, 
    price, 
    label, 
    description, 
    jobPosts, 
    featuredPosts, 
    highlightedPosts, 
    candidateCV 
  } = plan;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-md shadow-sm p-6 flex flex-col transition-colors">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="inline-block px-4 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-sm mt-2">
          {label}
        </div>
      </div>
      
      <div className="text-center mb-6">
        <div className="text-4xl font-bold flex justify-center items-end">
          <span className="text-2xl mr-1">$</span> {price}
        </div>
      </div>
      
      <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-6">
        {description}
      </p>
      
      <div className="flex-grow space-y-3 mb-6">
        <div className="flex items-center">
          <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3">
            <i className="fas fa-check text-xs text-gray-500 dark:text-gray-400"></i>
          </div>
          <span className="text-sm">Job posts up to {jobPosts}.</span>
        </div>
        
        <div className="flex items-center">
          <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3">
            <i className="fas fa-check text-xs text-gray-500 dark:text-gray-400"></i>
          </div>
          <span className="text-sm">Featured job posts up to {featuredPosts}.</span>
        </div>
        
        <div className="flex items-center">
          <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3">
            <i className="fas fa-check text-xs text-gray-500 dark:text-gray-400"></i>
          </div>
          <span className="text-sm">Highlighted job posts up to {highlightedPosts}.</span>
        </div>
        
        <div className="flex items-center">
          <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3">
            <i className="fas fa-check text-xs text-gray-500 dark:text-gray-400"></i>
          </div>
          <span className="text-sm">{candidateCV} Candidate CV preview.</span>
        </div>
      </div>
      
      <div className="border-t dark:border-gray-700 pt-4 pb-2">
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id={`show-${name}`}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor={`show-${name}`} className="ml-2 text-sm text-gray-700 dark:text-gray-300">
            Show this package on frontend
          </label>
        </div>
      </div>
      
      <div className="flex justify-center space-x-2 mt-4">
        <button 
          onClick={() => onEdit(plan)} 
          className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
        >
          <i className="fas fa-pen text-gray-500 dark:text-gray-400"></i>
        </button>
        
        {!isDefault && (
          <button 
            onClick={() => onDelete(plan.id)} 
            className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
          >
            <i className="fas fa-trash text-gray-500 dark:text-gray-400"></i>
          </button>
        )}
      </div>
    </div>
  );
};

const CompanyPricePlan = () => {
  const [recommendedPackage, setRecommendedPackage] = useState('');
  const [defaultPackage, setDefaultPackage] = useState('Trial');
  
  const pricePlans = [
    {
      id: 1,
      name: 'Trial',
      price: '0',
      label: 'Default',
      description: 'First try, then trust!',
      jobPosts: '3',
      featuredPosts: '3',
      highlightedPosts: '3',
      candidateCV: '50'
    },
    {
      id: 2,
      name: 'Startup & SME',
      price: '150',
      label: 'Basic',
      description: 'Monthly saver - yearly plan Basic recruitment support - Standard HR docs',
      jobPosts: '15',
      featuredPosts: '5',
      highlightedPosts: '3',
      candidateCV: '600'
    },
    {
      id: 3,
      name: 'MSME',
      price: '375',
      label: 'Premium',
      description: 'Premium support - Annual price Exclusive recruitment support - Standard HR docs',
      jobPosts: '25',
      featuredPosts: '10',
      highlightedPosts: '10',
      candidateCV: '1500'
    },
    {
      id: 4,
      name: 'Large',
      price: '1000',
      label: 'Customized',
      description: 'Pay as you use. It will be your customized plan only for you.',
      jobPosts: '60',
      featuredPosts: '30',
      highlightedPosts: '15',
      candidateCV: '∞'
    }
  ];
  
  const handleRecommendedUpdate = () => {
    console.log('Setting recommended package:', recommendedPackage);
    // API call would go here
  };
  
  const handleDefaultUpdate = () => {
    console.log('Setting default package:', defaultPackage);
    // API call would go here
  };
  
  const handleEdit = (plan) => {
    console.log('Editing plan:', plan);
    // Open edit modal or navigate to edit page
  };
  
  const handleDelete = (planId) => {
    console.log('Deleting plan with ID:', planId);
    // Show confirmation dialog and delete
  };
  
  const handleCreate = () => {
    console.log('Creating new price plan');
    // Navigate to create page or open create modal
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 bg-[#f5f7fa] dark:bg-gray-900 p-6 transition-colors">
          <div className="mb-6">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              Company Price Plan
            </h1>
            <div className="w-28 h-1 bg-red-500 mt-1"></div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-md shadow-sm p-6 mb-6 transition-colors">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                  Set Recommended Package
                </h2>
                <div className="flex space-x-2">
                  <div className="flex-grow relative">
                    <select 
                      value={recommendedPackage}
                      onChange={(e) => setRecommendedPackage(e.target.value)}
                      className="appearance-none w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1e6bb8] focus:border-transparent transition-colors"
                    >
                      <option value="">Select one</option>
                      {pricePlans.map(plan => (
                        <option key={plan.id} value={plan.name}>{plan.name}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                      <i className="fas fa-chevron-down text-xs"></i>
                    </div>
                  </div>
                  <button 
                    onClick={handleRecommendedUpdate}
                    className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 rounded-md transition-colors"
                  >
                    Update
                  </button>
                </div>
              </div>
              
              <div>
                <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">
                  Set Default Package
                </h2>
                <div className="flex space-x-2">
                  <div className="flex-grow relative">
                    <select 
                      value={defaultPackage}
                      onChange={(e) => setDefaultPackage(e.target.value)}
                      className="appearance-none w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1e6bb8] focus:border-transparent transition-colors"
                    >
                      {pricePlans.map(plan => (
                        <option key={plan.id} value={plan.name}>{plan.name}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                      <i className="fas fa-chevron-down text-xs"></i>
                    </div>
                  </div>
                  <button 
                    onClick={handleDefaultUpdate}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md border border-gray-300 dark:border-gray-600 transition-colors"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end mb-6">
            <button 
              onClick={handleCreate}
              className="px-4 py-2 bg-[#1e6bb8] hover:bg-[#0a4d8c] text-white rounded-md flex items-center transition-colors"
            >
              <i className="fas fa-plus mr-2"></i>
              <span>Create</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricePlans.map(plan => (
              <PricePlanCard 
                key={plan.id}
                plan={plan}
                isDefault={plan.name === defaultPackage}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CompanyPricePlan;