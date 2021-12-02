import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <Nav>
      <Logo>
        <NavLogo src="/assets/images/nav-logo.png" alt="" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src="/assets/images/home-icon.svg" alt="HOME" />
          <span>home</span>
        </a>
        <a>
          <img src="/assets/images/search-icon.svg" alt="HOME" />
          <span>search</span>
        </a>
        <a href="/home">
          <img src="/assets/images/watchlist-icon.svg" alt="HOME" />
          <span>watchlist</span>
        </a>
        <a href="/home">
          <img src="/assets/images/original-icon.svg" alt="HOME" />
          <span>original</span>
        </a>
        <a href="/home">
          <img src="/assets/images/movie-icon.svg" alt="HOME" />
          <span>movies</span>
        </a>
        <a href="/home">
          <img src="/assets/images/series-icon.svg" alt="HOME" />
          <span>series</span>
        </a>
      </NavMenu>
      <LoginBtn>login</LoginBtn>
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
  width: 200px;
  margin-top: 4px;
`;

const NavLogo = styled.img`
  width: 150px;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: nowrap row;
  justify-content: flex-end;
  height: 100%;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  text-transform: uppercase;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        bottom: -6px;
        display: block;
        content: "";
        opacity: 0px;
        height: 2px;
        left: 0px;
        position: absolute;
        transform-origin: left center;
        right: 0px;
        transform: scaleX(0);
        transition: all 130ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const LoginBtn = styled.a`
  background-color: rgba(0, 0, 0, 0.65);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 5px;
  transition: all 200ms ease-out 0s;

  &:hover {
    background-color: #f9f9f9;
    color: rgba(0, 0, 0, 0.65);
    border-color: transparent;
  }
`;
export default Header;
