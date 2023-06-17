import { Link } from "react-router-dom"

const Item = ({ producto }) => {
    return (
        <div className='col-4 p-2 mt-5'>
            <div key={producto.id} className='card w-100 text-center shadow'>
                <div className='card-head'>
                    {producto.nombre}
                </div>
                <div className='card-body'>
                    <img src={producto.foto} className='w-100' />
                        <h6> Categoría: {producto.categoria}</h6>
                        <h6>Precio: {producto.precio}</h6>
                </div>
                <div className='card-footer'>
                    <Link to={`/detail/${producto.id}`}>
                        <button className='ver-mas' >Ver más</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Item