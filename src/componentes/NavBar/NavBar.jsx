import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className='logo' src={"./img/Logo Troquelcart1.png"} alt="Logo Troquelcart"/>
      </Link>
        

        <nav>
            <ul>
                 <li className='LiNav'>
                <NavLink className="Linav" to="categoria/2">Cajas de tortas</NavLink>
                </li>

                <li className='LiNav'>
                <NavLink to="categoria/3">Cajas de hamburguesas/Pizza</NavLink>
              </li>

            </ul>

        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar