import React from "react";
import styled from "styled-components";
import Background from "../../assets/MapBackground.png";
import Globe from "../../assets/globe.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Banner() {
  return (
    <Wrapper>
      <Container>
        <BannerContent>
          <BannerLeft>
            <PreHeader>My Name is</PreHeader>
            <Header>Bolaji Olayinka</Header>
            <PostHeader>
              I am a software Engineer based in Lagos, Nigeria. i help companies
              across the world to build solutions on web, mobile and everything
              in between, While i try to build things, sometimes i break things
              also, but overall I BUILD.
            </PostHeader>
            <Contact href="mailto:bolajiolayinka980@gmail.com?body=My custom mail body" className="about">
              Contact Me
              <FontAwesomeIcon icon={faEnvelope} />
            </Contact>
          </BannerLeft>
          <BannerRight>
            <img src={Globe} alt="Globe" />
          </BannerRight>
        </BannerContent>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: url(${Background});
  background-size: cover;
  background-color: var(--deepBlue);
  padding-top: 50px;
  @media (max-width: 576px) {
    padding-top: 80px;
  }
`;
const Container = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
    width: 1000px;
    margin: auto;
  }
  @media (max-width: 1199px) {
    width: 90%;
    margin: auto;
  }
`;
const BannerContent = styled.div`
  display: flex;
  height: 600px;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1024px) {
    justify-content: space-between;
  }
  @media (max-width: 576px) {
    height: 500px;
  }
  @media (max-width: 426px) {
    height: 380px;
  }
`;
const BannerRight = styled.div`
  width: 350px;
  text-align: center;
  @media (max-width: 991px) {
    display: none;
  }
`;
const BannerLeft = styled.div`
  width: 700px;
  @media (max-width: 768px) {
    width: 100%;
    margin: auto;
  }
  @media (max-width: 426px) {
    width: 90%;
    margin: auto;
  }
`;
const PreHeader = styled.div`
  font-size: 16px;
  color: white;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;
const Header = styled.div`
  font-size: 60px;
  font-weight: bold;
  font-family: "Salsa", cursive;
  color: white;
  @media (max-width: 576px) {
    font-size: 65px;
    font-weight: normal;
  }
  @media (max-width: 426px) {
    font-size: 36px;
  }
`;
const PostHeader = styled.div`
  font-size: 16px;
  line-height: 32px;
  color: white;
  margin-bottom: 30px;
  @media (max-width: 576px) {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

const Contact = styled.a`
  color: white;
  font-size: 16px;
  border: 1px solid var(--royalBlue);
  padding: 5px 30px;
  width: 200px;
  height: 60px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 5px rgb(41, 0, 255);
  :hover {
    color: var(--cyan);
    text-decoration: none;
  }
  @media (max-width: 426px) {
    width: 180px;
    height: 40px;
    font-size: 14px;
  }
`;
