import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

const DashboardShowcase = () => {
   const router = useRouter();
   const [showBank, setshowBank] = useState(false);
   const [brandLogo, setBrandLogo] = useState(
      'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
   );
   const [brandName, setBrandName] = useState('');

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   useEffect(() => {
      if (!user) {
         router.push('/login');
      } else {
         setBrandLogo(user?.brandLogo);
         setBrandName(user?.brandName);
      }
   }, [router, user]);

   return (
      <div className="dashboard-showcase section">
         <div className="container">
            <div className="wrapper">
               <div className="box details">
                  <div className="links-tags">
                     <h6 className="py-1">
                        <Link href="/">
                           <span>S-Shop Seller</span>
                        </Link>{' '}
                        &gt;{' '}
                        <Link href={`/dashboard`}>
                           <span>Dashboard</span>
                        </Link>{' '}
                     </h6>
                  </div>
                  <h3
                     suppressHydrationWarning={true}
                  >{`${user?.firstName} ${user?.lastName}`}</h3>
                  <h4 suppressHydrationWarning={true} className="my-0">
                     {user?.email}
                  </h4>
                  <h5 suppressHydrationWarning={true}>{user?.phoneNumber}</h5>
                  <button
                     onClick={() => setshowBank(!showBank)}
                     className="btn btn-secondary my-1"
                  >
                     {showBank ? 'Hide bank' : 'Show Bank'}
                  </button>
                  {showBank && (
                     <>
                        <h5 suppressHydrationWarning={true}>
                           Bank name: {user?.bankName}
                        </h5>
                        <h5 suppressHydrationWarning={true} className="my-0">
                           Account number: {user?.accountNumber}
                        </h5>
                        <h5 suppressHydrationWarning={true}>
                           Name of account holder: {user?.nameOfAccountHolder}
                        </h5>
                     </>
                  )}
               </div>
               <div className="img">
                  <img src={brandLogo} alt={brandName} />
                  <h5 suppressHydrationWarning={true} className="my-0">
                     {user?.brandName}
                  </h5>
               </div>
            </div>
         </div>
      </div>
   );
};

export default DashboardShowcase;
