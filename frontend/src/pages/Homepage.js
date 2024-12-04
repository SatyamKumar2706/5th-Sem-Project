import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import JesLogo from "../assets/JesLogo.svg";
import { LightPurpleButton } from '../components/buttonStyles';
import { gsap } from 'gsap';

const Homepage = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(logoRef.current, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 1 });
  }, []);
    return (
        <FullHeightBox>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} display="flex" justifyContent="center" alignItems="center">
              <img src={JesLogo} alt="JesLogo" style={{ width: '40%', height: 'auto' }} ref={logoRef} />
              </Grid>
                <Grid item xs={12} md={6}>
                    <StyledPaper elevation={5}>
                        <StyledTitle>
                            Welcome to JES
                            <br />
                            <StyledSpan>S.A.M.S</StyledSpan>
                        </StyledTitle>
                        <StyledText>
                            Streamline school management, class organization, and add students and faculty.
                            Seamlessly track attendance, assess performance, and provide feedback.
                            Access records, view marks, and communicate effortlessly.
                        </StyledText>
                        <StyledBox>
                            <StyledLink to="/choose">
                                <LightPurpleButton variant="contained" fullWidth>
                                    Login
                                </LightPurpleButton>
                            </StyledLink>
                            <StyledLink to="/chooseasguest">
                                <Button variant="outlined" fullWidth
                                    sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
                                >
                                    Login as Guest
                                </Button>
                            </StyledLink>
                            <StyledText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{color:"#550080"}}>
                                    Sign up
                                </Link>
                            </StyledText>
                        </StyledBox>
                    </StyledPaper>
                </Grid>
            </Grid>
        </FullHeightBox>
    );
};

export default Homepage;

const FullHeightBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: radial-gradient(circle at 0% 0%, #fefae0 0%, transparent 50%),
              radial-gradient(circle at 100% 0%, #f2e9e4 0%, transparent 50%),
              radial-gradient(circle at 100% 100%, #fefae0 0%, transparent 50%),
              radial-gradient(circle at 0% 100%, #f2e9e4 0%, transparent 50%);
  width: 100%;
`;

const StyledPaper = styled.div`
  padding: 34px;
  margin: 30px;
  height: auto;

  @media (max-width: 600px) {
    padding: 16px;
    margin: 10px;
  }
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;

  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #550080;
  font-weight: bold;
  margin: 0;
  text-align: center;
  line-height: 1.2;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const StyledText = styled.p`
  margin: 30px 0;
  text-align: center;
  line-height: 1.5;

  @media (max-width: 600px) {
    margin: 20px 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledSpan = styled.span`
  display: block;
  font-size: 2.5rem;
  color: #550080;

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;