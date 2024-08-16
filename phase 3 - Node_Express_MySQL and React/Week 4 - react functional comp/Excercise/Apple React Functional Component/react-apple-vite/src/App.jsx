import Header from "./components/Header";
import Footer from "./components/Footer";
// import Sections from './components/Sections'; // this holds all the section contents all in one
import AlertSection from "./components/AlertSection";
import FirstHighlight from './components/FirstHighlight'
import SecondHighlight from './components/SecondHighlight'
import ThirdHighlight from './components/ThirdHighlight'
import FourthHighlight from './components/FourthHighlight'
import FifthHighlight from './components/FifthHighlight'
import SixthHighlight from './components/SixthHighlight'


import "./commonResource/css/styles.css";
import "./commonResource/css/bootstrap.css";

function App() {
  return (
    <>
      <Header />
      <AlertSection/>
      <FirstHighlight/>
      <SecondHighlight/>
      <ThirdHighlight/>
      <FourthHighlight/>
      <FifthHighlight/>
      <SixthHighlight/>
      
      {/* <Sections /> */}
      <Footer />
    </>
  );
}

export default App;
