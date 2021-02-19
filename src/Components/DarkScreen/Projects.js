import React from 'react';
import styled from 'styled-components';
import Standage from '../../assets/Standage.png';
// import Nodomaru from '../../assets/Nodomaru.png';
import Digitrad from '../../assets/Digitrad.png';
import Content from '../../assets/Content.png';
import BG from '../../assets/bg.png';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import {faGithub, faInstagram, faMedium, faLinkedin, faTwitter, faWhatsapp} from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
    return (
        
       <ProjectsWrapper>
       <Container>
        <ProjectOne>
            <LeftOne>
                <img src={Standage} alt="Standage Website"/>
            </LeftOne>
            <RightOne>
                <ProjectName href="/">Standage Official Website</ProjectName>
                <img src={Content} alt="Background"/>
                <TextContent> The website was built to be seamlessly interactive, 
                intuitive and Data efficient. Written in React, the Site Synergizes 
                a unique Cultural and Contemporary outlook.  CATCHY!</TextContent>
            </RightOne>
        </ProjectOne>

        {/* <ProjectTwo>
        <LeftTwo>
        <ProjectNameTwo href="/">Nodomaru Official Website</ProjectNameTwo>
        <img src={Content} alt="Background"/>
        <TextContentTwo> The website was built to be seamlessly interactive, 
                intuitive and Data efficient. Written in React, the Site Synergizes 
                a unique Cultural and Contemporary outlook.  CATCHY!</TextContentTwo>
            </LeftTwo>
            <RightTwo>
                
                <img src={Nodomaru} alt="Nodomaru Website"/>
            </RightTwo>
        </ProjectTwo> */}

        <ProjectThree>
        <LeftOne>
                <img src={Digitrad} alt="Digitrad Website"/>
            </LeftOne>
            <RightOne>
            <ProjectName href="/">Digitrad Official Website</ProjectName>
                <img src={Content} alt="Background"/>
                <TextContent> The website was built to be seamlessly interactive, 
                intuitive and Data efficient. Written in React, the Site Synergizes 
                a unique Cultural and Contemporary outlook.  CATCHY!</TextContent>
            </RightOne>
            
        </ProjectThree>
        </Container>
       </ProjectsWrapper>
       
    )
}

const Container = styled.div `
width:100%;
@media(min-width:1200px){
    width:1000px;
    margin:auto;
}
@media(max-width:1199px){
    width:950px;
    margin:auto;
}
@media(max-width:991px){
    width:90%;
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
justify-content:center;

@media(max-width:991px){
    flex-direction:column;
    width:700px;
    margin:auto;
}
@media(max-width:768px){
    
    width:500px;
    margin:auto;
}
@media(max-width:576px){
    
    width:400px;
    margin:auto;
}
@media(max-width:426px){
    
    width:330px;
    margin:auto;
}

`
const ProjectName = styled.a`
color:var(--cyan);
text-align:right;
font-size:12px;
padding-bottom:10px;

`
// const ProjectNameTwo = styled.a `
// color:var(--cyan);
// text-align:left;
// font-size:12px;
// padding-bottom:10px;
// `
const LeftOne = styled.div `

img{
    width:500px;
}
@media(max-width:576px){
    img{
        width:400px;
    }
}
@media(max-width:426px){
    img{
        width:100%;

    }
}
`
const TextContent = styled.div `
position:absolute;
z-index:2;
color:white;
margin-top:-110px;
margin-left:-60px;
font-size:14px;
width:310px;
border-bottom-width:4px;
border-top-width:1px;
-webkit-transform: perspective(600px) rotateX(-20deg);
@media(max-width:991px){
    width:300px;
    margin-left:25px;
    margin-top:-110px; 
}
@media(max-width:576px){
    margin-top:-90px;
    width:250px;
    margin-left:15px;
    font-size:12px;
}
@media(max-width:375px){
    margin-top:-90px;
    width:250px;
    margin-left:10px;
    font-size:12px;
}
`
// const TextContentTwo = styled.div `
// position:absolute;
// z-index:2;
// color:white;
// margin-top:-110px;
// margin-left:-60px;
// font-size:14px;
// width:310px;
// border-bottom-width:4px;
// border-top-width:1px;
// -webkit-transform: perspective(600px) rotateX(-20deg);
// @media(max-width:991px){
//     width:300px;
//     margin-left:25px;
//     margin-top:-110px; 
// }
// @media(max-width:576px){
//     margin-top:-90px;
//     width:250px;
//     margin-left:15px;
//     font-size:12px;
// }
// @media(max-width:375px){
//     margin-top:-90px;
//     width:250px;
//     margin-left:10px;
//     font-size:12px;
// }
// `
const RightOne = styled.div `
text-align:right;
img{
    width:350px;
    z-index:1;
    margin-left:-250px;
}
div{
    text-align:left;
}
@media(max-width:991px){
    width:50%;
    margin:auto;
    img{
       width:100%;
       margin-top:-50px;

    }
    div{
        text-align:center;
    }
}
@media(max-width:768px){
    width:70%;
}
@media(max-width:426px){
   width:80%;   
}
`

// const ProjectTwo = styled.div `
// display:flex;
// align-items:center;
// padding-top:100px;
// padding-bottom:80px;
// justify-content:center;

// @media(max-width:991px){
//     flex-direction:column;
//     width:700px;
//     margin:auto;
// }
// @media(max-width:768px){
    
//     width:500px;
//     margin:auto;
// }
// @media(max-width:576px){
    
//     width:400px;
//     margin:auto;
// }
// @media(max-width:426px){
    
//     width:330px;
//     margin:auto;
// }
// `
// const LeftTwo = styled.div `
// img{
//     width:492px;
//     z-index:1;
//     position:relative;
// }

// `
// const RightTwo = styled.div `
// img{
//     width:500px;
// }
// @media(max-width:576px){
//     img{
//         width:400px;
//     }
// }
// @media(max-width:426px){
//     img{
//         width:100%;

//     }
// }

// `

const ProjectThree = styled.div `
display:flex;
align-items:center;
padding-top:100px;
padding-bottom:80px;
justify-content:center;

@media(max-width:991px){
    flex-direction:column;
    width:700px;
    margin:auto;
}
@media(max-width:768px){
    
    width:500px;
    margin:auto;
}
@media(max-width:576px){
    
    width:400px;
    margin:auto;
}
@media(max-width:426px){
    
    width:330px;
    margin:auto;
}
`
