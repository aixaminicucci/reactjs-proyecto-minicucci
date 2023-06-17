import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({producto}) => {

    const onAdd = (cant)=>{
        console.log(cant)
        console.log(producto)
    }

    return (
        <div className="container mt-5">
            <div className="row"> 
                <div className="col-6">
                      <img  src = {producto.foto} className='w-50'/>
                      <h2 className="descripcion">Nombre: {producto.nombre}</h2> 
                      <h4 className="descripcion">Categoría: {producto.categoria}</h4> 
                      <h4 className="descripcion">Precio: {producto.precio}</h4>
                       
                </div>
                <div className="col-6">
                    <ItemCount onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail