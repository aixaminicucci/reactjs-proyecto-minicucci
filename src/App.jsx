import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import './App.css'
function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer saludo= {'Bienvenidos/as a Le Péché, un sitio para que encuentres eso rico que estás buscando'} />
    </>
  )
}
export default App
