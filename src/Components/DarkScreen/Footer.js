import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FooterContainer>
          <div>
            Developed with <span>&#x2764;</span> by Bolaji Olayinka
          </div>
          <div>Designed by Oduwole Adeyinka</div>
        </FooterContainer>
      </Container>
    </FooterWrapper>
  );
}
const FooterWrapper = styled.div`
  height: 80px;
  background-color: var(--deepBlue);
  margin-top:50px;
`;
const Container = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
    width: 1100px;
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
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  font-size: 12px;
  height: 80px;
  @media(max-width:576px){
      font-size:12px;
  }
  @media(max-width:426px){
      font-size:12px;
      flex-direction:column;
      justify-content:space-around;
  }
`;
