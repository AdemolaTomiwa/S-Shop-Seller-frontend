import React from 'react';

const LearnBasics = () => {
   return (
      <div className="learn-basics section">
         <div className="container">
            <div className="head py-1">
               <h4>Learn the basics</h4>
            </div>
            <div className="boxes">
               <div className="box">
                  <div className="img p-0">
                     <img
                        src="https://images.pexels.com/photos/159760/computer-pc-workplace-home-office-159760.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                     />
                  </div>
                  <div className="details p-1">
                     <h5>Register under 5 minutes</h5>
                     <p className="py-1">Fill the registration form</p>
                  </div>
               </div>
               <div className="box">
                  <div className="img p-0">
                     <img
                        src="https://images.pexels.com/photos/3735655/pexels-photo-3735655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                     />
                  </div>
                  <div className="details p-1">
                     <h5>List your products and sell</h5>
                     <p className="py-1">
                        Upload your best selling products and start selling.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LearnBasics;
