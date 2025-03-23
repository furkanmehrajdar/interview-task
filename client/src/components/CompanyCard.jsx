import React, { useState } from 'react';
import { useLocation } from 'wouter';
import Toggle from './Toggle';

const CompanyCard = ({ company, onDelete }) => {
  const [, navigate] = useLocation();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleEdit = () => {
    // Navigate to edit page with company id
    navigate(`/edit-company/${company.id}`);
  };

  const handleDelete = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    if (onDelete) {
      onDelete(company.id);
    }
    setShowDeleteConfirm(false);
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
  };

  const handleViewDetails = () => {
    // Navigate to company details page
    navigate(`/company-details/${company.id}`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm rounded-md mb-2 transition-colors">
      <div className="grid grid-cols-12 gap-4 p-4 border-b dark:border-gray-700 items-center">
        <div className="col-span-4 flex items-center">
          <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 flex items-center justify-center rounded mr-3 overflow-hidden">
            {company.logo ? (
              <img src={company.logo} alt={`${company.name} logo`} className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-500 dark:text-gray-400 text-xs">LOGO</span>
            )}
          </div>
          <div>
            <p className="font-medium text-gray-800 dark:text-gray-200">{company.name}</p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
              <i className="fas fa-map-marker-alt mr-1 text-[#1e6bb8] dark:text-blue-400"></i>
              <span>{company.location}</span>
            </div>
          </div>
        </div>
        
        <div className="col-span-2">
          <div className="flex flex-col">
            <a href={`mailto:${company.email}`} className="text-gray-700 dark:text-gray-300 text-sm hover:text-[#1e6bb8] dark:hover:text-blue-400">
              {company.email}
            </a>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Mobile: {company.mobile}</div>
          </div>
        </div>

        <div className="col-span-2">
          <Toggle initialState={company.isActive} label="Activated" />
        </div>

        <div className="col-span-2">
          <Toggle initialState={company.isVerified} verifyMode={true} />
        </div>

        <div className="col-span-2 flex items-center justify-end space-x-2">
          <button 
            onClick={handleViewDetails}
            className="px-3 py-1 text-sm bg-white dark:bg-gray-700 border border-[#1e6bb8] dark:border-blue-500 text-[#1e6bb8] dark:text-blue-400 rounded hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors"
          >
            View Details
          </button>
          <button 
            onClick={handleEdit}
            className="w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
          >
            <i className="fas fa-pen text-gray-500 dark:text-gray-400"></i>
          </button>
          <button 
            onClick={handleDelete}
            className="w-8 h-8 flex items-center justify-center bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
          >
            <i className="fas fa-trash text-gray-500 dark:text-gray-400"></i>
          </button>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md mx-auto">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
              Confirm Deletion
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Are you sure you want to delete <span className="font-medium">{company.name}</span>? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyCard;
