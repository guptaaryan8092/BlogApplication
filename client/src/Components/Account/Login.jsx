import React,{ useState, useContext } from 'react';

import {Box, TextField, Button, styled, Typography} from '@mui/material'

import {API} from '../../service/api.js'
import { DataContext } from '../../context/DataProvider.jsx';

import { useNavigate } from 'react-router-dom';

const Component = styled(Box) `
width: 400px;
margin: auto;
box-shadow: 5px 5px 10px rgb(0 0 0 / 0.5);`

const Image = styled('img')({
    width: 100,
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0'
})

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
text-transform: none;
color: #fff;
background: #fb641b;
height: 48px;
border-radius: 2px;
`;

const SignUpButton = styled(Button)`
text-transform: none;
color: #2874f0;
background: #fff;
height: 48px;
border-radius: 2px;
box-shadow : 0 2px 4px 0 rgb(0 0 0 /20%);
`;

const Error = styled(Typography)`
font-size : 10px;
color: #ff6161;
line-height: 0;
margin-top: 10px;
font-weight: 600;
`

const Text = styled(Typography)`
color: #878787;
font-size : 16px; 
`;

const loginInitialValues = {
    username: '',
    password: ''
};

const signUpinitialValues = {
    name: '',
    username: '',
    password: ''
}

const Login = ({isUserAuthenticated}) => {

    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signUpinitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, showError] = useState('');

    const {setAccount} = useContext(DataContext);
    const navigate = useNavigate(); // useNavigate is a hook from react-router-dom.


const toggleSignUp = () => {
    toggleAccount(account === 'login' ? 'signup' : 'login');
    // account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    // }
}

const OnInputChange = (e) => {
    setSignup({ ...signup, [e.target.name] : e.target.value});
}

const signupUser = async () => {
    let response = await API.userSignup(signup);
    if (response.isSuccess) {
        showError('');
        setSignup(signUpinitialValues);
        toggleAccount('login');
    } else {
        showError('Something went wrong! please try again later');
    }
}

const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
}

const loginUser = async () => {
    let response = await API.userLogin(login);
    if (response.isSuccess) {
        showError('');

        sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
        sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);

        setAccount({ username: response.data.username, name: response.data.name });

        isUserAuthenticated(true);

        navigate('/');

    } else {
        showError('Something went wrong! please try again later');
    }
}


  return (
    <Component>
        <Box>
            <Image src="/Assets/Logo/logo.gif" alt="logo" />
            {
                account === 'login' ?
                    <Wrapper>
                        <TextField  label="Login" variant="standard" value={login.username} onChange={(e) => onValueChange(e)} name='username'/>
                        <TextField  label="Password" type="password"  variant="standard" value={login.password} onChange={(e) => onValueChange(e)} name="password" />
                        
                        {error && <Error>{error}</Error>}

                        <LoginButton variant="contained" onClick={() => loginUser()}>Login</LoginButton>
                        <Text style={{textAlign: 'center'}}>OR</Text>
                        <SignUpButton onClick={() => toggleSignUp()}>Sign Up</SignUpButton>
                    </Wrapper>
            :

            <Wrapper>
            <TextField
                label="Enter Name"
                // variant="standard"
                onChange={(e) => OnInputChange(e)}
                name="name"
            />
            <TextField
                label="Enter Username"
                // variant="standard"
                onChange={(e) => OnInputChange(e)}
                name="username"
            />
            <TextField
                label="Enter Password"
                // variant="standard"
                type="password" 
                onChange={(e) => OnInputChange(e)}
                name="password"
            />
        
            {error && <Error>{error}</Error>}
            <SignUpButton onClick={() => signupUser()}>Signup</SignUpButton>
            <Text style={{ textAlign: "center" }}>OR</Text>
            <LoginButton variant="contained" onClick={() => toggleSignUp()}>
                Already have an account
            </LoginButton>
        </Wrapper>
        
            }
        </Box>
    </Component>
  )
}

export default Login;