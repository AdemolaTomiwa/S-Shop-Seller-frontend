import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { ErrorMessageBox, SuccessMessageBox } from '../MessageBox';
import { useDropzone } from 'react-dropzone';
import { SmallWhiteSpinner } from '../Spinner';
import { CLEAR_ERRORS } from '../../store/constants/errorConstants';
import { updateProduct } from '../../store/actions/productActions';
import Link from 'next/link';

const EditProductForm = ({ productDetails }) => {
   const router = useRouter();
   const dispatch = useDispatch();

   const [name, setName] = useState(productDetails?.name || '');
   const [price, setPrice] = useState(productDetails?.price || '');
   const [description, setDescription] = useState(
      productDetails?.description || ''
   );
   const [brand, setBrand] = useState(productDetails?.brand || '');
   const [category, setCategory] = useState(productDetails?.category || 'all');
   const [productImage, setProductImage] = useState(
      productDetails?.productImage ||
         'https://thumbs.dreamstime.com/b/simple-vector-red-scratch-rubber-stamp-sample-transparent-effect-background-155834864.jpg'
   );

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   const updateProductState = useSelector((state) => state.updateProduct);
   const { loading, success } = updateProductState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      if (!user) {
         router.push('/login');
      }
   }, [dispatch, user, router]);

   useEffect(() => {
      dispatch({ type: CLEAR_ERRORS });
   }, [dispatch]);

   const onDrop = useCallback((acceptedFiles) => {
      acceptedFiles.forEach((file) => {
         const reader = new FileReader();

         reader.readAsDataURL(file);
         reader.onload = () => {
            const binaryStr = reader.result;

            setProductImage(binaryStr);
         };
      });
   }, []);

   const handleSubmit = (e) => {
      e.preventDefault();

      const details = {
         name,
         price,
         description,
         brand: brand || 'S-Shop',
         productImage,
         category: category || 'all',
      };

      dispatch(updateProduct(details, productDetails?._id));
   };

   const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
   });

   return (
      <div className="edit-product-form">
         <div className="container">
            <div className="head py-1">
               <h4>S-Shop product: {productDetails?._id} </h4>
            </div>
            <div className="intro">
               <p className="lead">Edit a product</p>
            </div>
            <form onSubmit={handleSubmit}>
               <div>
                  <input
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     type="text"
                     placeholder="Name *"
                  />
               </div>
               <div>
                  <input
                     value={price}
                     onChange={(e) => setPrice(e.target.value)}
                     type="number"
                     placeholder="Price *"
                  />
               </div>
               <div>
                  <textarea
                     value={description}
                     onChange={(e) => setDescription(e.target.value)}
                     type="text"
                     placeholder="Product description"
                     name="description"
                     cols="30"
                     rows="10"
                  ></textarea>
               </div>
               <div>
                  <input
                     value={brand}
                     onChange={(e) => setBrand(e.target.value)}
                     type="text"
                     placeholder="Brand"
                  />
               </div>
               <div>
                  <select
                     value={category}
                     onChange={(e) => setCategory(e.target.value)}
                     name="variation"
                     id="varaition"
                  >
                     <option value="all">All</option>
                     <option value="shoes">Shoes</option>
                     <option value="clothes">clothes</option>
                     <option value="bags">bags</option>
                     <option value="food">food</option>
                     <option value="electronics">electronics</option>
                  </select>
               </div>
               <div>
                  <label>Product Image</label>
               </div>

               <div className="preview-file">
                  <>
                     <div>
                        <img src={productImage} alt="" />
                     </div>
                     <span className="btn btn-secondary m-0">
                        <label htmlFor="productImage">Change Image</label>
                     </span>
                     <span
                        onClick={() =>
                           setProductImage(
                              'https://thumbs.dreamstime.com/b/simple-vector-red-scratch-rubber-stamp-sample-transparent-effect-background-155834864.jpg'
                           )
                        }
                        className="btn btn-danger my-0"
                     >
                        Delete
                     </span>
                  </>
               </div>
               <div
                  {...getRootProps()}
                  className={isDragActive ? 'modal-active' : 'upload-modal'}
               >
                  <div>
                     <input id="productImage" {...getInputProps()} />
                  </div>

                  <small>Drap and drop or click to browse a file</small>
               </div>
               {success && (
                  <SuccessMessageBox msg="Product updated successfully! Click on the back button to go back" />
               )}
               {msg && <ErrorMessageBox msg={msg} />}

               <div>
                  <button className="btn btn-primary">
                     {loading ? <SmallWhiteSpinner /> : 'Update product'}
                  </button>
                  {success && (
                     <Link
                        href="/product/[id]"
                        as={`/product/${productDetails._id}`}
                     >
                        <button className="btn btn-secondary mx-1">
                           Go back to product
                        </button>
                     </Link>
                  )}
               </div>
            </form>
         </div>
      </div>
   );
};

export default EditProductForm;
