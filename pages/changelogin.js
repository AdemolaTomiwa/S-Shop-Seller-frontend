import React from 'react';
import BackBtn from '../components/BackBtn';
import ChangeLoginForm from '../components/ChangeLoginComponents/ChangeLoginForm';
import SellerNotification from '../components/SellerNotification';

const changelogin = () => {
   return (
      <div className="change-login-page">
         <SellerNotification />
         <BackBtn to="/dashboard" />
         <ChangeLoginForm />
         <SellerNotification />
      </div>
   );
};

export default changelogin;
