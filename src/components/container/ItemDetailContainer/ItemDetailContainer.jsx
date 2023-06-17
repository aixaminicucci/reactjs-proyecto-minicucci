import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../../utils/gFetch"
import ItemDetail from "../../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [ producto, setProducto ] =  useState({})
    const {detaliId} = useParams()
    console.log(detaliId)

    useEffect(()=>{
        gFetch(detaliId)
        .then(resp => setProducto(resp))        

    }, [])
    console.log(producto)
    return (
        <ItemDetail producto={producto} />
    )
}

export default ItemDetailContainer