import LoginForm from '../components/LoginpageComponents/LoginForm';
import BackBtn from '../components/BackBtn';

export default function Home() {
   return (
      <div className="login-page">
         <BackBtn to="/" />
         <LoginForm />
      </div>
   );
}
