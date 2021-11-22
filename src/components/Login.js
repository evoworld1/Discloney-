import React from "react";
import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
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
export default Login;
