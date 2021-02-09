import React, { useState } from "react";
import styled from "styled-components";
import Work from "../../assets/work.jpg";

export default function Experience() {
  const [overlay, setOverlay] = useState("transparent");
  const [cardOneColor, setCardOneColor] = useState("#1C134B");
  const [cardTwoColor, setCardTwoColor] = useState("#1C134B");
  const [cardThreeColor, setCardThreeColor] = useState("#1C134B");
  const [cardFourColor, setCardFourColor] = useState("#1C134B");
  const [nameOneColor, setNameOneColor] = useState("#00FFFF");
  const [nameTwoColor, setNameTwoColor] = useState("#00FFFF");
  const [nameThreeColor, setNameThreeColor] = useState("#00FFFF");
  const [nameFourColor, setNameFourColor] = useState("#00FFFF");
  const [progressOneColor, setProgressOneColor] = useState("transparent");
  const [progressTwoColor, setProgressTwoColor] = useState("transparent");
  const [progressThreeColor, setProgressThreeColor] = useState("transparent");
  const [progressFourColor, setProgressFourColor] = useState("transparent");
  const Dim = () => {
    setOverlay("#000000");
  };
  const unDim = () => {
    setOverlay("transparent");
  };
  const CardOneHover = () => {
    setCardOneColor("#000000");
    setNameOneColor("#fff");
  };
  const CardOneUnHover = () => {
    setCardOneColor("#1C134B");
    setNameOneColor("#00FFFF");
  };
  const CardTwoHover = () => {
    setCardTwoColor("#000000");
    setNameTwoColor("#fff");
  };
  const CardTwoUnHover = () => {
    setCardTwoColor("#1C134B");
    setNameTwoColor("#00FFFF");
  };
  const CardThreeHover = () => {
    setCardThreeColor("#000000");
    setNameThreeColor("#fff");
  };
  const CardThreeUnHover = () => {
    setCardThreeColor("#1C134B");
    setNameThreeColor("#00FFFF");
  };
  const CardFourHover = () => {
    setCardFourColor("#000000");
    setNameFourColor("#fff");
  };
  const CardFourUnHover = () => {
    setCardFourColor("#1C134B");
    setNameFourColor("#00FFFF");
  };
  const CardOneClick = () => {
    setProgressOneColor("5px solid red");
    setProgressTwoColor("transparent");
    setProgressThreeColor("transparent");
    setProgressFourColor("transparent");
  };
  const CardTwoClick = () => {
    setProgressOneColor("transparent");
    setProgressTwoColor("5px solid red");
    setProgressThreeColor("transparent");
    setProgressFourColor("transparent");
  };
  const CardThreeClick = () => {
    setProgressOneColor("transparent");
    setProgressTwoColor("transparent");
    setProgressThreeColor("5px solid red");
    setProgressFourColor("transparent");
  };
  const CardFourClick = () => {
    setProgressOneColor("transparent");
    setProgressTwoColor("transparent");
    setProgressThreeColor("transparent");
    setProgressFourColor("5px solid red");
  };
  
  return (
    <Container>
      <Wrapper>
        <LeftWrapper>
          <CardOne
            onMouseEnter={CardOneHover}
            onMouseLeave={CardOneUnHover}
            cardColor={cardOneColor}
            progressColor={progressOneColor}
            onClick={CardOneClick}
          >
            <Name nameColor={nameOneColor}>Standage Inc.</Name>
            <PositionWrapper>
              <Position>Software Engineer</Position>
              <Year>July 2020 - Present</Year>
            </PositionWrapper>
          </CardOne>

          <CardTwo
            onMouseEnter={CardTwoHover}
            onMouseLeave={CardTwoUnHover}
            cardColor={cardTwoColor}
            progressColor={progressTwoColor}
            onClick={CardTwoClick}
          >
            <Name nameColor={nameTwoColor}>Oriental Selected</Name>
            <PositionWrapper>
              <Position>Software Developer</Position>
              <Year>Feb 2020 - Jul 2020</Year>
            </PositionWrapper>
          </CardTwo>

          <CardThree
            onMouseEnter={CardThreeHover}
            onMouseLeave={CardThreeUnHover}
            cardColor={cardThreeColor}
            progressColor={progressThreeColor}
            onClick={CardThreeClick}
          >
            <Name nameColor={nameThreeColor}>Freeki Logistics</Name>
            <PositionWrapper>
              <Position>Front End Developer</Position>
              <Year>Mar 2019 - Jan 2020</Year>
            </PositionWrapper>
          </CardThree>

          <CardFour
            onMouseEnter={CardFourHover}
            onMouseLeave={CardFourUnHover}
            cardColor={cardFourColor}
            progressColor={progressFourColor}
            onClick={CardFourClick}
          >
            <Name nameColor={nameFourColor}>Elta Solutions</Name>
            <PositionWrapper>
              <Position>Front End Developer</Position>
              <Year>Aug 2018 - March 2019</Year>
            </PositionWrapper>
          </CardFour>
        </LeftWrapper>
        <RightWrapper>
          <SmallAboutPix>
            <BackgroundTwo></BackgroundTwo>
            <BackgroundOne></BackgroundOne>

            <ImageSection onMouseEnter={Dim} onMouseLeave={unDim}>
              <BackgroundOverlay overlay={overlay} />
              <img src={Work} alt="Bolaji Olayinka" />
            </ImageSection>
          </SmallAboutPix>

          <AboutPix>
            <BackgroundTwo></BackgroundTwo>
            <BackgroundOne></BackgroundOne>

            <ImageSection onMouseEnter={Dim} onMouseLeave={unDim}>
              <BackgroundOverlay overlay={overlay} />
              <img src={Work} alt="Bolaji Olayinka" />
            </ImageSection>
          </AboutPix>
          
          {progressOneColor==="5px solid red" && (
            <DetailsWrapper>
            <DetailsRender>
            <RenderOne>
            <ul>
               <li>Building Web Applications</li>
               <li>Building Pixel Perfect Front End Applications</li>
               <li>Building Blockchain Technologies</li>
               </ul>
              </RenderOne>
              </DetailsRender>
              </DetailsWrapper>
          )}
          {progressTwoColor==="5px solid red" && (
            <DetailsWrapper>          
             <DetailsRender>
            <RenderTwo>
            <ul>               
            <li>Marketing Data Automation Using Facebook SDK</li>
               <li>Used the Liquid Templating Language to develop on Shopify</li>
               </ul>

              </RenderTwo>
              </DetailsRender>
              </DetailsWrapper>
 
          )}
          {progressThreeColor==="5px solid red" && (
            <DetailsWrapper>  
            <DetailsRender>
            <RenderThree>
            <ul>               
            <li>Front End Application for Ecommerce / Logistics Platform</li>
            </ul>

              </RenderThree>
              </DetailsRender>
              </DetailsWrapper>
 
          )}
          {progressFourColor==="5px solid red" && (
            <DetailsWrapper>  
            <DetailsRender>
            <RenderFour>
            <ul>
               <li>Building Various Client Websites across industries/sectors</li>
               </ul>
              </RenderFour>
              </DetailsRender>
              </DetailsWrapper>
 
          )}
              
              
             
              
         
        </RightWrapper>
      </Wrapper>
    </Container>
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
  @media (max-width: 1024px) {
    width: 90%;
    margin: auto;
  }
  @media (max-width: 576px) {
    width: 90%;
    margin: auto;
  }
`;
const BackgroundOverlay = styled.div`
  background: ${(props) => props.overlay} !important;
  opacity: 0.7;
  width: 150px;
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
  margin: auto;
  @media (max-width: 577px) {
    width: 100px;
  }
  @media (max-width: 426px) {
    width: 250px;
    width: 250px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  padding-top: 80px;
  padding-bottom: 80px;
  @media (max-width: 991px) {
    padding-top: 30px;
    padding-bottom: 30px;
    flex-direction: column;
  }
`;
const LeftWrapper = styled.div`
  border-left: 1px solid #eaeaea;
  padding-left: 10px;
  @media(max-width:577px){
    width:100%;
    margin-left:10px;

  }
`;
const RightWrapper = styled.div`
@media(max-width:991px){
  display:flex;
  flex-direction:row;
  width:80%;
  margin:auto;
}
`;
const AboutPix = styled.div`
  width: 350px;
  margin-top: 5px;
  text-align: center;

  @media (max-width: 991.1px) {
    display: none;
  }
  
`;
const CardOne = styled.div`
  display: flex;
  width:580px;
  height: 86px;
  align-items: center;
  background-color: ${(props) => props.cardColor} !important;
  border-left: ${(props) => props.progressColor} !important;
  margin-left: -13px;
  justify-content: space-around;

  @media(max-width:1024px){
    width:530px;
}
@media(max-width:991px){
    width:100%;
}
@media(max-width:577px){
    font-size:14px;
    flex-direction:column;
   width:100%;
    height:90px;
    padding-top:5px;
    padding-bottom:5px;
   
}
@media(max-width:426px){
  width:100%;
  
}


`;
const CardTwo = styled.div`
  display: flex;
  width:580px;
  height: 86px;
  align-items: center;
  background-color: ${(props) => props.cardColor} !important;
  border-left: ${(props) => props.progressColor} !important;
  margin-left: -13px;
  justify-content: space-around;
  margin-top: 8px;
  margin-bottom: 8px;
  @media(max-width:1024px){
    width:530px;
}
@media(max-width:991px){
    width:100%;
}
@media(max-width:577px){
    font-size:14px;
    flex-direction:column;
    margin-top:10px;
    height:80px;
    padding-top:5px;
    padding-bottom:5px;

}
@media(max-width:426px){
  width:100%;
  
}

`;
const CardThree = styled.div`
  display: flex;
  width:580px;
  height: 86px;
  align-items: center;
  background-color: ${(props) => props.cardColor} !important;
  border-left: ${(props) => props.progressColor} !important;
  margin-left: -13px;
  justify-content: space-around;
  @media(max-width:1024px){
    width:530px;
}
@media(max-width:991px){
    width:100%;
}
@media(max-width:577px){
    font-size:14px;
    flex-direction:column;
    margin-top:10px;
    height:80px;
    padding-top:5px;
    padding-bottom:5px;

}
@media(max-width:426px){
  width:100%;
  
}
@media(max-width:426px){
  width:100%;
}
`;
const CardFour = styled.div`
  display: flex;
  width:580px;
  height: 86px;
  align-items: center;
  background-color: ${(props) => props.cardColor} !important;
  border-left: ${(props) => props.progressColor} !important;
  margin-left: -13px;
  justify-content: space-around;
  margin-top: 8px;
  @media(max-width:1024px){
    width:530px;
}
@media(max-width:991px){
    width:100%;
}
@media(max-width:768px){
    font-size:14px;
}
@media(max-width:577px){
    font-size:14px;
    flex-direction:column;
    height:80px;
    margin-top:10px;
    padding-top:5px;
    padding-bottom:5px;

}
@media(max-width:426px){
  width:100%;
  
}
@media(max-width:426px){
    width:100%;
    
}
`;
const Name = styled.div`
  color: ${(props) => props.nameColor} !important;
  font-size: 18px;
  width: 40%;
  padding-left: 30px;
  @media(max-width:576px){
    width:100%;
    font-size:16px;
  }

`;
const PositionWrapper = styled.div`
  line-height: 20px;
  
  @media(min-width:577px){
    margin:auto;
    width:50%;
  }
 
  
  @media(max-width:576px){
    font-size:18px;
    padding-left:10px;
    width:100%;
    padding-left: 30px;
    ${'' /* margin-top:5px; */}
    line-height:normal;
    
  }


  ${'' /* text-aling: center; */}

`;
const Position = styled.div`
  font-size: 20px;
  color: white;
  margin: auto;
  padding-bottom: 10px;
  
  @media(max-width:768px){
    width: 100%;
  }
  @media(max-width:576px){
    width:100%;
    font-size:16px;
    padding-bottom:0px;
  }
  @media(max-width:426px){
    font-size:18px;

  }
`;
const Year = styled.div`
  color: #707070;
  font-size: 14px;
  
  margin: auto;
`;

const SmallAboutPix = styled.div`
 display:none;
  
`;
const ImageSection = styled.div`
  position: relative;
  width: 150px;
  margin: auto;
  img {
    width: 150px;
    position: relative;
    z-index: 2;
  }
  @media (max-width: 577px) {
    width: 100px;

    img {
      width: 100px;
    }
  }
  @media (max-width: 426px) {
    width: 250px;

    img {
      width: 250px;
    }
  }
`;
const BackgroundOne = styled.div`
  position: absolute;
  background: linear-gradient(to left bottom, #00ffff, #2900ff);
  width: 155px;
  height: 155px;
  z-index: 0;
  margin-left: 95px;
  margin-top: -5px;
  border-radius: 0px 10px 0px 10px;
  @media (max-width: 991px) {
    margin-left: -5px;
    margin-top: 10px;
  }
  @media (max-width: 577px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 426px) {
    width: 250px;
    height: 250px;
    margin-top: 5px;
    margin-left: -5px;
  }
`;
const BackgroundTwo = styled.div`
  position: absolute;
  background: linear-gradient(to left bottom, #ff0000, #0000ff);
  width: 155px;
  height: 155px;
  z-index: 1;
  margin-left: 100px;
  border-radius: 0px 10px 0px 10px;
  @media (max-width: 991px) {
    margin-left: 5px;
  }
  @media (max-width: 577px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 426px) {
    width: 250px;
    height: 250px;
    margin-left: 5px;
    margin-top: -5px;
  }
`;

const DetailsWrapper = styled.div `
margin-top:35px;
@media(max-width:991px){
  margin:auto;
  margin-top:35px;
}
`

const DetailsRender = styled.div `
max-width: 300px;
margin:auto;
  padding: 1rem;
  color: white;
  border-width: 3px;
  border-style: solid;
  border-image: 
    linear-gradient(
      to bottom, 
      red, 
      rgba(0, 0, 0, 0)
    ) 1 100%;

    ul{
      margin-left:-1em;
    }
    li{
      line-height:24px;
      letter-spacing:1px;
    }
    @media(max-width:991px){
  max-width:400px;
}
`
const RenderOne= styled.div `
color:white;
font-size:14px;
`
const RenderTwo= styled.div `
color:white;
font-size:14px;
`
const RenderThree= styled.div `
color:white;
font-size:14px;
`
const RenderFour= styled.div `
color:white;
font-size:14px;
`

