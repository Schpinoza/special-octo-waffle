import React from 'react';
import { Provider } from 'react-redux'
import Navbar from './componenets/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './componenets/pages/about'
import store from './store';
import IceCream from './componenets/IceCream/IceCream';
import Footer from './componenets/UI/Footer';
import Cart from './componenets/Cart/Cart';
import Login from './componenets/User/Login'


function App() {
return (
	<Provider store = {store}>
	<BrowserRouter>
	<Navbar />
	<Routes>
		<Route path='/shop' element={<IceCream/>}/>
		<Route path='/about' element={<About/>} />
		<Route path='/cart' element={<Cart/>} />
		<Route path='/login' element={<Login/>} />
	</Routes>
	</BrowserRouter>
	<Footer/>	

	</Provider>
);
}

export default App;
