import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
// import Header from './components/pages/Header';
// import Footer from './components/pages/Footer';
import SharedLayout from './components/pages/SharedLayout'

import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Blog from './components/pages/Blog';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';

function App() {
  return (
    <Router>

      <div className="App">
        {/* <SharedLayout> */}

          <Routes>
                  <Route path="/" element={<SharedLayout />}>      
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    {/* for non-existing Routes */}
                    <Route path="*" element={<h2 className='errorPage'>404 Page Not Found</h2>} />   
             </Route>
          </Routes>

          {/* </SharedLayout> */}


        {/* </SharedLayout> */}
      </div>
    </Router>
  );
}

export default App;
