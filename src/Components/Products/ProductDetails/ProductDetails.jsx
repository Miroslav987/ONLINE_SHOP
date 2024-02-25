import {
  Alert,
  Box,
  Button,
  Paper,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { productContext } from "../../../context/ProductContextProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./ProductDetails.css";
import StarIcon from "@mui/icons-material/Star";
import SwiperCore, { Thumbs } from "swiper";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { AddShoppingCart } from "@mui/icons-material";
import { basketContext } from "../../../context/BasketContextProvider";
import { chosenContext } from "../../../context/ChosenContextProvider";
import { authContext } from "../../../context/AuthContextProvider";

import { commentcontext } from "../../../context/CommentContextProvider";
import {AddComment} from "../../Comments/AddComment";
import ProductsList from "../ProductsList/ProductsList";

SwiperCore.use([Thumbs]);

const ProductDetails = () => {
  const { id } = useParams();
  const { category } = useParams();
  const navigate = useNavigate();
  const { addProductToChosen } = useContext(chosenContext);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { readOneProduct, productDetails, deleteProduct } =
    useContext(productContext);
  const { addProductToBasket } = useContext(basketContext);
  const { user, handleLogout } = React.useContext(authContext);
  const [detCategory, setdetCategory] = useState(category);

  useEffect(() => {
    readOneProduct(id);
  }, [id]);


  
  return (
    <>
      {productDetails ? (
        <>

          <Box className="detailCard" id="detailCd" >
            <Box className="swiper" >
              <Swiper 
                className="slideSwiper"
                spaceBetween={10}
                slidesPerView={4}
                onSwiper={setThumbsSwiper}
                freeMode={true}
                watchSlidesProgress={true}>
                <SwiperSlide>
                    <img src={productDetails.img1} alt={productDetails.title} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={productDetails.img2} alt={productDetails.title} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={productDetails.img3} alt={productDetails.title} />
                </SwiperSlide>
              </Swiper>
                 
              <Swiper
              className="leadSwiper"
                thumbs={{ swiper: thumbsSwiper }}>
                <SwiperSlide>
                  <img src={productDetails.img1} alt={productDetails.title} />
                 
                </SwiperSlide>
                <SwiperSlide>
                  <img src={productDetails.img2} alt={productDetails.title} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={productDetails.img3} alt={productDetails.title} />
                </SwiperSlide>
              </Swiper>

              

            </Box>

            <Box className="detInfo">

              <Box className="detInfo_BoxOne">
                <Box>
                  <Typography variant="h4">{productDetails.title}</Typography>
                  <Typography variant="h5">{productDetails.model}</Typography>
                </Box>

                <Box>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ marginLeft: "20px" }}
                    onClick={() => addProductToBasket(productDetails)}>
                    <AddShoppingCart />
                  </Button>

                  <Button
                    variant="contained"
                    color="warning"
                    aria-label="add to favorites"
                    sx={{ marginLeft: "20px" }}
                    onClick={() => addProductToChosen(productDetails)}>
                    <StarIcon />  
                </Button>
              </Box>
            </Box>

                <br />
                <Typography className="detInfo_descript">Описание:  {productDetails.description}</Typography>

                <Box className="detInfo_BoxTwo">
                    <AttachMoneyIcon /><Typography>Цена: {productDetails.price} сом</Typography>
                  <Button  variant="contained" sx={{ marginLeft: "20px" }}>
                    Купить
                  </Button>
                 
                </Box>
                 
                {productDetails.user === user.email ? (
                  <Box
                    sx={{
                      mt: "15px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={
                        () => deleteProduct(productDetails.id)
                        // deleteComment(item.id)
                      }>
                      Delete
                    </Button>

                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() => navigate(`/edit/${productDetails.id}`)}>
                      Edit
                    </Button>
                  </Box>
                ) : null}
                

            </Box>
          </Box>
      <ProductsList nonefilter={"none"} detCategory={detCategory} />
       </> 
      ) : null}
     
     
    </>
  );
};

export default ProductDetails;
