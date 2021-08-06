import React from 'react';
import styled from 'styled-components';
// import Standage from '../../assets/Standage.png';
import Nodomaru from '../../assets/Nodomaru.png';
import Freeki from '../../assets/Freeki.png';
import Logilab from '../../assets/Logilab.png';
import Digitrad from '../../assets/Digitrad.png';
import Content from '../../assets/Content.png';
import BG from '../../assets/bg.png';

export default function Projects() {
    return (
        
       <ProjectsWrapper>
       <Container>
       <ProjectTwo>
        <LargeLeftTwo>
        <LeftTwo>
        <ProjectNameTwo href="https://freeki.com/">Nodomaru Official Website</ProjectNameTwo>
        <img src={Content} alt="Background"/>
        <TextContentTwo>Freeki is an e-commerce company that carries out freights/import and exports among countries.
                    It is built to be highly performant using Html, Css and Javscript.</TextContentTwo>
            </LeftTwo>
            </LargeLeftTwo>
            
            
            <RightTwo>
                <a href="https://freeki.com/">
                <img src={Freeki} alt="Nodomaru Website"/>
                </a>
            </RightTwo>
            <SmallLeftTwo>
            <LeftTwo>
            <ProjectNameTwo href="https://logilab.world/">Nodomaru Official Website</ProjectNameTwo>
        <img src={Content} alt="Background"/>
        <TextContentTwo> Logilab is a japanese logistics company, it is in partnership with Mitsuibishi Logistics to carry out its Logistics operations.
            Built with React,Context Api and Wordpress Api
            
        </TextContentTwo>
                </LeftTwo>
            </SmallLeftTwo>
        </ProjectTwo>
        <ProjectOne>
            <LeftOne>
            <a href="https://logilab.world/">
                <img src={Logilab} alt="Logilab"/>
                </a>
            </LeftOne>
            <RightOne>
                <ProjectName href="/">Standage Official Website</ProjectName>
                <img src={Content} alt="Background"/>
                <TextContent> Logilab is a japanese logistics company, it is in partnership with Mitsuibishi Logistics to carry out its Logistics operations.
            Built with React,Context Api and Wordpress Api
                </TextContent>
            </RightOne>
        </ProjectOne>

        <ProjectTwo>
        <LargeLeftTwo>
        <LeftTwo>
        <ProjectNameTwo href="https://ndmr.co.jp/">Nodomaru Official Website</ProjectNameTwo>
        <img src={Content} alt="Background"/>
        <TextContentTwo>A consulting and real estate company that presents the simplistic view of life, a good mental welbeing and a strong financial position. Built using React, Context Api and Wordpress Api.</TextContentTwo>
            </LeftTwo>
            </LargeLeftTwo>
            
            
            <RightTwo>
                <a href="https://ndmr.co.jp/">
                <img src={Nodomaru} alt="Nodomaru Website"/>
                </a>
            </RightTwo>
            <SmallLeftTwo>
            <LeftTwo>
            <ProjectNameTwo href="https://ndmr.co.jp/">Nodomaru Official Website</ProjectNameTwo>
        <img src={Content} alt="Background"/>
        <TextContentTwo> A consulting and real estate company that presents the simplistic view of life, a good mental welbeing and a strong financial position. Built using React, Context Api and Wordpress Api.</TextContentTwo>
                </LeftTwo>
            </SmallLeftTwo>
        </ProjectTwo>

        <ProjectThree>
        <LeftOne>
        <a href="https://digitrad.world/">
                <img src={Digitrad} alt="Digitrad Website"/>
                </a>
            </LeftOne>
            <RightOne>
            <ProjectName href="https://digitrad.world/">Digitrad Official Website</ProjectName>
                <img src={Content} alt="Background"/>
                <TextContent>  Digitrad is a trading, logistics and payment platform. 
                    It carries out transactions using cryptocurrencies.It has a marketplace <a href="https://app.digitrad.world/">Digitrad</a> ( a cryptocurrency B2B e-commerce website)</TextContent>
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
    padding-top:50px;
    padding-bottom:50px;
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
${'' /* @media(max-width:991px){
    display:none;
} */}
`
const ProjectNameTwo = styled.a `
color:var(--cyan);
text-align:left;
font-size:12px;
padding-bottom:10px;
${'' /* @media(max-width:991px){
    display:none;
} */}
`
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
const TextContentTwo = styled.div `
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

const ProjectTwo = styled.div `
display:flex;
align-items:center;
padding-top:100px;
padding-bottom:80px;
justify-content:center;
width:100%;

@media(max-width:991px){
    flex-direction:column;
    width:700px;
    margin:auto;
    padding-top:50px;

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
const LeftTwo = styled.div `
text-align:left;
z-index:1;
position:relative;
margin-left:150px;
img{
    width:350px;
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
       margin:auto;
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
const RightTwo = styled.div `
margin-left:-100px;

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
@media(max-width:991px){
    margin:auto;
}

`
const SmallLeftTwo = styled.div `
@media(min-width:991.1px){
display:none;
}
`
const LargeLeftTwo = styled.div `
@media(max-width:991px){
display:none;
}
`

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
    padding-top:50px;
    padding-bottom:50px;
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
