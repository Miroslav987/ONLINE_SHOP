import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { chosenContext } from "../../context/ChosenContextProvider";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CardActions from "@mui/material/CardActions";
import "./Chosen.css";
const Chosen = () => {
  // productsInChosen.products.map(elem => {
  //   let background = elem.item.color;
  //   let style = {
  //     background,
  //   };
  //   console.log(style);
  // });

  const {
    productsInChosen,
    getChosen,
    changeProductCount,
    deleteChosenProduct,
  } = useContext(chosenContext);

  useEffect(() => {
    getChosen();
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Typography
          sx={{ color: "white", margin: "15px auto", position: "relative" }}
          variant="h3">
          My Chosen
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start"
          flexWrap="wrap"
          sx={{ width: "90%" }}
          mx="auto"
          my="40px">
          {productsInChosen ? (
            <>
              {productsInChosen.products.map(elem => (
                <Card
                  className="card"
                  sx={{
                    position: "relative",
                    zIndex: 0,
                    background: "#414141a3",
                    borderRadius: 5,
                    boxShadow: "0px 0px 32px -10px #00ff0b",
                  }}>
                  <Link to={`/details/${elem.item.id}`}>
                    <CardHeader
                      className="stcolor"
                      variant="h5"
                      title={elem.item.category.toUpperCase()}
                    />

                    <CardMedia
                      component="img"
                      className="cardImg"
                      image={elem.item.img1}
                      alt={elem.item.title}
                    />

                    <CardContent>
                      <Typography
                        className="stcolor"
                        variant="h5"
                        style={{ marginBottom: 10 }}>
                        {elem.item.title} {elem.item.model}
                      </Typography>

                      <Typography variant="h5" className="cardText">
                        {elem.item.price} сом
                      </Typography>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </>
          ) : (
            <h1>Loading...</h1>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Chosen;
