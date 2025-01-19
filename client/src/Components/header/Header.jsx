import { AppBar, Toolbar, styled, Button, Typography } from '@mui/material'; 

import { Link } from 'react-router-dom';

const Component = styled(AppBar)`
background: grey;
color: #fff;
`;

const Container = styled(Toolbar)`
justify-content: center;
& > a {
    padding: 20px;
    color: #fff;
    text-decoration: none;
}
`;

const Header = () => {
    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/login'>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;