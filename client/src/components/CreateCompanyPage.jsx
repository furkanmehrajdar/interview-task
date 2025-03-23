import React, { useState } from 'react';
import { useLocation } from 'wouter';
import Header from './Header';
import Sidebar from './Sidebar';

const CreateCompanyPage = () => {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    organizationType: '',
    industryType: '',
    email: '',
    phone: '',
    mobile: '',
    websiteUrl: '',
    address: '',
    logo: null,
    contactPersonName: '',
    contactPersonEmail: '',
    contactPersonPhone: '',
    description: ''
  });
  
  // Preview for image upload
  const [logoPreview, setLogoPreview] = useState('');
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        logo: file
      });
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation would go here
    console.log('Form submitted:', formData);
    
    // For now, just navigate back to the company list
    navigate('/');
  };
  
  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 bg-[#f5f7fa] dark:bg-gray-900 p-6 transition-colors">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Create Company
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Fill in the form below to create a new company profile
              </p>
            </div>
            <div className="flex space-x-3">
              <button 
                onClick={handleCancel}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleSubmit}
                className="px-4 py-2 bg-[#1e6bb8] hover:bg-[#0a4d8c] text-white rounded-md transition-colors"
              >
                Save
              </button>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-md shadow-sm p-6 transition-colors">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company Information Section */}
              <div className="md:col-span-2">
                <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4 border-b pb-2 dark:border-gray-700">
                  Company Information
                </h2>
              </div>
              
              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter company name"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1e6bb8] focus:border-transparent transition-colors"
                />
              </div>
              
              {/* Organization Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Organization Type <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select 
                    name="organizationType"
                    value={formData.organizationType}
                    onChange={handleInputChange}
                    required
                    className="appearance-none w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1e6bb8] focus:border-transparent transition-colors"
                  >
                    <option value="">Select Organization Type</option>
                    <option value="Corporation">Corporation</option>
                    <option value="Non-Profit">Non-Profit</option>
                    <option value="Government">Government</option>
                    <option value="Educational">Educational</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                    <i className="fas fa-chevron-down text-xs"></i>
                  </div>
                </div>
              </div>
              
              {/* Industry Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Industry Type <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select 
                    name="industryType"
                    value={formData.industryType}
                    onChange={handleInputChange}
                    required
                    className="appearance-none w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 bg-white dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1e6bb8] focus:border-transparent transition-colors"
                  >
                    <option value="">Select Industry Type</option>
                    <option value="Technology">Technology</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Finance">Finance</option>
                    <option value="Education">Education</option>
                    <option value="Manufacturing">Manufacturing</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                    <i className="fas fa-chevron-down text-xs"></i>
                  </div>
                </div>
              </div>
              
              {/* Company Logo */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Company Logo
                </label>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 border border-gray-300 dark:border-gray-600 rounded-md flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-700">
                    {logoPreview ? (
                      <img src={logoPreview} alt="Logo Preview" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-gray-500 dark:text-gray-400 text-xs">LOGO</span>
                    )}
                  </div>
                  <label className="px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    Browse
                    <input 
                      type="file" 
                      name="logo" 
                      onChange={handleLogoChange}
                      accept="image/*"
                      className="hidden" 
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Maximum file size: 2MB. Supported formats: JPG, PNG, GIF
                </p>
              </div>
              
              {/* Contact Information Section */}
              <div className="md:col-span-2 mt-4">
                <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4 border-b pb-2 dark:border-gray-700">
                  Contact Information
                </h2>
              </div>
              
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter company email"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1e6bb8] focus:border-transparent transition-colors"
                />
              </div>
              
              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter company phone"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1e6bb8] focus:border-transparent transition-colors"
                />
              </div>
              
              {/* Mobile */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Mobile <span className="text-red-500">*</span>
                </label>
                <input 
                  type="tel" 
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter mobile number"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1e6bb8] focus:border-transparent transition-colors"
                />
              </div>
              
              {/* Website URL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Website URL
                </label>
                <input 
                  type="url" 
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleInputChange}
                  placeholder="https://example.com"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1e6bb8] focus:border-transparent transition-colors"
                />
              </div>
              
              {/* Address */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Address <span className="text-red-500">*</span>
                </label>
                <textarea 
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter company address"
                  rows="3"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1e6bb8] focus:border-transparent transition-colors"
                ></textarea>
              </div>
              
              {/* Contact Person Section */}
              <div className="md:col-span-2 mt-4">
                <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4 border-b pb-2 dark:border-gray-700">
                  Contact Person
                </h2>
              </div>
              
              {/* Contact Person Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  name="contactPersonName"
                  value={formData.contactPersonName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter contact person name"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1e6bb8] focus:border-transparent transition-colors"
                />
              </div>
              
              {/* Contact Person Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  name="contactPersonEmail"
                  value={formData.contactPersonEmail}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter contact person email"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1e6bb8] focus:border-transparent transition-colors"
                />
              </div>
              
              {/* Contact Person Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input 
                  type="tel" 
                  name="contactPersonPhone"
                  value={formData.contactPersonPhone}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter contact person phone"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1e6bb8] focus:border-transparent transition-colors"
                />
              </div>
              
              {/* Additional Information Section */}
              <div className="md:col-span-2 mt-4">
                <h2 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4 border-b pb-2 dark:border-gray-700">
                  Additional Information
                </h2>
              </div>
              
              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Description
                </label>
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter company description"
                  rows="4"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded px-3 py-2 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1e6bb8] focus:border-transparent transition-colors"
                ></textarea>
              </div>
            </div>
            
            {/* Form Actions */}
            <div className="mt-8 flex justify-end space-x-3">
              <button 
                type="button" 
                onClick={handleCancel}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="px-4 py-2 bg-[#1e6bb8] hover:bg-[#0a4d8c] text-white rounded-md transition-colors"
              >
                Save
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default CreateCompanyPage;