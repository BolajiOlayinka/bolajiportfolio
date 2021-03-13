import React from "react";
import styled from "styled-components";
import BG from "../../assets/QR.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode, faGlobe, faStar } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { Link } from "react-router-dom";

export default function MoreProjects() {
  return (
    <Wrapper>
      <Container>
        <Projects>
          <Project>
            <Header>
              <Icons>
                <FontAwesomeIcon icon={faFileCode} />
              </Icons>
              <Icons>
                <a
                  href="https://github.com/BolajiOlayinka/Graph-Api-Automation"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </Icons>
            </Header>
            <Title>
              Marketing Automation Using Python, Matplotlib and Facebook SDK
            </Title>
            <Details>
              Automating the marketing process of analysing profit and loss
              margins. This generates Cost Per Clicks(CPC), Cost Per Actions
              (CPA), Return on Investments (ROI)
            </Details>
            <Footer>
              <div>
                <FontAwesomeIcon icon={faStar} /> Python
              </div>
              <div>
                {" "}
                <FontAwesomeIcon icon={faStar} />
                Facebook SDK
              </div>
              <div>
                {" "}
                <FontAwesomeIcon icon={faStar} />
                Matplotlib
              </div>
            </Footer>
          </Project>
          <Project>
            <Header>
              <Icons>
                <FontAwesomeIcon icon={faFileCode} />
              </Icons>
              <Icons>
                <a
                  href="https://orientalselected.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGlobe} />
                </a>
              </Icons>
            </Header>
            <Title>Front End Application Using Liquid.</Title>
            <Details>
              Developing the front end e-commerce using Css, Javascript and
              Liquid.
            </Details>
            <Footer>
              <div>
                <FontAwesomeIcon icon={faStar} /> Css
              </div>
              <div>
                {" "}
                <FontAwesomeIcon icon={faStar} />
                Javascript
              </div>
              <div>
                {" "}
                <FontAwesomeIcon icon={faStar} />
                Liquid
              </div>
            </Footer>
          </Project>
          <Project>
            <Header>
              <Icons>
                <FontAwesomeIcon icon={faFileCode} />
              </Icons>
              <Icons>
                <a
                  href="https://github.com/BolajiOlayinka/linkminebot"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </Icons>
            </Header>
            <Title>Telegram Admin Bot</Title>
            <Details>
              Telegram Messaging Bot for attending to Group Members, it hekps
              admin administer the group, helps in marketing producs and
              services.
            </Details>
            <Footer>
              <div>
                <FontAwesomeIcon icon={faStar} /> Javascript
              </div>
              <div>
                {" "}
                <FontAwesomeIcon icon={faStar} />
                Node J.s
              </div>
            </Footer>
          </Project>
        </Projects>
        <View>
          <a
            href="https://github.com/BolajiOlayinka?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            View Github for More Projects
          </a>
        </View>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: url(${BG});
  background-size: cover;
`;
const Container = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
    width: 1000px;
    margin: auto;
  }
  @media (max-width: 1199px) {
    width: 980px;
    margin: auto;
  }
  @media (max-width: 991px) {
    width: 90%;
    margin: auto;
  }
`;
const Projects = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 80px;
  @media (max-width: 991px) {
    flex-direction: column;
    width: 400px;
    margin: auto;
  }

  @media (max-width: 426px) {
    width: 100%;
  }
`;
const Project = styled.div`
  width: 320px;
  height: 380px;
  padding: 30px 20px;
  background-color: #d1e6e6;
  border-radius: 8px;
  box-shadow: 0 0 5px rgb(41, 0, 255);
  @media (max-width: 991px) {
    margin-bottom: 15px;
  }
`;
const Header = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Icons = styled.div`
  color: var(--cyan);
  font-size: 24px;
  a {
    color: var(--cyan);
  }
  a:hover {
    color: var(--deepBlue);
  }
`;
const Title = styled.div`
  font-size: 18px;
  color: var(--cyan);
  height: 90px;
  font-weight: bold;
`;
const Details = styled.div`
  font-size: 14px;
  height: 150px;
  color: var(--cyan);
`;
const Footer = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  div {
    font-size: 11px;
    font-weight: bold;
    color: var(--cyan);
  }
`;
const View = styled.div`
  padding-top: 50px;
  margin-left: auto;
  text-align: right;
  padding-bottom: 80px;
  a {
    color: white;
  }
`;
