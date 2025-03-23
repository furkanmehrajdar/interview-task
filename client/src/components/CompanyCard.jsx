import React from 'react';
import Toggle from './Toggle';

const CompanyCard = ({ company }) => {
  return (
    <div className="bg-white shadow-sm rounded-md mb-2">
      <div className="grid grid-cols-12 gap-4 p-4 border-b items-center">
        <div className="col-span-4 flex items-center">
          <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded mr-3">
            <span className="text-gray-500 text-xs">LOGO</span>
          </div>
          <div>
            <p className="font-medium text-gray-800">{company.name}</p>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <i className="fas fa-map-marker-alt mr-1 text-[#1e6bb8]"></i>
              <span>{company.location}</span>
            </div>
          </div>
        </div>
        
        <div className="col-span-2">
          <div className="flex flex-col">
            <a href={`mailto:${company.email}`} className="text-gray-700 text-sm hover:text-[#1e6bb8]">
              {company.email}
            </a>
            <div className="text-sm text-gray-600 mt-1">Mobile: {company.mobile}</div>
          </div>
        </div>

        <div className="col-span-2">
          <Toggle initialState={company.isActive} label="Activated" />
        </div>

        <div className="col-span-2">
          <Toggle initialState={company.isVerified} verifyMode={true} />
        </div>

        <div className="col-span-2 flex items-center justify-end space-x-2">
          <button className="px-3 py-1 text-sm bg-white border border-[#1e6bb8] text-[#1e6bb8] rounded hover:bg-blue-50">
            View Details
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded hover:bg-gray-50">
            <i className="fas fa-pen text-gray-500"></i>
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded hover:bg-gray-50">
            <i className="fas fa-trash text-gray-500"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
