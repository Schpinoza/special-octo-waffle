
import { NavLink as Link , Link as BrandName } from 'react-router-dom';
import styled from 'styled-components';


export const Dropbtn = styled.button`

`
export const Links = styled.div`
    display: flex;
    position:relative;
    left:150px;
    top:15px;

`

export const Brand = styled(BrandName)`
color:#FFC0CB;
text-decoration:none;
font-weight: 700;
font-size:3rem;
position:relative;
left:10px;
top:20px;
letter-spacing:1px;

` 
export const Nav = styled.nav`
background: #FFFDD0;
height: 85px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
position:relative;
left:200px;
top:-50px;
color: #808080;
text-decoration: none;
padding: 1rem;
margin:auto;
cursor: pointer;
&.active {
    height:1.5rem;
    border-radius: 25px;
    background: rgba(128,128,128,0.125);
	color: #000000;
}
@media(max-width: 1450px){
   

}
`;


export const NavMenu = styled.div`

/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	${'' /* display: none; */}
}
`;

export const NavBtn = styled.nav`
position:static;
left:10px;
display: flex;
align-items: center;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
position:relative;
top:10px;
border-radius: 30px;
background: rgba(128,128,128,0.25);
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;
