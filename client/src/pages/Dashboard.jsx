import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CompanyList from '../components/CompanyList';

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-auto p-6">
          <CompanyList />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
