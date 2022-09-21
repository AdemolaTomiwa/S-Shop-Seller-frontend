import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { clearErrors } from '../../store/actions/errorActions';
import { resetPassword } from '../../store/actions/userActions';
import { ErrorMessageBox, SuccessMessageBox } from '../MessageBox';
import { SmallWhiteSpinner, PrimarySpinner } from '../Spinner';
import { useRouter } from 'next/router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { server } from '../../config/server';

const ResetPasswordForm = () => {
   const router = useRouter();
   const dispatch = useDispatch();

   const url = `${server}/api/password-reset/${router.query.id}/${router.query.token}`;

   const [validUrl, setValidUrl] = useState(true);
   const [loadingUrl, setLoadingUrl] = useState(false);
   const [password, setPassword] = useState('');
   const [showPassword, setShowPassword] = useState(false);

   const resetPasswordState = useSelector((state) => state.resetPassword);
   const { loading, success } = resetPasswordState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      dispatch(clearErrors());
      setLoadingUrl(true);
      const verifyUrl = async () => {
         try {
            await axios.get(url);
            setValidUrl(true);
            setLoadingUrl(false);
         } catch (error) {
            setValidUrl(false);
            setLoadingUrl(false);
         }
      };

      verifyUrl();
   }, [router, url, dispatch]);

   const handleSubmit = async (e) => {
      e.preventDefault();

      dispatch(resetPassword(url, { password }));
   };

   return loadingUrl ? (
      <PrimarySpinner />
   ) : validUrl ? (
      <div className="reset-password-form section">
         <div className="container">
            <div className="head py-1">
               <h4>S-SHOP Seller</h4>
            </div>
            <div className="intro">
               <p className="lead">Reset your S-SHOP seller account password</p>
            </div>
            <form onSubmit={handleSubmit}>
               <div className="password">
                  <input
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     type={showPassword ? 'text' : 'password'}
                     placeholder="Password"
                  />
                  <span onClick={() => setShowPassword(!showPassword)}>
                     {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
               </div>
               {msg && <ErrorMessageBox msg={msg} />}
               {success && <SuccessMessageBox msg={success} />}
               <div>
                  <button className="btn btn-primary">
                     {loading ? <SmallWhiteSpinner /> : 'Update'}{' '}
                  </button>
                  {success && (
                     <Link href="/login">
                        <div>
                           <button className="btn btn-secondary my-1">
                              Login now with your new password
                           </button>
                        </div>
                     </Link>
                  )}
               </div>
            </form>
         </div>
      </div>
   ) : (
      <div className="page">
         <div className="container">
            <h2>404 - Link is broken or expired</h2>
            <Link href="/login">
               <button className="btn btn-secondary">Go back login page</button>
            </Link>
         </div>
      </div>
   );
};

export default ResetPasswordForm;
