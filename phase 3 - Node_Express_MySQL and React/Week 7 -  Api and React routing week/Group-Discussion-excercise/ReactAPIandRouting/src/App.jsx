import "./commonResource/css/styles.css";
import "./commonResource/css/bootstrap.css";
import Main from "./Pages/Main/Main";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./Pages/SharedLayout/SharedLayout";
import Iphones from "./Pages/Iphone/Iphone";
import SingleAppleProduct from "./Pages/SingleAppleProduct/SingleAppleProduct";
import PageNotFound from './Pages/PageNotFound/PageNotFound'
import YoutubeVideos from "./components/YoutubeVideos/YoutubeVideos";

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<SharedLayout />}> 
            
                  <Route path="/" element={<Main />} />

                  <Route path="/iphones" element={<Iphones />} />
             
                  <Route path="iphones/:productUrl" element={<SingleAppleProduct />} />

                  {/* youtube videos */}
                <Route path="/" element={<YoutubeVideos />} />

                  <Route path="*" element={<PageNotFound />} />

            </Route>     
          </Routes>
        
        </Router>      
     

    </>
  );
}

export default App;
