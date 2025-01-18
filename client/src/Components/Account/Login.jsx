import { useState } from 'react';

import {Box, TextField, Button, styled, Typography} from '@mui/material'

import {API} from '../../service/api.js'

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

const Text = styled(Typography)`
color: #878787;
font-size : 16px; 
`;

const SignUpinitialValues = {
    name: '',
    username: '',
    password: ''
}

export default function Login() {

    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(SignUpinitialValues);
    const [error, showError] = useState('');

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
    
}

  return (
    <Component>
        <Box>
            <Image src="/Assets/Logo/logo.gif" alt="logo" />
            {
                account === 'login' ?
                    <Wrapper>
                        <TextField  label="Login" variant="standard" />
                        <TextField  label="Password" variant="standard" />
                        
                        {error && <Error>{error}</Error>}

                        <LoginButton variant="contained">Login</LoginButton>
                        <Text style={{textAlign: 'center'}}>OR</Text>
                        <SignUpButton onClick={() => toggleSignUp()}>Sign Up</SignUpButton>
                    </Wrapper>
            :

                <Wrapper>
                    <TextField  onChange={(e) => OnInputChange(e)} name='name' label="Enter Name" variant="standard" />
                    <TextField  onChange={(e) => OnInputChange(e)} name='username' label="Enter Username" variant="standard" />
                    <TextField  onChange={(e) => OnInputChange(e)} name='password' label="Enter Password" variant="standard" />

                    <SignUpButton onClick={() => signupUser()} >Signup</SignUpButton>
                    <Text style={{textAlign: 'center'}}>OR</Text>
                    <LoginButton variant="contained" onClick={() => toggleSignUp()}>Already have an account</LoginButton>
                </Wrapper>
            }
        </Box>
    </Component>
  )
}

