import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../Imagenes/Logo Troquelcart1.png'
import './NavBar.css';


const NavBar = () => {
  return (
    <header>
        <img className='logo' src= {logo} alt="logo troquelcart" />

        <nav>
            <ul>
                <li>Corrugados</li>
                <li>Cartulinas</li>
                <li>Packaging</li>
            </ul>
        </nav>

        <CartWidget/>



    </header>
  )
}

export default NavBar