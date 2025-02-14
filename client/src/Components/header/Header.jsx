import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, styled, IconButton, Drawer, List, ListItem, Box } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu"; 

const Component = styled(AppBar)`
  transition: all 0.3s ease-in-out;
  position: fixed;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  border-radius: 50px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (max-width: 768px) {
    width: 90%;
    top: 10px;
  }
`;

const Container = styled(Toolbar)`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 10px 30px;

  & > a {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    padding: 10px 15px;
    border-radius: 20px;
    transition: all 0.3s ease-in-out;
    color: #fff;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    display: none;  /* Hide links on mobile */
  }
`;

const MenuButton = styled(IconButton)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    color: black;
    position: absolute;
    left: 20px;
  }
`;

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 250px;
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 20px;
  }
`;

const DrawerLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  padding: 15px 0;
  display: block;
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #ffcc00;
    transform: scale(1.05);
  }
`;

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Component style={{ background: scrolling ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.9)" }}>
        <MenuButton onClick={() => setMenuOpen(true)}>
          <MenuIcon style={{ fontSize: 30 }} />
        </MenuButton>

        <Container>
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
          <Link to="/login">LOGOUT</Link>
        </Container>
      </Component>

      {/* Mobile Drawer Menu */}
      <StyledDrawer anchor="left" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <List>
          <ListItem button onClick={() => setMenuOpen(false)}>
            <DrawerLink to="/">HOME</DrawerLink>
          </ListItem>
          <ListItem button onClick={() => setMenuOpen(false)}>
            <DrawerLink to="/about">ABOUT</DrawerLink>
          </ListItem>
          <ListItem button onClick={() => setMenuOpen(false)}>
            <DrawerLink to="/contact">CONTACT</DrawerLink>
          </ListItem>
          <ListItem button onClick={() => setMenuOpen(false)}>
            <DrawerLink to="/login">LOGOUT</DrawerLink>
          </ListItem>
        </List>
      </StyledDrawer>
    </>
  );
};

export default Header;
