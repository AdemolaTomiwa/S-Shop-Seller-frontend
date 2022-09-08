import FrequentlyAskedQuestions from '../components/HomepageComponents/FrequentlyAskedQuestions';
import HomeShowcase from '../components/HomepageComponents/HomeShowcase';
import LearnBasics from '../components/HomepageComponents/LearnBasics';

const index = () => {
   return (
      <div className="home-page">
         <HomeShowcase />
         <LearnBasics />
         <FrequentlyAskedQuestions />
      </div>
   );
};

export default index;
