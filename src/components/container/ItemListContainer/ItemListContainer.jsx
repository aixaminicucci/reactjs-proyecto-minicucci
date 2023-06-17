import { useState, useEffect } from 'react'
import {  useParams } from 'react-router-dom'
import { gFetch } from '../../../utils/gFetch'
import ItemList from '../../ItemList/ItemList'

export const ItemListContainer  = ( {} ) => {  
    
    const [productos, setProductos] = useState([]) 
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()
    
    useEffect(()=>{
        if (categoryId) {
            gFetch()
                .then(respuestaPromesa => {           
                   setProductos(respuestaPromesa.filter(items => items.categoria === categoryId))
                })        
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))             
        } else {
            gFetch()
                .then(respuestaPromesa => {        
                   setProductos(respuestaPromesa)
                })        
                .catch(err => console.log(err))
                .finally(()=> setLoading(false))               
        }
    }, [categoryId])
    
    return (
        <div className='container'>             
            {   loading 
                ? 
                    <center>
                        <h1>Aguarde un momento...</h1>
                    </center>
                :
                
                    <ItemList productos={productos}/>
            }
        </div>
    )
}