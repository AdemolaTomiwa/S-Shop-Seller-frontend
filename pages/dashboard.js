import React from 'react';
import BackBtn from '../components/BackBtn';
import DashboardInfo from '../components/DashboardpageComponents/DashboardInfo';
import DashboardShowcase from '../components/DashboardpageComponents/DashboardShowcase';

const dashboard = () => {
   return (
      <div className="dashboard-page">
         <BackBtn to="/" />
         <DashboardShowcase />
         <DashboardInfo />
      </div>
   );
};

export default dashboard;
