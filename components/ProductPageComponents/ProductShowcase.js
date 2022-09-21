import Link from 'next/link';
import Rating from '../Rating';
import { useEffect, useState } from 'react';
import DeleteProductModal from './DeleteProductModal';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const ProductShowcase = ({ product }) => {
   const router = useRouter();
   const [deleteModal, setDeleteModal] = useState(false);

   const deleteProductState = useSelector((state) => state.deleteProduct);
   const { success } = deleteProductState;

   useEffect(() => {
      if (success) {
         router.push('/allproducts');
      }
   }, [success, router]);

   return (
      <div className="product-showcase section">
         <div className="container">
            <div className="wrapper">
               <div className="box details">
                  <div className="links-tags">
                     <h6 className="py-1">
                        <Link href="/">
                           <span>S-Shop Admin</span>
                        </Link>{' '}
                        &gt;{' '}
                        <Link href={`/dashboard`}>
                           <span>Dashboard</span>
                        </Link>{' '}
                        &gt;{' '}
                        <Link href={`/product/${product?._id}`}>
                           <span>{product?.name}</span>
                        </Link>{' '}
                     </h6>
                  </div>
                  <h4>{product?.name}</h4>
                  <h5 className="py-1">
                     {product && `Brand: ${product.brand}`}
                  </h5>
                  <Rating rating={product?.rating} />
                  <h3>#{product?.price}</h3>
               </div>
               <div className="box img">
                  <img src={product?.productImage} alt={product?.name} />
               </div>
            </div>
            <div className="btns my-1">
               <Link
                  href="/editproduct/[id]"
                  as={`/editproduct/${product?._id}`}
               >
                  <button className="btn btn-primary">Edit product</button>
               </Link>
               <button
                  onClick={() => setDeleteModal(true)}
                  className="btn btn-danger"
               >
                  Delete product
               </button>
            </div>
         </div>
         {deleteModal && (
            <DeleteProductModal
               closeModal={() => setDeleteModal(false)}
               product={product}
            />
         )}
      </div>
   );
};

export default ProductShowcase;
