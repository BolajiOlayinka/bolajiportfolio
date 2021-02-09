import React from 'react';
import styled from 'styled-components';

export default function Divider() {
    return (
        <Wrapper>
            <DividerContainer>
            <Header><span>MY</span> PROJECTS</Header>
            <hr/>
            
            </DividerContainer>
            <Few>*** ( Few of the Projects I have worked on in the last 3 months ) ***</Few>
        </Wrapper>
    )
}

const Wrapper = styled.div `
@media(min-width:1200px){
    width:1000px;
    margin:auto;
}
`
const DividerContainer = styled.div `
display:flex;
justify-content:center;
align-items:center;
width:800px;
margin:auto;
@media(max-width:1024px){
    width:80%;
    margin:auto;
}
@media(max-width:768px){
    width:90%;
    margin:auto;
}
hr{
border:1px solid #eaeaea;
width:70%;
@media(max-width:991px){
    width:60%;
    margin:auto;
}
@media(max-width:768px){
    width:300px;
    margin:auto;
}
@media(max-width:576px){
    width:250px;
    margin:auto;
}
@media(max-width:426px){
    width:150px;
    margin:auto;
}
}

`
const Header = styled.div `
font-size:24px;
color:white;
width:20%;
display:flex;
align-items:center;
@media(max-width:991px){
    width:170px;
    margin:auto;
}
@media(max-width:768px){
    width:170px;
    margin:auto;
}
@media(max-width:576px){
    font-size:16px;
    width:130px;
    margin:auto;
}
@media(max-width:426px){
    font-size:14px;
    width:80px;
    margin:auto;
}
span{
    font-family: 'Salsa', cursive;
    font-size:36px;
    color:var(--royalBlue);
    padding-right:10px;

    @media(max-width:576px){
    font-size:24px;
}
@media(max-width:576px){
    font-size:20px;
 
}
}
`
const Few = styled.div `
color: #707070;
text-align:center;
width:80%;
margin:auto;
@media(max-width:768px){
    font-size:12px;
}
@media(max-width:576px){
    padding-top:10px;
}
`