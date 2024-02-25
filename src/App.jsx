import zIndex from "@mui/material/styles/zIndex";
import React from "react";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import AuthContextProvider from "./context/AuthContextProvider";
import BasketContextProvider from "./context/BasketContextProvider";
import ChosenContextProvider from "./context/ChosenContextProvider";
import CommentContextProvider from "./context/CommentContextProvider";
import ProductContextProvider from "./context/ProductContextProvider";
import MainRoutes from "./MainRoutes";
import video from "./video/Video3.mp4";
import photo from "./media/photo.webp";
const App = () => {
  return (
    <CommentContextProvider>
      <AuthContextProvider>
        <ChosenContextProvider>
          <BasketContextProvider>
            <ProductContextProvider>
              {/* <video className="videobg" playbackRate={2} video autoPlay muted loop>
                <source src={video} type="video/mp4" />
              </video> */}
              <img className="videobg" src="https://www.ceramichall.md/uploads/products/K944012R.jpg" alt="" />
              <NavBar style={{ position: "relative" }} />

              <MainRoutes style={{ position: "relative" }} />

              <Footer style={{ position: "relative", bottom: 0 }} />
            </ProductContextProvider>
          </BasketContextProvider>
        </ChosenContextProvider>
      </AuthContextProvider>
    </CommentContextProvider>
  );
};

export default App;
