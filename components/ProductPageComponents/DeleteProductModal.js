import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../store/actions/productActions';
import { SmallWhiteSpinner } from '../Spinner';

const DeleteProductModal = ({ product, closeModal }) => {
   const dispatch = useDispatch();

   const deleteProductState = useSelector((state) => state.deleteProduct);
   const { loading, success } = deleteProductState;

   useEffect(() => {
      if (success) {
         closeModal();
      }
   }, [success]);

   return (
      <div className="delete-modal">
         <div className="content p-2">
            <div className="head">
               <h4>Delete product</h4>
               <FaTimes
                  onClick={() => closeModal()}
                  cursor={'pointer'}
                  size={30}
               />
            </div>
            <section className="my-1">
               <p>
                  Are you sure you want to delete{' '}
                  <strong className="text-danger">{product?.name}</strong>
               </p>
            </section>
            <div className="btns">
               <button onClick={() => closeModal()} className="btn btn-primary">
                  Cancel
               </button>
               <button
                  onClick={() => dispatch(deleteProduct(product._id))}
                  className="btn btn-danger"
               >
                  {loading ? <SmallWhiteSpinner /> : 'Delete Product'}
               </button>
            </div>
         </div>
      </div>
   );
};

export default DeleteProductModal;
