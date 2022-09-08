import Link from 'next/link';

const AllProductsIntro = () => {
   return (
      <div className="all-products-intro section-small">
         <div className="container">
            <div className="wrapper">
               <div className="links-tags">
                  <h6 className="py-1">
                     <Link href="/">
                        <span>S-Shop</span>
                     </Link>{' '}
                     &gt;{' '}
                     <Link href={`/dashboard`}>
                        <span>Dashboard</span>
                     </Link>{' '}
                     &gt;{' '}
                     <Link href={`/allproducts`}>
                        <span>My Products</span>
                     </Link>{' '}
                  </h6>
               </div>
               <Link href="/createproduct">
                  <button className="btn btn-secondary">
                     Create new product
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default AllProductsIntro;
