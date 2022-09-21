import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../store/actions/productActions';
import { UPDATE_PRODUCT_RESET } from '../../store/constants/productConstants';
import BackBtn from '../BackBtn';
import { ErrorMessageBox } from '../MessageBox';
import { PrimarySpinner } from '../Spinner';
import EditProductForm from './EditProductForm';
import EditProductIntro from './EditProductIntro';

const EditProductWrapper = () => {
   const router = useRouter();
   const dispatch = useDispatch();

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   const getProductState = useSelector((state) => state.getProduct);
   const { loading, product } = getProductState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      dispatch({ type: UPDATE_PRODUCT_RESET });
      if (!user) {
         router.push('/login');
      }

      dispatch(getProduct(router.query.id));
   }, [dispatch, user, router]);

   return (
      <div className="product-wrapper">
         <BackBtn to={`/product/${product?._id}`} />
         {loading ? (
            <PrimarySpinner />
         ) : msg === 'Product not found! An error occured!' ? (
            <>
               <div className="container">
                  <ErrorMessageBox msg={msg} />
               </div>
            </>
         ) : (
            product && (
               <>
                  <EditProductIntro />
                  <EditProductForm productDetails={product} />
               </>
            )
         )}
      </div>
   );
};

export default EditProductWrapper;
