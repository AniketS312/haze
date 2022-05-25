import Header from './UI/Header';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Portfolio from './Components/Portfolio'
import ContactUs from './Components/ContactUs';
import Footer from './UI/Footer';

import classes from './App.module.css';

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
