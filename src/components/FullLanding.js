import LandingPage from '../components/LandingPage';
import Infoplacard from '../components/Infoplacard';
import Infoplacard2 from '../components/Infoplacard2';
import Infoplacard3 from '../components/Infoplacard3';
import Faqs from '../components/Faqs';
import Bottomnav from '../components/Bottomnav';

function FullLanding(){
  return(
    <>
    <LandingPage/>
    <Infoplacard/>
    <Infoplacard2/>
    <Infoplacard3/>
    <Faqs/>
    <Bottomnav/>
    </>
  );
}
export default FullLanding;