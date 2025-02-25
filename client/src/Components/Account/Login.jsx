import React, { useState, useContext } from "react";
import { Box, TextField, Button, styled, Typography } from "@mui/material";
import { API } from "../../service/api.js";
import { DataContext } from "../../context/DataProvider.jsx";
import { useNavigate } from "react-router-dom";

// // Global style for the body to add a background image
// const globalStyles = `
//   body {
//     margin: 0;
//     padding: 0;
//     background-image: url(/Assets/Background/background.gif); /* Add your background image path here */
//     //background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/Assets/Background/background.gif);
//     //background-color: rgba(0, 0, 0, 0.6);
//     background-size: cover;
//     background-position: center;
//     background-repeat: no-repeat;
//     min-height: 100vh;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;

// // Inject global styles
// const styleSheet = document.createElement("style");
// styleSheet.type = "text/css";
// styleSheet.innerText = globalStyles;
// document.head.appendChild(styleSheet);

// Styled wrapper for the About page
const AboutWrapper = styled(Box)(({ theme }) => ({
  backgroundImage: "url(/Assets/Background/background.gif)", // Default landscape image
  backgroundSize: "cover",
  backgroundPosition: "center",
  marginTop: "-66px",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  // Media query for small devices
  [theme.breakpoints.down("sm")]: {
    //backgroundImage: "url(/Assets/Background/background.gif)", // Portrait image for small screens
    backgroundSize: "cover",
    backgroundPosition: "top center",
  },
}));

const Component = styled(Box)`
  width: 420px;
  margin: auto;
  padding: 40px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  text-align: center;
  position: relative;
  transition: transform 0.3s ease-in-out;
  //background-image: url(/Assets/Background/background.gif); /* Add your background image path here */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:hover {
    transform: scale(1.02);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: inherit;
    backdrop-filter: blur(15px);
    z-index: -1;
    border-radius: inherit;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 30px;
  }
`;

const Image = styled("img")({
  width: 120,
  marginBottom: "20px",
  transition: "transform 0.3s ease-in-out",

  "&:hover": {
    transform: "rotate(5deg) scale(1.1)",
  },
});

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledTextField = styled(TextField)`
  & label {
    color: #333;
    font-weight: bold;
  }

  & input {
    color: #333;
    font-weight: 500;
  }

  & .MuiOutlinedInput-root {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;

    & fieldset {
      border-color: #ccc;
    }
    &:hover fieldset {
      border-color: #555;
    }
    &:focus-within fieldset {
      border-color: #007bff;
    }
  }
`;

const LoginButton = styled(Button)`
  background: linear-gradient(135deg, #ff416c, #ff4b2b);
  color: #fff;
  padding: 12px;
  font-weight: bold;
  border-radius: 30px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(135deg, #ff4b2b, #ff416c);
    transform: scale(1.05);
  }
`;

const SignUpButton = styled(Button)`
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: #fff;
  padding: 12px;
  font-weight: bold;
  border-radius: 30px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(135deg, #0056b3, #007bff);
    transform: scale(1.05);
  }
`;

const loginInitialValues = {
  username: "",
  password: "",
};

const signUpInitialValues = {
  name: "",
  username: "",
  password: "",
};

const Login = ({ isUserAuthenticated }) => {
  const [account, toggleAccount] = useState("login");
  const [signup, setSignup] = useState(signUpInitialValues);
  const [login, setLogin] = useState(loginInitialValues);

  const { setAccount } = useContext(DataContext);
  const navigate = useNavigate();

  const toggleSignUp = () => {
    toggleAccount(account === "login" ? "signup" : "login");
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    let response = await API.userSignup(signup);
    if (response.isSuccess) {
      setSignup(signUpInitialValues);
      toggleAccount("login");
    }
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await API.userLogin(login);
    if (response.isSuccess) {
      sessionStorage.setItem("accessToken", `Bearer ${response.data.accessToken}`);
      sessionStorage.setItem("refreshToken", `Bearer ${response.data.refreshToken}`);

      setAccount({ username: response.data.username, name: response.data.name });
      isUserAuthenticated(true);
      navigate("/");
    }
  };

  return (
    <AboutWrapper>
         <Component>
      <Image src="/Assets/Logo/logo.png" alt="logo" />
      {account === "login" ? (
        <Wrapper>
          <StyledTextField label="Username" variant="outlined" value={login.username} onChange={onValueChange} name="username" />
          <StyledTextField label="Password" type="password" variant="outlined" value={login.password} onChange={onValueChange} name="password" />
          <LoginButton variant="contained" onClick={loginUser}>Login</LoginButton>
          <Typography color="#333">OR</Typography>
          <SignUpButton onClick={toggleSignUp}>Create an Account</SignUpButton>
        </Wrapper>
      ) : (
        <Wrapper>
          <StyledTextField label="Enter Name" variant="standard" onChange={onInputChange} name="name" />
          <StyledTextField label="Enter Username" variant="standard" onChange={onInputChange} name="username" />
          <StyledTextField label="Enter Password" type="password" variant="standard" onChange={onInputChange} name="password" />
          <SignUpButton onClick={signupUser}>Sign Up</SignUpButton>
          <Typography color="#333">OR</Typography>
          <LoginButton variant="contained" onClick={toggleSignUp}>Already have an account? Login</LoginButton>
        </Wrapper>
      )}
    </Component>
    </AboutWrapper>
   
  );
};

export default Login;