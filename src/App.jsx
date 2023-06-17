
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ItemListContainer } from './components/container/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer saludo={'Bienvenidos/as a Le Péché'}/>} />
            <Route path='/categoria/:categoryId' element={<ItemListContainer saludo={'Bienvenidos/as a Le Péché'}/>} />
            <Route path='/detail/:detaliId' element={<ItemDetailContainer />}/>
         
            
            
            <Route path='*' element={<Navigate to='/'/>} />      
        </Routes>
    </BrowserRouter>
  )
}

export default App
