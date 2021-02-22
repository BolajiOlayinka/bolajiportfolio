import React from "react";
import styled, { keyframes } from "styled-components";
import tool1 from "../../assets/tools/icon1.png";
import tool2 from "../../assets/tools/icon2.png";
import tool3 from "../../assets/tools/icon3.png";
import tool4 from "../../assets/tools/icon4.png";
import tool5 from "../../assets/tools/icon5.png";
import tool6 from "../../assets/tools/icon6.png";
import tool7 from "../../assets/tools/icon7.png";
import tool8 from "../../assets/tools/icon8.png";
import tool9 from "../../assets/tools/icon9.png";
import tool10 from "../../assets/tools/icon10.png";
import tool11 from "../../assets/tools/icon11.png";
import tool12 from "../../assets/tools/icon12.png";
import tool13 from "../../assets/tools/icon13.png";
import tool14 from "../../assets/tools/icon14.png";

export default function Tool() {
  return (
    <React.Fragment>
      <PartnerWrapper>
        <Container>
          <PartnerContainer>
            <LogoContainer>
              <img src={tool1} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool2} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool3} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool4} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool5} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool6} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool7} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool8} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool9} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool10} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool11} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool12} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool13} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool14} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool4} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool12} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool3} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool11} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool5} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool14} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool2} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool9} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool7} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool1} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool11} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool5} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool8} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool2} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool6} alt="tools" />
            </LogoContainer>
            <LogoContainer>
              <img src={tool13} alt="tools" />
            </LogoContainer>
          </PartnerContainer>
        </Container>
      </PartnerWrapper>
    </React.Fragment>
  );
}

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

  @media (max-width: 576px) {
    width: 90%;
    margin: auto;
  }
`;

const RightUp = keyframes`
 from {bottom:0px;}
  to {bottom: 300px;}


`;
const PartnerContainer = styled.div`
  width: 100%;
  height: 430px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: space-around;
  animation: ${RightUp} infinite;
  animation-duration: 15s;
  animation-delay: 0s;
  animation-timing-function: ease;
  animation-direction: alternate;
  @media (max-width: 1199px) {
    justify-content:space-between;
    width: 100%;
  }
  @media (max-width: 1024px) {
      justify-content:space-between;
      width:100%;
    height: 500px;
  }
  @media (max-width: 991px) {
    justify-content:space-between;
    width:100%;
    height: 500px;
  }
  @media (max-width: 768px) {
    justify-content:space-between;
    width:100%;
    height: 650px;
  }
  @media(max-width:576px) {
    justify-content:space-between;
    width:100%;

    height: 750px;
    position: relative;
  }

  @media(max-width:500px) {
    justify-content:center;
    align-items:center;
    width:330px;
    margin:auto;
    height: 850px;
    position: relative;
  }
`;
const PartnerWrapper = styled.div`
  padding-top: 20px;
  position: relative;
  height: 200px;
  overflow: hidden;
`;
const LogoContainer = styled.div`
  background-color: var(--royalBlue);
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  border-radius: 5px;
  box-shadow: 0 0 15px rgb(136 153 166 / 20%),
    0 0 3px 1px rgb(136 153 166 / 15%);
  img {
    width: 100px;
  }
  @media (max-width: 1024px) {
    width: 130px;
  }
`;
