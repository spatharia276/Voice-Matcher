import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Container = styled.div`
background-color: rgb(247,250,253);
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
  padding: 40px 10px;
`;

  const Wrapper = styled.div`
display: flex;
width 40%;
border-radius: 50px;
align-items: center;
flex-direction: column;
background-color: rgb(25,31,45);
border: 2px solid black;
padding: 30px 60px;
gap: 10px;
`;
const Title1 = styled.h1`
  font-size: 34px;
  color: white;
`;

const Title = styled.h1`
  font-size: 34px;
  color: white;
`;

const SubTitle = styled.h2`
color: white;
font-size: 28px;
font-weight: 300;
`;

const Input = styled.input`
font-size: 15px;
border: 2px solid white;
border-radius: 50px;
padding: 10px;
background-color: white;
width: 100%;
color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
background-color: rgb(221,160,0);
width: 105%;
border-radius: 50px;
font-size: 20px;
border: 2px;
padding: 10px 20px;
font-weight: 500;
cursor: pointer;
color: rgb(25,31,45)
`;

const More = styled.div`
display: flex;
margin-top: 10px;
font-size: 15px;
color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 80px;
`;

const Link = styled.span`
  margin-left: 35px;
`;

const SignIn = () => {
    return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue</SubTitle>
        <Input
          placeholder="username"
        />
        <Input
          type="password"
          placeholder="password"
        />
        <Button>Sign in</Button>
        <Title>or</Title>
        <Button >Signin with Google</Button>
        <Title>or</Title>
        <Input
          placeholder="username"
        />
        <Input placeholder="email" />
        <Input
          type="password"
          placeholder="password"
        />
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;