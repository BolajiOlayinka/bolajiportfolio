import React, { useState } from "react";
import styled from "styled-components";
import { Navbar, Nav, NavItem } from "reactstrap";
import Icon from "../assets/icon2.jpg";
import { HashLink as Link } from "react-router-hash-link";
import animateScrollTo from "animated-scroll-to";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {faGithub, faInstagram, faMedium, faLinkedin, faTwitter, faWhatsapp} from "@fortawesome/free-brands-svg-icons";


export default function Header() {
  const [background, setBackground] = useState("#010B30");
  const [boxshadow, setBoxShadow] = useState("transparent");
  const [fixed, setFixed] = useState("fixed");

  const [showIcon, setShowIcon] = useState(true);
  const [showItem, setShowItem] = useState(false);
  // const [SmallBackground, setSmallBackground]=useState("black")
// console.log(window.innerWidth)
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setBackground("#010B30");
      setBoxShadow("0 0 10px rgba(0,0,0,0.2)");
    } else {
      setBackground("#010B30");
      setBoxShadow("transparent");
    }
  };
  const fixedScroll = () => {
    if (window.pageYOffset >= 0) {
      setFixed("fixed");
    } else {
      setFixed("initial");
    }
  };
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("scroll", fixedScroll);

  const toggle = (e) => {
    setShowItem(!showItem, e);
    setShowIcon(!showIcon, e);
  };

  const ScrolltoMarketPlace = () => {
    animateScrollTo(document.querySelector(".crossborder"));
  };
  const ScrolltoInternationalPayment = () => {
    animateScrollTo(document.querySelector(".payment"));
  };
  const ScrolltoLogistics = () => {
    animateScrollTo(document.querySelector(".logistics"));
  };
  // const ScrolltoLogistics = () => {
  //   animateScrollTo(3630);
  // };
  const ScrolltoFinance = () => {
    animateScrollTo(document.querySelector(".finance"));
  };
  return (
    <NavWrapper background={background} boxshadow={boxshadow} fixed={fixed}>
      <StyledNavbar expand="md">
        <div onClick={toggle}>
          {showIcon ? (
            <StyledFontAwesome icon={faBars} />
          ) : (
            <StyledFontCancel icon={faBars} />
          )}
        </div>
        <LogoContainer>
          <Link to="/">
            <img src={Icon} alt="Bolaji Olayinka" />
          </Link>
        </LogoContainer>
        <IconsContainer>
        <a href="/">
        <StyledIcon icon={faGithub}/>
        </a>
       <a href="/"><StyledIcon icon={faWhatsapp}/></a>
       <a href="/"><StyledIcon icon={faInstagram}/></a>
       <a href="/"><StyledIcon icon={faTwitter}/></a>
       <a href="/"><StyledIcon icon={faLinkedin}/></a>
        <a href="/"><StyledIcon icon={faMedium}/></a>

        </IconsContainer>
        {showItem && (
          <StyledNav navbar>
            <NavItem>
              <StyledLink
                activestyle={{
                  fontWeight: "bold",
                  color: "#f8951d",
                  cursor: "pointer",
                  textDecoration: "none",
                  borderBottom: "7px solid white",
                }}
                to="/"
                onClick={() => {
                  ScrolltoMarketPlace();
                  toggle();
                }}
              >
                CROSSBORDER MARKETPLACE
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
                to="/"
                onClick={() => {
                  ScrolltoInternationalPayment();
                  toggle();
                }}
              >
                INTERNATIONAL PAYMENT
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
                to="/"
                onClick={() => {
                  ScrolltoLogistics();
                  toggle();
                }}
              >
                OVERSEAS LOGISTICS
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink
                to="/"
                onClick={() => {
                  ScrolltoFinance();
                  toggle();
                }}
              >
                FINANCIAL TOOLS
              </StyledLink>
            </NavItem>
          </StyledNav>
        )}
        <LargeNav className="ml-auto">
          <StyledNav navbar>
            <StyledNavItem>
              <StyledLink href="/"  rel="noreferrer" target="_blank">Skills</StyledLink>
            </StyledNavItem>
            <StyledNavItem>
              <StyledLink href="/"  rel="noreferrer" target="_blank">
                Experience
              </StyledLink>
            </StyledNavItem>
            <StyledNavItem>
              <StyledLink href="/"  rel="noreferrer" target="_blank">Projects</StyledLink>
            </StyledNavItem>
            <StyledNavItem>
              <StyledLink href="/"  rel="noreferrer" target="_blank">Articles</StyledLink>
            </StyledNavItem>
            <NavItem>
          <Resume href="/">
          
       
          Resume
                  
          </Resume>
          </NavItem>
          </StyledNav>
         
        </LargeNav>
      </StyledNavbar>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  z-index: 12;
  display: flex;
  flex: auto;
  align-items: center;
  position: ${(props) => props.fixed} !important;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  color: white;
  background: ${(props) => props.background} !important;
  box-shadow: ${(props) => props.boxshadow} !important;
  transition: 0.5s all;
  width: -webkit-fill-available;
  ${
    "" /* @media (max-width: 767.9px) {
    background-color: rgba(0, 0, 0, 0.8)!important;
  } */
  }
`;
const LogoContainer = styled.div`

  img {
    width: 50px;
    height: 50px;
    border-radius:50%;
    box-shadow:0 0 5px rgb(41, 0, 255);
  } 
  @media (max-width: 576px) {
    z-index: 2;
  }
`;
const IconsContainer = styled.div `
display:flex;
width:192px;
justify-content:space-around;
margin-left:15px;
`
const StyledIcon= styled(FontAwesomeIcon) `
color:var(--royalBlue);
font-size:16px;

`
const StyledNav = styled(Nav)`
  margin: auto;
  @media (max-width: 767.9px) {
    position: fixed;
    padding-top: 60px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(0, 0, 0, 0.9);
    z-index: 1;
    width: 100%;
    padding-top: 80px;
    li {
      padding: 4px;
      padding-left: 20px;
      a {
        font-size: 14px !important;
      }
    }
  }
`;
const StyledNavbar = styled(Navbar)`
  flex: auto;
  @media (min-width: 1201px) {
    flex: none;
    width: 1200px;
    margin: auto;
    padding-left: 0px;
  }
  @media (min-width: 1024px) and (max-width: 1199px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  @media (min-width: 768px) and (max-width: 1023.9px) {
    padding-left: 50px;
    padding-right: 30px;
  }
  @media (max-width: 767.9px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;
const StyledNavItem = styled(NavItem) `
list-style-type: lower-roman;
color:var(--royalBlue);
`
const StyledLink = styled.a`
  color: white;
  line-height: 24px;
  padding-bottom: 8px;
  font-weight: 400;
  font-size: 16px;
  padding-left:3px;
  margin-right: 38px;
  :hover {
    color: var(--mainGreen);
    cursor: pointer;
    text-decoration: none;

    border-bottom: 2px solid var(--mainGreen);
  }
  :active {
    color: var(--mainGreen);
    border-bottom: 2px solid var(--mainGreen);
    transition: border-bottom 0.5s ease-in;
  }

  @media (max-width: 735px) {
    font-size: 12px;
    margin-right: 40px;
  }
  @media (max-width: 767.9px) {
    font-size: 13px;
    line-height: 32px;
    padding-left: 0.5em;
    :hover {
      border-bottom: 0px;
    }
    :active {
      border-bottom-color: transparent !important;
      border-bottom-style: none !important;
      border-bottom-width: 0 !important;
    }
  }
`;
const Resume = styled.a `
color:var(--royalBlue);
border:1px solid var(--royalBlue);
background:transparent;
padding:5px 10px;
`

const LargeNav = styled.div`
  @media (max-width: 767.9px) {
    display: none;
  }
`;
const StyledFontAwesome = styled(FontAwesomeIcon)`
  color: black;
  font-size: 20px;

  @media (min-width: 767.9px) {
    display: none;
  }
`;
const StyledFontCancel = styled(FontAwesomeIcon)`
  z-index: 2;
  position: absolute;
  top: 0;
  color: black;
  margin-top: 14px;
  ${"" /* margin-left: -2px; */}
  font-size: 20px;
`;
