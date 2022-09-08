import Link from 'next/link';

const Box = () => {
   return (
      <div className="container">
         <div className="box p-1 my-1">
            <h6>
               Want to sell on S-Shop?{' '}
               <Link href="/registerseller">Create a seller's account now</Link>
            </h6>
         </div>
      </div>
   );
};

export default Box;
