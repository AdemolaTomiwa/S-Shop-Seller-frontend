import React from 'react';
import BackBtn from '../components/BackBtn';
import CreateProductForm from '../components/CreateProductpageComponents/CreateProductForm';
import SellerNotification from '../components/SellerNotification';

const createproduct = () => {
   return (
      <div className="create-product-page">
         <SellerNotification />
         <BackBtn to="/allproducts" />
         <CreateProductForm />
         <SellerNotification />
      </div>
   );
};

export default createproduct;
