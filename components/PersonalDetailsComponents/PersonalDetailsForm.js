import Link from 'next/link';
import { useDropzone } from 'react-dropzone';
import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { SmallWhiteSpinner } from '../Spinner';
import { updateUser } from '../../store/actions/userActions';
import { ErrorMessageBox, SuccessMessageBox } from '../MessageBox';
import { UPDATE_USER_DETAILS_RESET } from '../../store/constants/userConstants';

const PersonalDetailsForm = () => {
   const router = useRouter();
   const dispatch = useDispatch();

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   const updateState = useSelector((state) => state.update);
   const { success, loading } = updateState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   const [firstName, setFirstName] = useState(user ? user.firstName : '');
   const [lastName, setLastName] = useState(user ? user.lastName : '');
   const [email] = useState(user ? user.email : '');
   const [phoneNumber, setPhoneNumber] = useState(user ? user.phoneNumber : '');
   const [brandName, setBrandName] = useState(user ? user.brandName : '');
   const [brandLogo, setBrandLogo] = useState(
      'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
   );
   const [accountNumber, setAccountNumber] = useState(
      user ? user.accountNumber : ''
   );
   const [bankName, setBankName] = useState(user ? user.bankName : '');
   const [nameOfAccountHolder, setNameOfAccountHolder] = useState(
      user ? user.nameOfAccountHolder : ''
   );

   useEffect(() => {
      if (user) {
         setBrandLogo(user?.brandLogo);
      } else {
         router.push('/login?redirect=personaldetails');
      }
   }, [user, router]);

   useEffect(() => {
      dispatch({ type: UPDATE_USER_DETAILS_RESET });
   }, [dispatch]);

   const onDrop = useCallback((acceptedFiles) => {
      acceptedFiles.forEach((file) => {
         const reader = new FileReader();

         reader.readAsDataURL(file);
         reader.onload = () => {
            const binaryStr = reader.result;

            setBrandLogo(binaryStr);
         };
      });
   }, []);

   const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
   });

   const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(
         updateUser({
            firstName,
            lastName,
            email,
            phoneNumber,
            brandLogo,
            brandName,
            accountNumber,
            bankName: bankName || user.bankName,
            nameOfAccountHolder,
         })
      );
   };

   return (
      <div className="personal-details-form section">
         <div className="container">
            <div className="wrapper">
               <form onSubmit={handleSubmit}>
                  <div className="links-tags">
                     <h6 className="py-1">
                        <Link href="/">
                           <span>S-Shop Seller</span>
                        </Link>{' '}
                        &gt;{' '}
                        <Link href={`/dashboard`}>
                           <span>Dashboard</span>
                        </Link>{' '}
                        &gt;{' '}
                        <Link href={`/personaldetails`}>
                           <span>Personal Details</span>
                        </Link>{' '}
                     </h6>
                  </div>
                  <section className="box section">
                     <h6>Personal Information</h6>
                     <div>
                        <input
                           type="text"
                           value={firstName}
                           onChange={(e) => setFirstName(e.target.value)}
                           placeholder="First name *"
                        />
                     </div>
                     <div>
                        <input
                           type="text"
                           value={lastName}
                           onChange={(e) => setLastName(e.target.value)}
                           placeholder="Last name *"
                        />
                     </div>
                     <div>
                        <input
                           type="email"
                           disabled
                           value={email}
                           placeholder="Email *"
                        />
                     </div>
                     <div>
                        <input
                           value={phoneNumber}
                           onChange={(e) => setPhoneNumber(e.target.value)}
                           type="number"
                           placeholder="Phone number *"
                        />
                     </div>
                  </section>
                  <section className="box section">
                     <h6>Brand information</h6>
                     <div>
                        <input
                           type="text"
                           value={brandName}
                           onChange={(e) => setBrandName(e.target.value)}
                           placeholder="Brand name"
                        />
                     </div>
                     <div>
                        <label>Brand logo (Optional)</label>
                     </div>

                     <div className="preview-file">
                        {brandLogo && (
                           <>
                              <div>
                                 <img src={brandLogo} alt="" />
                              </div>
                              <span className="btn btn-secondary m-0">
                                 <label htmlFor="logo">Change logo</label>
                              </span>
                              <span
                                 onClick={() =>
                                    setBrandLogo(
                                       'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
                                    )
                                 }
                                 className="btn btn-danger m-0"
                              >
                                 Delete
                              </span>
                           </>
                        )}
                     </div>
                     <div
                        {...getRootProps()}
                        className={
                           isDragActive ? 'modal-active' : 'upload-modal'
                        }
                     >
                        <div>
                           <input id="logo" {...getInputProps()} />
                        </div>

                        <small>Drap and drop or click to browse a file</small>
                     </div>
                  </section>
                  <section className="section box">
                     <h6>Payment information</h6>
                     <div>
                        <input
                           type="number"
                           value={accountNumber}
                           onChange={(e) => setAccountNumber(e.target.value)}
                           placeholder="Account number *"
                        />
                     </div>
                     <div>
                        <select
                           value={bankName}
                           onChange={(e) => setBankName(e.target.value)}
                           name="bankName"
                           id="bankName"
                        >
                           <option value="">Select bank</option>
                           <option value="Access bank">Access Bank</option>
                           <option value="United bank of africa">
                              United bank of africa
                           </option>
                           <option value="First bank">first bank</option>
                           <option value="Zenith bank">Zenith bank</option>
                           <option value="Polaris bank">Polaris bank</option>
                        </select>
                     </div>
                     <div>
                        <input
                           type="text"
                           value={nameOfAccountHolder}
                           onChange={(e) =>
                              setNameOfAccountHolder(e.target.value)
                           }
                           placeholder="Name of account holder *"
                        />
                     </div>
                  </section>
                  {success && (
                     <SuccessMessageBox msg="Profile updated successfully! Click on the back button" />
                  )}
                  {msg && <ErrorMessageBox msg={msg} />}
                  <div>
                     <button className="btn btn-primary">
                        {loading ? <SmallWhiteSpinner /> : 'Update'}{' '}
                     </button>
                     {success && (
                        <Link href="/dashboard">
                           <button className="btn btn-secondary mx-1">
                              Go back to dashboard
                           </button>
                        </Link>
                     )}
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default PersonalDetailsForm;
