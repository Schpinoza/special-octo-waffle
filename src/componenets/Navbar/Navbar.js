import React from 'react';
import CartIcon from '../Cart/CartIcon';
import {
Nav,
NavLink,
NavMenu,
NavBtn,
NavBtnLink,
Brand,
NavLinks,
Links,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
        <Brand to={"/"}>
            Brand Name
        </Brand>
        <Links>
		<NavLink to='/about'>
			About Us
		</NavLink>
		<NavLink to='/shop' >
			Shop
		</NavLink>
		<NavLink to='/conectus' >
			Conect Us
		</NavLink>
        </Links>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/cart'>
        <span>
            <CartIcon/>
        </span>
        Cart
        </NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
