import React from 'react'
import AvilableIceCream from './AvilableIceCream'
import img from "../../assets/mainicecreamshop.jpg"
import styled from 'styled-components'

const ImgText = styled.div`
position:absolute;
top:150px;
left:40%;
text-align:center;
display:block;
font-size:2rem;
color:yellow;
@media(max-width: 1065px){
    left:35%;
}



`
const IceCream = () => {
  return (
  <>
    <div >
        <ImgText>Pick your ice cream!<br/> Then Enjoy it.</ImgText>
        <img style={{maxWidth:"100%"}} src={img}/>
    <AvilableIceCream/>
    </div>
  </>
  )
}

export default IceCream