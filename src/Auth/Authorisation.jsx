import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthContextProvider";



const theme = createTheme();

export default function Authorization() {
  const {
    email,
    user,
    password,
    emailError,
    passwordError,
    hasAccount,
    setEmail,
    setPassword,
    setHasAccount,

    handleLogin,
    handleLogout,
    handleSignUp,
  } = useContext(authContext);

  const handleAuth = (e) => {
    e.preventDefault();
    if(password.length <= 5){
      alert("пароль должен содержать не менее 6 чисел")
      return;
    }
    hasAccount ? handleLogin() : handleSignUp()
  }


  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          margin: "10px auto",
          borderRadius: "5px",
          background: " rgb(242 242 242 / 85%)",
          border: " 5px solid rgb(218 218 218 / 69%)",
          position: "relative",
        }}
        component="main"
        maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            position: "relative",
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          {hasAccount ? (
            <Typography
              sx={{ position: "relative" }}
              component="h1"
              variant="h5">
              Войти
            </Typography>

          ) : (
            <Typography
              sx={{ position: "relative" }}
              component="h1"
              variant="h5">
              Зарегистрироваться
            </Typography>
          )}

          <Box component="form" onSubmit={handleAuth} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="number"
              id="password"
              autoComplete="current-password"
            />
            <span>{passwordError}</span>
            <span>{emailError}</span>
            {hasAccount ? (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, position: "relative" }}
                // onClick={signIn}
                >
                Войти
              </Button>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, position: "relative" }}
                // onClick={logout}
                >
                Зарегистрироваться
              </Button>
            )}

            <Grid container>
              <Grid item>
                {hasAccount ? (
                  <Link
                    onClick={() => setHasAccount(!hasAccount)}
                   
                    variant="body2"
                    sx={{ position: "relative" }}>
                    {"Зарегистрироваться "}
                  </Link>
                ) : (
                  <Link
                    onClick={() => setHasAccount(!hasAccount)}
                    
                    variant="body2"
                    sx={{ position: "relative" }}>
                    {"Войти"}
                  </Link>
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>
        <br />
      </Container>
    </ThemeProvider>
  );
}
