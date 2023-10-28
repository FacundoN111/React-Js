import './Item.css';
import { Link } from 'react-router-dom';



const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        
        <img src={img} alt={nombre} />

        <div className='NombrePrecioId'>
          <h4>Nombre: {nombre} </h4>
          <p>Precio: {precio} </p>
          <p>ID: {id} </p>
        </div>

        <Link to={`/item/${id}`}> Ver Detalles </Link>
        
    </div>
  )
}

export default Item