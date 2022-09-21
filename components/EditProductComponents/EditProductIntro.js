import Link from 'next/link';
import { useRouter } from 'next/router';

const EditProductIntro = () => {
   const router = useRouter();

   return (
      <div className="edit-product-intro section-small">
         <div className="container">
            <div className="wrapper">
               <div className="links-tags">
                  <h6 className="py-1">
                     <Link href="/">
                        <span>S-Shop Seller</span>
                     </Link>{' '}
                     &gt;{' '}
                     <Link href={`/dashboard`}>
                        <span>Dashboard</span>
                     </Link>{' '}
                     &gt;{' '}
                     <Link href={`/product/${router.query.id}`}>
                        <span>Product</span>
                     </Link>{' '}
                     &gt;{' '}
                     <Link href={`/editproduct/${router.query.id}`}>
                        <span>Edit product</span>
                     </Link>{' '}
                  </h6>
               </div>
            </div>
         </div>
      </div>
   );
};

export default EditProductIntro;
