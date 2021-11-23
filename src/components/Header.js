import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <Nav>
      <Logo>
        <NavLogo src="/assets/images/nav-logo.png" alt="" />
      </Logo>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #040714;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0px;
  width: 80px;
  margin-top: 4px;
`;

const NavLogo = styled.img`
  width: 150px;
`;
export default Header;
