import React from 'react'
import styled from 'styled-components'
import flipkartImg from '../img/flipkart.png'
import burberry from '../img/burberry.png'
import nykaa from '../img/nykaa.png'
import Z5 from '../img/Z5.png'
import { Slide } from "react-awesome-reveal";
const Projects = () => {
  return (
    <DIV>
         <Slide direction="down">
        
        <h1>MY PROJECTS</h1>
      </Slide>
       
       <MAIN>
      
        
        
        
        {/* <img src={nykaa} alt="" /> */}
       <div> <Slide direction="left">
        <img src={flipkartImg} alt="" />
        <h3>FLIPKART CLONE</h3>
       
        </Slide></div>
       <div>
        <Slide direction="up">
        <img src={burberry} alt="" />
        <h3>BURBERRY CLONE</h3>
       
        </Slide></div>
       <div> <Slide direction="right">
         
         <img src={Z5} alt="" />
         <h3>ZEE5 CLONE</h3>
        
         </Slide></div>
       
       
       
       </MAIN>
    </DIV>
  )
}

export default Projects

const DIV=styled.div`
width:98%;
height:auto;


h1{
   
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
    color:white;
  
}
h3
{
   
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
    color:white;  
}
img{
    width:90%;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

`
const MAIN =styled.div
`
width:100%;
   
display: flex;
justify-content: space-evenly;
padding:10px;
gap:30px;

margin-Bottom:20px;

`