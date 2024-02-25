import { CardMedia, Container, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./HomePage.css";
const HomePage = () => {
  return (
    <>
      <div className="textBG">
        <Typography
          className="tr"
          style={{ marginTop: "50px", fontSize: "50px", position: "relative" }}>
          Добро пожаловать на OnlineShop
        </Typography>
        <Typography
          className="tr"
          style={{ marginTop: "50px", fontSize: "20px", position: "relative" }}>
           Зарегистрируйтесь  после чего войдите , чтобы расширить возможности в этом сайте . Вы сможете :добавлять и изменять свои продукты , а так же добавлять комментарии к другим продуктам. Если не желаете использовать свою почту можете воспользоваться этим аккаунтами
           
        </Typography>
        <Typography className="tr">
           <br />
           email: people2@gmail
           <br />
           password: 654321
           <br />
           или
            <br />
           email: people2@gmail
           <br />
           password: 123456
        </Typography>
      </div>
    </>
  );
};

export default HomePage;
