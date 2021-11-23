import React from "react";
import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <RegisterContainer>
          <RCLogoOne src="/assets/images/rc-logo-one.svg" alt="" />
          <RCSignUp>sign up right now</RCSignUp>
          <RCDescription>
            Emerge in that nonexisting library of movies from Discloney without
            any cost at all. If you like what you see, consider inviting me to
            an interview so I can tell you more about it :)
          </RCDescription>
          <RCLogoTwo src="/assets/images/rc-logo-two.png" alt="" />
        </RegisterContainer>
        <Background />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  height: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 80px 46px;
`;

const Background = styled.div`
  height: 100%;
  background-repeat: no-repeat;
  background-image: url("/assets/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const RegisterContainer = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
`;

const RCLogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const RCSignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 5px;

  &:hover {
    background-color: #0483ee;
  }
`;

const RCDescription = styled.p`
  margin: 0 0 24px;
  color: hsla(0, 0%, 90%, 1);
  font-size: 13px;
  line-height: 1.5em;
  letter-spacing: 1.3px;
`;

const RCLogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;
export default Login;
