import { Box, Grid, Pagination, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { productContext } from "../../../context/ProductContextProvider";
import Filter from "../../Filter/Filter";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

const ProductsList = ({nonefilter ,detCategory }) => {
  const { productsArr, readProduct} = useContext(productContext);
  const [paramsSearch, setParamsSearch] = useSearchParams();

  const [category, setCategory] = useState(!detCategory? "all": detCategory);
  const [price, setPrice] = useState([0, 100000]);
  const [firstCount, setfirstCount] = useState(0);
  const [endCount, setendCount] = useState(2);

  useEffect(() => {
    if (category  === "all" ) {
      setParamsSearch({
        price_gte: price[0],
        price_lte: price[1],
        q: paramsSearch.get("q") || "", // null || ""
      });
    } 
    else {
      setParamsSearch({
        category: category,
        price_gte: price[0],
        price_lte: price[1],
      });
    }
  }, [paramsSearch, category,price]);

useEffect(() => {
    readProduct();
  }, [paramsSearch, ]);

// function pagination(value) {
//   setfirstCount(value)
//   setendCount(value+2)
// }



  const product = productsArr ? productsArr.slice(firstCount, endCount + 1)
  .map(products => 

   <Grid item={true} xs={3.5} mb={7} key={products.id}>
     <ProductCard obj={products} />
  </Grid> 

  ):null
  
 
  return (
    <>
      <Grid sx={{ width: "50%", margin: "10px auto" }}>
        <Box sx={{display:nonefilter}}>
        <Filter
        
          category={category}
          setCategory={setCategory}
          price={price}
          setPrice={setPrice}
        />
        </Box>
      </Grid>
      <Grid
        id="prodCard"
        container
        justifyContent="space-around"
        sx={{ width: "90%" }}
        mx="auto"
        my="40px">
        {/* {productsArr
          ? productsArr.map(item => (
              <Grid item={true} xs={3.5} mb={7} key={item.id}>
                <ProductCard obj={item} />
              </Grid>
            ))
          : null} */}
        {product}

      </Grid>
      <Grid
        sx={{
          color: "white",
          width: "30%",
          display: "flex",
          justifyContent: "center",
        }}
        mx="auto"
        my="20px"
        >

      {productsArr? 
        <Pagination
          count={productsArr.length-1}
          page={firstCount+1}
          onChange={(e, value) => (setfirstCount(value-1), setendCount(value+1))}
        />
      :null}

      </Grid>
    </>
  );
};

export default ProductsList;
