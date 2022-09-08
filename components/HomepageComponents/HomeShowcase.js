import Link from 'next/link';
import React from 'react';

const HomeShowcase = () => {
   return (
      <div className="home-showcase section">
         <div className="container">
            <div className="wrapper">
               <div className="box">
                  <h3>Make money selling on S-Shop</h3>
                  <h5 className="py-1">Make money, money, make money</h5>
                  <Link href="/login">
                     <button className="btn btn-primary">Login</button>
                  </Link>
                  <Link href="/register">
                     <button className="btn btn-secondary mx-1">Sign up</button>
                  </Link>
               </div>
               <div className="box img">
                  <img
                     src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/205144/1.jpg?0768"
                     alt=""
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomeShowcase;
