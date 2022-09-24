import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../../store/actions/productActions';
import { CREATE_PRODUCT_RESET } from '../../store/constants/productConstants';
import { ErrorMessageBox, SuccessMessageBox } from '../MessageBox';
import { SmallWhiteSpinner } from '../Spinner';

const CreateProductForm = () => {
   const router = useRouter();
   const dispatch = useDispatch();

   const [name, setName] = useState('');
   const [price, setPrice] = useState('');
   const [description, setDescription] = useState('');
   const [brand, setBrand] = useState('');
   const [category, setCategory] = useState('all');
   const [productImage, setProductImage] = useState(
      'https://thumbs.dreamstime.com/b/simple-vector-red-scratch-rubber-stamp-sample-transparent-effect-background-155834864.jpg'
   );

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   const createProductState = useSelector((state) => state.createProduct);
   const { loading, success } = createProductState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      dispatch({ type: CREATE_PRODUCT_RESET });
   }, [dispatch]);

   useEffect(() => {
      setBrand(user?.brandName);

      if (!user) {
         router.push('/login?redirect=createproduct');
      }
   }, [user, router]);

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

   const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
   });

   const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(
         createProduct({
            name,
            price,
            description,
            brand: brand || 'S-Shop',
            category: category || 'all',
            productImage,
         })
      );
   };

   return (
      <div className="create-product-form section">
         <div className="container">
            <div className="head py-1">
               <h4>S-Shop product</h4>
            </div>
            <div className="intro">
               <p className="lead">Create a product now</p>
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
                     <option value="bags">bags</option>
                     <option value="cap">cap</option>
                     <option value="clothes">clothes</option>
                     <option value="frangrance">frangrance</option>
                     <option value="glasses">glasses</option>
                     <option value="hair accessory">jewerly</option>
                     <option value="smart phone">
                        smart phone and accessory
                     </option>
                     <option value="skin and hair care">
                        skin and hair care
                     </option>
                     <option value="shoes">shoes</option>
                     <option value="watches">watches</option>
                     <option value="wallpaper">wallpaper</option>
                     <option value="all">others</option>
                  </select>
               </div>
               <div>
                  <label>Product Image</label>
               </div>

               <div className="preview-file">
                  {productImage && (
                     <>
                        <div>
                           <img src={productImage} alt="" />
                        </div>
                        <span className="btn btn-secondary m-0">
                           <label htmlFor="productImage">Change Image</label>
                        </span>
                        <span
                           onClick={() => setProductImage(null)}
                           className="btn btn-danger my-0"
                        >
                           Delete
                        </span>
                     </>
                  )}
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
                  <SuccessMessageBox msg="Product created successfully! Click on the back button" />
               )}
               {msg && <ErrorMessageBox msg={msg} />}
               <div>
                  <button className="btn btn-primary">
                     {' '}
                     {loading ? <SmallWhiteSpinner /> : 'Create product'}{' '}
                  </button>
                  {success && (
                     <Link href="/allproducts">
                        <button className="btn btn-secondary mx-1">
                           Go back
                        </button>
                     </Link>
                  )}
               </div>
            </form>
         </div>
      </div>
   );
};

export default CreateProductForm;
