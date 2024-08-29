import "./commonResource/css/styles.css";
import "./commonResource/css/bootstrap.css";
import Main from "./Pages/Main/Main";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Iphones from "./Pages/Iphone/Iphone";
import SingleAppleProduct from "./Pages/SingleAppleProduct/SingleAppleProduct";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>

            {/* this is one way to show two components one after the other - without putting the youtube videos component in main.jsx file */}
              {/* <Route path="/" element={<><Main /> <YoutubeVideos /> </>} /> */}
            
            {/* and we can also nest the youtube video component in the main component and call main as shown below */}
            <Route path="/" element={<Main />} />       

              <Route path="/iphones" element={<Iphones />} />

              <Route path="iphones/:productUrl_Param" element={<SingleAppleProduct />} />
              
              <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
