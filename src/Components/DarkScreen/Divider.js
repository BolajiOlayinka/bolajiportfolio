import React from 'react';
import styled from 'styled-components';

export default function Divider() {
    return (
        <Wrapper>
            <DividerContainer>
            <Header>MEET <span>BJ</span></Header>
            <hr/>
            </DividerContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div `
@media(min-width:1200px){
    width:1200px;
    margin:auto;
}
`
const DividerContainer = styled.div `
display:flex;
justify-content:center;
align-items:center;
width:1000px;
margin:auto;
hr{
border:1px solid #eaeaea;
width:85%;
@media(max-width:991px){
    width:70%;
    margin:auto;
}
@media(max-width:768px){
    width:400px;
    margin:auto;
}
@media(max-width:576px){
    width:250px;
    margin:auto;
}
@media(max-width:426px){
    width:200px;
    margin:auto;
}
}
@media(max-width:1024px){
    width:90%;
    margin:auto;
}
@media(max-width:768px){
    width:80%;
    margin:auto;
}

`
const Header = styled.div `
font-size:24px;
color:white;
width:15%;
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
    padding-left:10px;
    @media(max-width:576px){
    font-size:24px;
}
@media(max-width:576px){
    font-size:20px;
 
}
}

`