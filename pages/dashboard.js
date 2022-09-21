import React from 'react';
import BackBtn from '../components/BackBtn';
import DashboardInfo from '../components/DashboardpageComponents/DashboardInfo';
import DashboardShowcase from '../components/DashboardpageComponents/DashboardShowcase';
import SellerNotification from '../components/SellerNotification';

const dashboard = () => {
   return (
      <div className="dashboard-page">
         <SellerNotification />
         <BackBtn to="/" />
         <DashboardShowcase />
         <DashboardInfo />
         <SellerNotification />
      </div>
   );
};

export default dashboard;
