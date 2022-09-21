import React from 'react';
import EditProductWrapper from '../../../components/EditProductComponents/EditProductWrapper';
import SellerNotification from '../../../components/SellerNotification';

const editproduct = () => {
   return (
      <div className="edit-product-page page">
         <SellerNotification />
         <EditProductWrapper />
         <SellerNotification />
      </div>
   );
};

export default editproduct;
