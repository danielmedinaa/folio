import AboutUs from './HomePage/aboutUs'
import Folio from './HomePage/folio';
import KnowLedge from './HomePage/knowLedge';
import Floaticon from './layouts/floaticon';
import Contact from './HomePage/contact';
import NavBar from './HomePage/navBar';
import HeaderComponent from './HomePage/header';
// import botModal from './layouts/botModal';

function HomePage() {
    return (
        
        <div>
            <NavBar/>
            <HeaderComponent/>
            <AboutUs/>
            <Folio/>
            <KnowLedge/>
            <Floaticon/>
            <Contact/>
        </div>
    )
}

export default HomePage;