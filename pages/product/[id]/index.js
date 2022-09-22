import ProductWrapper from '../../../components/ProductPageComponents/ProductWrapper';
import BackBtn from '../../../components/BackBtn';
import SellerNotification from '../../../components/SellerNotification';

const product = () => {
   return (
      <div className="product-page page">
        <SellerNotification />
         <BackBtn to="/allproducts" />
         <ProductWrapper />
        <SellerNotification />
         
      </div>
   );
};

export default product;
