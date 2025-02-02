import React from 'react';
import Box from './Box';

const FrequentlyAskedQuestions = () => {
   return (
      <div className="frequently-asked-questions section">
         <div className="container">
            <div className="head py-1">
               <h4>Frequently asked questions</h4>
            </div>
            <div className="questions">
               <div className="question my-0 p-1">
                  <h5>How much does it cost to sell on S-Shop</h5>
                  <small>
                     It cost #0, you just list your products and start earning
                     you money
                  </small>
               </div>
            </div>
            <Box />
         </div>
      </div>
   );
};

export default FrequentlyAskedQuestions;
