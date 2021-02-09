import React from 'react';
import styled from 'styled-components';
import Standage from '../../assets/Standage.png';
import Nodomaru from '../../assets/Nodomaru.png';
import Digitrad from '../../assets/Digitrad.png';
import Content from '../../assets/Content.png';
import BG from '../../assets/bg.png';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import {faGithub, faInstagram, faMedium, faLinkedin, faTwitter, faWhatsapp} from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
    return (
        <Container>
       <ProjectsWrapper>
        <ProjectOne>
            <LeftOne>
                <img src={Standage} alt="Standage Website"/>
            </LeftOne>
            <RightOne>
                <ProjectName>Standage Official Website</ProjectName>
                <img src={Content} alt="Background"/>
                <TextContent> The website was built to be seamlessly interactive, 
                intuitive and Data efficient. Written in React, the Site Synergizes 
                a unique Cultural and Contemporary outlook.  CATCHY!</TextContent>
            </RightOne>
        </ProjectOne>

        <ProjectTwo>
        <LeftTwo>
        <ProjectNameTwo>Digitrad Official Website</ProjectNameTwo>
        <img src={Content} alt="Background"/>
        <TextContentTwo> The website was built to be seamlessly interactive, 
                intuitive and Data efficient. Written in React, the Site Synergizes 
                a unique Cultural and Contemporary outlook.  CATCHY!</TextContentTwo>
            </LeftTwo>
            <RightTwo>
                
                <img src={Nodomaru} alt="Nodomaru Website"/>
            </RightTwo>
        </ProjectTwo>

        <ProjectThree>
        <LeftOne>
                <img src={Digitrad} alt="Digitrad Website"/>
            </LeftOne>
            <RightOne>
            <ProjectName>Digitrad Official Website</ProjectName>
                <img src={Content} alt="Background"/>
                <TextContent> The website was built to be seamlessly interactive, 
                intuitive and Data efficient. Written in React, the Site Synergizes 
                a unique Cultural and Contemporary outlook.  CATCHY!</TextContent>
            </RightOne>
            
        </ProjectThree>
       </ProjectsWrapper>
       </Container>
    )
}

const Container = styled.div `
width:100%;
@media(min-width:1200px){
    width:1000px;
    margin:auto;
}
`

const ProjectsWrapper = styled.div `
background:url(${BG});
background-size:cover;
`
const ProjectOne = styled.div `
display:flex;
align-items:center;
padding-top:100px;
padding-bottom:80px;
`
const ProjectName = styled.div `
color:var(--cyan);
text-align:right;
font-size:12px;
padding-bottom:10px;
`
const ProjectNameTwo = styled.div `
color:var(--cyan);
text-align:left;
font-size:12px;
padding-bottom:10px;
`
const LeftOne = styled.div `
width:632px;
img{
    width:632px;
}

`
const TextContent = styled.div `
position:absolute;
z-index:2;
color:white;
margin-top:-120px;
margin-left:-40px;
font-size:14px;
width:450px;;
    border-bottom-width:4px;
    border-top-width:1px;
    -webkit-transform: perspective(600px) rotateX(-20deg);
`
const TextContentTwo = styled.div `
position:absolute;
z-index:2;
color:white;
margin-top:-120px;
margin-left:40px;
font-size:14px;
width:450px;;
    border-bottom-width:4px;
    border-top-width:1px;
    -webkit-transform: perspective(600px) rotateX(-20deg);
`
const RightOne = styled.div `
img{
    width:492px;
    z-index:1;
    margin-left:-80px;
}
`

const ProjectTwo = styled.div `
display:flex;
align-items:center;
padding-top:80px;
padding-bottom:80px;
`
const LeftTwo = styled.div `
img{
    width:492px;
    z-index:1;
    position:relative;
}

`
const RightTwo = styled.div `
width:632px;
img{
    width:632px;
    margin-left:-80px;
    z-index:0;
    position:relative;
}

`

const ProjectThree = styled.div `
display:flex;
align-items:center;
padding-top:80px;
padding-bottom:80px;
`
