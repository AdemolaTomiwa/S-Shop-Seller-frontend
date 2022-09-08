import React from 'react';
import BackBtn from '../components/BackBtn';
import CreateProductForm from '../components/CreateProductpageComponents/CreateProductForm';

const createproduct = () => {
   return (
      <div className="create-product-page">
         <BackBtn to="/allproducts" />
         <CreateProductForm />
      </div>
   );
};

export default createproduct;
