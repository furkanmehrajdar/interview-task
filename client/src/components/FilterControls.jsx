import React from 'react';

const FilterControls = ({ 
  searchTerm, 
  setSearchTerm, 
  organizationType, 
  setOrganizationType,
  industryType,
  setIndustryType,
  emailVerification,
  setEmailVerification,
  sortBy,
  setSortBy
}) => {
  return (
    <div className="bg-white rounded-md shadow-sm p-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
          <input 
            type="text" 
            placeholder="Search" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e6bb8] focus:border-transparent"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Organization Type</label>
          <div className="relative">
            <select 
              value={organizationType}
              onChange={(e) => setOrganizationType(e.target.value)}
              className="appearance-none w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#1e6bb8] focus:border-transparent"
            >
              <option value="All">All</option>
              <option value="Corporation">Corporation</option>
              <option value="Non-Profit">Non-Profit</option>
              <option value="Government">Government</option>
              <option value="Educational">Educational</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <i className="fas fa-chevron-down text-xs"></i>
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Industry Type</label>
          <div className="relative">
            <select 
              value={industryType}
              onChange={(e) => setIndustryType(e.target.value)}
              className="appearance-none w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#1e6bb8] focus:border-transparent"
            >
              <option value="All">All</option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Finance">Finance</option>
              <option value="Education">Education</option>
              <option value="Manufacturing">Manufacturing</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <i className="fas fa-chevron-down text-xs"></i>
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Verification</label>
          <div className="relative">
            <select 
              value={emailVerification}
              onChange={(e) => setEmailVerification(e.target.value)}
              className="appearance-none w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#1e6bb8] focus:border-transparent"
            >
              <option value="All">All</option>
              <option value="Verified">Verified</option>
              <option value="Unverified">Unverified</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <i className="fas fa-chevron-down text-xs"></i>
            </div>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
          <div className="relative">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#1e6bb8] focus:border-transparent"
            >
              <option value="Latest">Latest</option>
              <option value="Oldest">Oldest</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <i className="fas fa-chevron-down text-xs"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;
