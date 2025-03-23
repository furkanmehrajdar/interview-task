import React, { useState, useMemo } from 'react';
import { useLocation } from 'wouter';
import FilterControls from './FilterControls';
import CompanyCard from './CompanyCard';
import { companies } from '../data/companies';

const CompanyList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [organizationType, setOrganizationType] = useState('All');
  const [industryType, setIndustryType] = useState('All');
  const [emailVerification, setEmailVerification] = useState('All');
  const [sortBy, setSortBy] = useState('Latest');
  const [, navigate] = useLocation();

  const filteredCompanies = useMemo(() => {
    return companies
      .filter(company => {
        const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              company.email.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesOrgType = organizationType === 'All' || company.organizationType === organizationType;
        
        const matchesIndustry = industryType === 'All' || company.industryType === industryType;
        
        const matchesVerification = emailVerification === 'All' || 
                                   (emailVerification === 'Verified' && company.isVerified) ||
                                   (emailVerification === 'Unverified' && !company.isVerified);
        
        return matchesSearch && matchesOrgType && matchesIndustry && matchesVerification;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case 'Latest':
            return b.id - a.id;
          case 'Oldest':
            return a.id - b.id;
          case 'A-Z':
            return a.name.localeCompare(b.name);
          case 'Z-A':
            return b.name.localeCompare(a.name);
          default:
            return 0;
        }
      });
  }, [searchTerm, organizationType, industryType, emailVerification, sortBy]);

  const handleCreateCompany = () => {
    navigate('/create-company');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-100 border-b-2 border-[#1e6bb8] pb-1 inline-block">
            Company List
          </h1>
        </div>
        <button 
          onClick={handleCreateCompany}
          className="bg-[#1e6bb8] hover:bg-[#0a4d8c] text-white px-4 py-2 rounded flex items-center transition-colors"
        >
          <i className="fas fa-plus mr-2"></i>
          <span>Create Company</span>
        </button>
      </div>

      <FilterControls 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        organizationType={organizationType}
        setOrganizationType={setOrganizationType}
        industryType={industryType}
        setIndustryType={setIndustryType}
        emailVerification={emailVerification}
        setEmailVerification={setEmailVerification}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Table Header */}
      <div className="grid grid-cols-12 gap-4 px-4 py-2 bg-white dark:bg-gray-800 rounded-t-md border-b dark:border-gray-700 text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors">
        <div className="col-span-4">Company</div>
        <div className="col-span-2">Contact</div>
        <div className="col-span-2">Account Status</div>
        <div className="col-span-2">Email Verification</div>
        <div className="col-span-2"></div>
      </div>

      {/* Company List */}
      {filteredCompanies.map(company => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  );
};

export default CompanyList;
