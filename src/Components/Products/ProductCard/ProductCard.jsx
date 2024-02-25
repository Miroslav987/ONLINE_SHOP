import React, { useContext, useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import "./ProductCard.css";
import { Link, NavLink, Navigate, useNavigate, useParams } from "react-router-dom";

// import { chosenContext } from "../../../context/ChosenContextProvider";
import { productContext } from "../../../context/ProductContextProvider";
import { useState} from "react";
import { chosenContext } from "../../../context/ChosenContextProvider";

const ProductCard = ({ obj }) => {
  const { addProductToChosen } = useContext(chosenContext);
  const { productDetails } = useContext(productContext);
  const navigate = useNavigate();
  

  
  function linkScroll() {
    setTimeout(()=>{
      let detailCd = document.getElementById("detailCd")
      detailCd.scrollIntoView( {behavior: "smooth", block: "end"});
    },1)
   }
  let background = obj.color;
  let style = {
    background,
  };
  
  return (
    <div className="block"  >

      <Card
        className="card "
        sx={{
          position: "relative" 
        }}
        onClick={()=>linkScroll()}
        >
          
        <NavLink  to={`/details/${obj.id}/${obj.category}#detailCd`}>
          
          <CardHeader className="stcolor" title={obj.category.toUpperCase()} />

          <CardMedia
            className="cardImg"
            component="img"
            image={obj.img1}
            alt={obj.title}
          />

          <CardContent>
            <Typography
              className="stcolor"
              variant="h5"
              style={{ marginBottom: 10 }}>
              {obj.title} {obj.model}
            </Typography>
            <div
              style={{
                marginBottom:10,
                height: 50,
                display: "flex",
                alignItems: "center",
              }}>
              <h2 className="stcolor">color:</h2>
              <div className="block1" style={style}></div>
            </div>
            <Typography variant="h5" className="cardText">
              {obj.price} сом
            </Typography>
            {/* <IconButton
              aria-label="add to favorites"
              sx={{ marginLeft: "20px" }}
              onClick={() => addProductToChosen(productDetails)}>
              <StarIcon />
            </IconButton> */}
          </CardContent>
        </NavLink>
      </Card>
    </div>
  );
};

export default ProductCard;
