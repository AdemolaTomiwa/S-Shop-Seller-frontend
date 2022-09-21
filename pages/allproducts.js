import React from 'react';
import AllProducts from '../components/AllProductspageComponents/AllProducts';
import AllProductsIntro from '../components/AllProductspageComponents/AllProductsIntro';
import BackBtn from '../components/BackBtn';
import SellerNotification from '../components/SellerNotification';

const allproducts = () => {
   return (
      <div className="all-products-page">
         <SellerNotification />
         <BackBtn to="/dashboard" />
         <AllProductsIntro />
         <AllProducts />
         <SellerNotification />
      </div>
   );
};

export default allproducts;
