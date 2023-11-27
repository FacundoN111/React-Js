import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';



const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    
    <div className=   'carritoStrong'>

      <Link to="/cart">
        <img className='ImagenCarrito' src="./img/Carrito de compras.png"
        atl="Carrito de compras" />
        {
          cantidadTotal > 0 && <strong className='strong'> {cantidadTotal} </strong>
        }
        

      </Link>
    </div>
  )
}

export default CartWidget