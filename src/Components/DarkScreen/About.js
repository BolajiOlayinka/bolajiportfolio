import React,{useState} from 'react';
import styled from 'styled-components';
import Picture from "../../assets/icon.jpg";
import Tools from '../../assets/tool.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";
// import { faTools } from "@fortawesome/free-solid-svg-icons";
export default function About() {
const [overlay, setOverlay]= useState("transparent");
// const [gradientOne, setGradientOne] = useState("linear-gradient(to left bottom,#00ffff, #2900ff)");
// const [gradientTwo, setGradientTwo] = useState("linear-gradient(to left bottom, #ff0000, #0000ff)")
const Dim = ()=>{
    setOverlay("#000000");
    // setGradientOne("linear-gradient(to left bottom, red, blue");
    // setGradientTwo("linear-gradient(to left bottom,red, blue")
    // console.log(gradientOne)
    // console.log(gradientTwo)
}
const unDim = ()=>{
    setOverlay("transparent");
    // setGradientOne("linear-gradient(to left bottom,#00ffff, #2900ff)")
    // setGradientTwo("linear-gradient(to left bottom, #ff0000, #0000ff");
    
}
    return (
       <Container>
            <Wrapper>
                <AboutBody>
                    Hello, My Name is Bolaji, My Friends call me B.j. Although i am based in Lagos (Nigeria), 
                    My work isn't limited by space as i work with Engineers over the world. 
                    <br/>
                    I work on creating solutions on the internet, Although i have experience workign on the backend, 
                    manipulating data, storing data, creating APIS, i enjoy more but creating what <span>U & I</span> see.
                    <br/>
                    I create pixel perfect, scalable and highly performant products. Here are technologies i use and i have used:
                    Skills: <br/>
                    <div><ToolBoxIcon icon={faToolbox}/> <div>Technologies / Libraries / Apis / Platforms / Tools / Storage</div></div>
                    <TechStack>
                    <ul>
                        <li>Javacript</li>
                        <li>React</li>
                        <li>Node</li>
                        <li>Python</li>
                        <li>Wordpress</li>
                        <li>Git</li>
                        <li>Liquid</li>
                        <li>Express</li>
                        <li>Mongo DB</li>
                        <li>Facebook SDK</li>
                        
                    </ul>
                    <SmallAboutPix>
                    <BackgroundTwo>

</BackgroundTwo>
<BackgroundOne>

</BackgroundOne>

<ImageSection onMouseEnter={Dim} onMouseLeave={unDim} >
<BackgroundOverlay overlay={overlay}/>
<img src={Picture} alt="Bolaji Olayinka"/>
</ImageSection>
                    </SmallAboutPix>
                    </TechStack>


                </AboutBody>
                <AboutPix>
               
                <BackgroundTwo>

                </BackgroundTwo>
                <BackgroundOne>

                </BackgroundOne>

                <ImageSection onMouseEnter={Dim} onMouseLeave={unDim} >
                <BackgroundOverlay overlay={overlay}/>
                <img src={Picture} alt="Bolaji Olayinka"/>
                </ImageSection>
                </AboutPix>

            </Wrapper>
       </Container>
    )
}

const Container = styled.div `
width:100%;
@media(min-width:1200px){
    width:1000px;
    margin:auto;
}@media(max-width:1199px){
      width:90%;
      margin:auto;
  }
@media(max-width:1024px){
    width:90%;
    margin:auto;
}
@media(max-width:576px){
    width:90%;
    margin:auto;
}
`
const Wrapper =styled.div `
display:flex;
padding-top:80px;
padding-bottom:80px;
@media(max-width:577px){
    padding-top:30px;
    padding-bottom:30px;
    flex-direction:column;
}
`
const BackgroundOverlay = styled.div`	
  background:${(props) => props.overlay} !important;
  opacity: 0.7;	
  width:150px;
  position: absolute;	
  bottom: 0;	
  top: 0;	
  left: 0;	
  right: 0;	
  z-index:4;
  margin:auto;
  @media(max-width:577px){
    width:100px;
  }
  @media(max-width:426px){
      width:250px;
      width:250px;
  }
`;
const AboutBody = styled.div `
width:580px;
color:white;
font-size:16px;
line-height:32px;
span{
    color:var(--cyan);
}
div{
    color:var(--cyan);
    padding-top:5px;
    display:flex;
    align-items:center;
}
@media(max-width:1024px){
    width:530px;
}
@media(max-width:991px){
    width:100%;
}
@media(max-width:577px){
    font-size:14px;
}
@media(max-width:426px){
    width:90%;
    margin:auto;
}
`
const ToolBoxIcon = styled(FontAwesomeIcon)`
margin-right:10px;
font-size:24px;
`
const AboutPix = styled.div `
width:350px;
margin-top:5px;
text-align:center;

@media(max-width:991.1px){
    display:none;
}
@media(max-width:426px){
    width:250px;
    padding-top:20px;
    padding-bottom:20px;
    display:block;
    margin:auto;
}
`
const SmallAboutPix = styled.div `
width:350px;
text-align:center;
justify-content:center;
@media(min-width:991px){
    display:none!important;
}
@media(max-width:577px){
    width:200px;
}
@media(max-width:426px){
    display:none!important;
}

`
const ImageSection = styled.div `
position:relative;
width:150px;
margin:auto;
img{
    width:150px;
    position:relative;
    z-index:2;
}
@media(max-width:577px){
    width:100px;

  img{
      width:100px;
  }
}
@media(max-width:426px){
    width:250px;
    
  img{
      width:250px;
     
  }
}
`
const BackgroundOne = styled.div `
position:absolute;
background:linear-gradient(to left bottom,#00ffff, #2900ff);
width:155px;
height:155px;
z-index:0;
margin-left:95px;
margin-top:-5px;
border-radius:0px 10px 0px 10px;
@media(max-width:991px){
    margin-left:-5px;
    margin-top:10px;
}
@media(max-width:577px){
    width:100px;
    height:100px;
}
@media(max-width:426px){
    width:250px;
    height:250px;
    margin-top:5px;
    margin-left:-5px;
}
`
const BackgroundTwo =styled.div `
position:absolute;
background:linear-gradient(to left bottom, #ff0000, #0000ff);
width:155px;
height:155px;
z-index:1;
margin-left:100px;
border-radius:0px 10px 0px 10px;
@media(max-width:991px){
    margin-left:5px;
}
@media(max-width:577px){
    width:100px;
    height:100px;
}
@media(max-width:426px){
    width:250px;
    height:250px;
    margin-left:5px;
    margin-top:-5px;
}
`
const TechStack = styled.div `
width:500px;

display:flex;
ul{
    list-style-image: url(${Tools});
    display:flex;
    flex-wrap:wrap;
    margin-left:-1em;
}
li{
    padding-left:5px;
    padding-right:5px;
    padding-top:10px;
    width:150px;
}

@media(max-width:991px){
    width:100%;
    li{
        width:135px;
    }
}
@media(max-width:577px){
    align-items:Center;
    ul{
        font-size:12px;
    }
    li{
        width:120px;
        padding-top:5px;
    }
}
`

