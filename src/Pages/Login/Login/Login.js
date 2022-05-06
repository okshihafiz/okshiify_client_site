import { Facebook } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { Google, Twitter } from "@mui/icons-material";
import { Button, Container, Grid, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import clsx from "clsx";
import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";

const Login = () => {
  //Location & navigate
  const location = useLocation();
  const navigate = useNavigate();
  const { loginWithGoogle } = useAuth();
  const theme = useTheme();

  const useStyles = makeStyles({
    root: {
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflowX: "hidden",
    },
    customBox: {
      width: "50%",
      border: "1px solid #E1E1E1",
      background: "#F6FAFE",
    },
    boxHeader: {
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid #E1E1E1",
      marginTop: "10px",

      // background:'#232F3E'
    },
    providerBox: {
      borderBottom: "1px solid #C2C9BC",
      padding: "14px 6px",
      background: "#F6FAFE",
    },
    providerSign: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      marginLeft: "14px",
      marginBottom: "10px",
      background: "#131921",
    },

    registerBox: {
      padding: "14px 10px",
    },

    loginForm: {
      width: "100%",
    },
    loginInput: {
      width: "100%",
      padding: "6px 14px",
      fontSize: "14px",
    },
    submitBtn: {
      marginTop: "40px",
      padding: "11px 22px",
      background: "#131921",
      border: "none",
      color: "#F7A819",
      fontWeight: "600",
      transition: "all 0.4s ease",
      borderRadius: "2px",
      fontSize: "16px",

      "&:hover": {
        background: "#0a0d11",
        cursor: "pointer",
      },
    },

    greetingText: {
      margin: "16px 10px",
    },

    responsiveBox: {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginTop: "50px",
      },
    },

    signInContainer: {
      [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
      },
    },
  });

  const classes = useStyles();

  //REACT HOOK FORM

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // console.log(watch("example"));
  //handle google login
  const handleGoogleLogin = () => {
    loginWithGoogle(location, navigate);
  };

  return (
    <Container>
      <Box className={classes.root}>
        <Box className={clsx(classes.customBox, classes.responsiveBox)}>
          {/* Header Box  */}
          <Box className={classes.boxHeader}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{ color: "#131921", marginLeft: "12px" }}
                  className={classes.typography}
                  variant="h6"
                  gutterBottom
                >
                  Sign in
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <NavLink
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/register"
                >
                  <Button
                    style={{ textTransform: "capitalize", color: "#131921" }}
                    variant="text"
                  >
                    Don't have an account ? Register now
                  </Button>
                </NavLink>
              </Grid>
            </Grid>
          </Box>

          {/* Provider Box */}
          <Box className={classes.providerBox}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box className={classes.greetingText}>
                  <Typography
                    sx={{ color: "#000", fontWeight: "500" }}
                    variant="subtitle1"
                    display="block"
                    gutterBottom
                  >
                    We recommend
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    Happy! shopping and deal with us
                  </Typography>
                </Box>
                <Box
                  className={clsx(
                    classes.providerSign,
                    classes.signInContainer
                  )}
                >
                  <Facebook
                    style={{
                      marginRight: "10px",
                      color: "#EF9415",
                      marginLeft: "10px",
                    }}
                  />
                  <Button
                    style={{
                      textTransform: "capitalize",
                      color: "#EF9415",
                      height: "35px",
                    }}
                    variant="text"
                  >
                    Sign in Facebook
                  </Button>
                </Box>

                <Box
                  className={clsx(
                    classes.providerSign,
                    classes.signInContainer
                  )}
                >
                  <Twitter
                    style={{
                      marginRight: "10px",
                      color: "#EF9415",
                      marginLeft: "10px",
                    }}
                  />
                  <Button
                    style={{
                      textTransform: "capitalize",
                      color: "#EF9415",
                      height: "35px",
                    }}
                    variant="text"
                  >
                    Sign in by Twitter
                  </Button>
                </Box>

                <Box
                  className={clsx(
                    classes.providerSign,
                    classes.signInContainer
                  )}
                >
                  <Google
                    style={{
                      marginRight: "10px",
                      color: "#EF9415",
                      marginLeft: "10px",
                    }}
                  />
                  <Button
                    onClick={handleGoogleLogin}
                    style={{
                      textTransform: "capitalize",
                      color: "#EF9415",
                      height: "35px",
                    }}
                    variant="text"
                  >
                    Sign in by Google
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box className={classes.registerBox}>
                  <Typography
                    sx={{ color: "#000", fontSize: "16px" }}
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    Login with okshiify
                  </Typography>

                  <Box sx={{ my: 3 }}>
                    <form
                      className={classes.loginForm}
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                          <input
                            className={classes.loginInput}
                            {...register("email", { required: true })}
                            placeholder="Enter Your email"
                          />
                          <br />
                          {errors.email && (
                            <span style={{ fontSize: "10px", color: "red" }}>
                              Please fill up email field
                            </span>
                          )}
                        </Grid>

                        <Grid item xs={12} md={12}>
                          <input
                            className={classes.loginInput}
                            {...register("password2", { required: true })}
                            placeholder="Enter your  password"
                          />
                          <br />
                          {errors.password2 && (
                            <span style={{ fontSize: "10px", color: "red" }}>
                              Please fill up password field
                            </span>
                          )}
                        </Grid>
                      </Grid>
                      <input
                        className={classes.submitBtn}
                        type="submit"
                        value="Login"
                      />
                      <Button
                        style={{
                          textTransform: "capitalize",
                          color: "#000",
                          marginLeft: "30px",
                        }}
                        variant="text"
                      >
                        Forgot Password ?
                      </Button>
                    </form>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
