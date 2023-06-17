import { useState } from "react"

const ItemCount = ({initial=1, stock=15, onAdd}) => {
    const [ count, setCount] = useState(initial)

    const handleSuma = () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }
    const handleRestar = () =>{
        if(count > initial){
            setCount(count - 1)
        }
    }

    const handleOnAdd = ()=>{
        onAdd(`Total de ${count}`)

        
    }

  return (
    <div className="card" >
        <div className="card-body row">
            <div className="col">
            <button className="btn btn-outline-danger w-100" onClick={handleRestar}> - </button>

            </div>
            <div className="col">
            <center>
            <label>{count}</label>

            </center> 
 
            </div>
            <div className="col">
            <button className="btn btn-outline-danger w-100" onClick={handleSuma }> + </button>

            </div>
        </div>
        <div className="card-footer">
            <button className="btn btn-outline-danger w-100" onClick={handleOnAdd}>Comprar</button>
        </div>


    </div>
  )
}

export default ItemCount