import React from 'react';
import './CartWidget.css';
import ImgCarritoCompra from '../Imagenes/Carrito de compras.png';




const CartWidget = () => {

  //const ImgCarritoCompra = "https://static.vecteezy.com/system/resources/previews/007/793/926/non_2x/shopping-cart-icon-vector.jpg"

  

  return (
    
    <div className= 'carritoStrong'>
        <img className='ImagenCarrito' src={ImgCarritoCompra} />
        <strong className='strong'> 3 </strong>
    </div>
  )
}

export default CartWidget