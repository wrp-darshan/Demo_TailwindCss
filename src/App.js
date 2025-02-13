import './App.css';
import Footer from './Components/Common/Footer/footer';
import Header from './Components/Common/Header/index';
import Scrolltotop from './Components/Common/ScrollToTop/scrolltotop';
import AboutUs from './Components/Pages/AboutUs/aboutus';
import Brandlogo from './Components/Pages/BrandLogo/brandlogo';
import Clientreview from './Components/Pages/ClientReview/clientreview';
import Companyinfo from './Components/Pages/CompanyInfo/companyinfo';
import Companyslider from './Components/Pages/CompanySlider/companyslider';
import Fullscreenvedio from './Components/Pages/FullScreenVideo/fullvideo';
import Hero from './Components/Pages/Hero/hero';
import Latestwork from './Components/Pages/LatestWork/latestwork';
import Mailsubscription from './Components/Pages/MailSubscription/mailsubscription';
import Newsandblog from './Components/Pages/News/news';
import Services from './Components/Pages/Services/services';
import Teammembers from './Components/Pages/TeamMembers/teammembers';

function App() {
  return (
    <>
    <Header/>
    <Hero />
    <Services/>
    <AboutUs/>
    <Companyinfo/>
    <Latestwork/>
    <Fullscreenvedio/>
    <Clientreview/>
    <Mailsubscription/>
    <Teammembers/>
    <Companyslider/>
    <Newsandblog/>
    <Brandlogo/>
    <Footer/>
    <Scrolltotop/>
    </>
  );
}

export default App;
