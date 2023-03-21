import React from 'react'
import styled from 'styled-components'
import { MdAlternateEmail } from "react-icons/md";
import { Slide } from "react-awesome-reveal";
const Contact = () => {
  return (
    <DIV>
      <DIV1>
        <div>
           <h4>Address</h4> 
        </div>
      </DIV1>
      <Slide direction="right">
      <DIV2>
     
        <input type="text" placeholder='Enter Your Name'/><br/>
        
      
        <input type="text" placeholder='Enter Your Email'/><br/>
        
      
        <input className='msg' type="text" placeholder='Enter Your Message'/><br/>
        
      
      <button>Submit</button>

      </DIV2>
      </Slide>
    </DIV>
  )
}

export default Contact
const DIV =styled.div`
margin-top:50px;
width:90%;
height:auto;
display:flex;
justify-content:space-between;
input{
    width:100%;
    height:30px;
    margin-Bottom:5px;

}
.msg{
    width:100%;
    height:150px; 
}
button{
    
    padding:10px 50px;
    margin-left:15px;
    margin-right:400px;
    margin-top:5px;
}
h4{
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
}
`

const DIV1 =styled.div`
margin:auto;
width:50%;
height:400px;
border:1px solid red

`
const DIV2 =styled.div`
margin:auto;
width:60%;
padding:20px;
height:auto;
border:1px solid gray;
background:white;




`
