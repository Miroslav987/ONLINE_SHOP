import {
  Button,
  Container,
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
import { basketContext } from "../../context/BasketContextProvider";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./Basket.css";

const Basket = () => {
  const {
    productsInBasket,
    getBasket,
    changeProductCount,
    deleteBasketProduct,
  } = useContext(basketContext);

  useEffect(() => {
    getBasket();
  }, []);

  return (
    <>
      <Container sx={{ position: "relative" }} maxWidth="lg">
        <Typography sx={{ color: "white", margin: "15px auto" }} variant="h3">
          My Basket
        </Typography>
        {productsInBasket ? (
          <>
            <TableContainer id="basket" component={Paper}>
              <Table sx={{ minWidth: 650, background: "none", color: "white" }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold", color: "white" }}>
                      Title
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", color: "white" }}>
                      Model
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", color: "white" }}>
                      Image
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", color: "white" }}>
                      Price
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", color: "white" }}>
                      Count
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold", color: "white" }}>
                      SubPrice
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {productsInBasket.products.map(elem => (
                    <TableRow key={elem.item.id}>
                      <TableCell sx={{ color: "white" }}>
                        {elem.item.title}
                      </TableCell>
                      <TableCell sx={{ color: "white" }}>
                        {elem.item.model}
                      </TableCell>
                      <TableCell>
                        <img src={elem.item.img1} alt="apple" width={40} />
                      </TableCell>
                      <TableCell sx={{ color: "white" }}>
                        {elem.item.price}
                      </TableCell>
                      <TableCell>
                        <input
                          min="1"
                          type="number"
                          style={{
                            color: "white",
                            background: "none",
                            width: "40px",
                            border: "none",
                          }}
                          value={elem.count}
                          onChange={e =>
                            changeProductCount(elem.item.id, e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell sx={{ color: "white" }}>
                        {elem.subPrice} сом
                      </TableCell>
                      <TableCell
                        sx={{ color: "white" }}
                        onClick={() => deleteBasketProduct(elem.item.id)}>
                        <DeleteForeverIcon className="deleteIconBasket" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button
              variant="contained"
              sx={{ background: "black", margin: "20px auto" }}>
              Buy now for {productsInBasket.totalPrice}
            </Button>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </Container>
    </>
  );
};

export default Basket;
