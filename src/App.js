import Header from './UI/Header';
import HeaderMobile from './UI/HeaderMobile'
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Portfolio from './Components/Portfolio'
import ContactUs from './Components/ContactUs';
import Footer from './UI/Footer';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import classes from './App.module.css';

function RenderHeader() {
  if(window.innerWidth <= 820) {
    return <HeaderMobile />
  }
  return <Header />
}


function App() {
  return (
    <div className={classes.app}>
       <BrowserRouter>

        {window.onresize =  <RenderHeader />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contactus" element={<ContactUs />} />
          </Routes>
       </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
