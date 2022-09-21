import BackBtn from '../components/BackBtn';
import PersonalDetailsForm from '../components/PersonalDetailsComponents/PersonalDetailsForm';
import SellerNotification from '../components/SellerNotification';

const personaldetails = () => {
   return (
      <div className="personal-details-page">
         <SellerNotification />
         <BackBtn to="/dashboard" />
         <PersonalDetailsForm />
         <SellerNotification />
      </div>
   );
};

export default personaldetails;
