import { CartWidget } from ". ./CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <div className="divi">
                <h1 className= "nombre">Le Péché</h1>
                <ul className="lista"> 
                    <li>Dulces</li>
                    <li>Salados</li>
                    <li>Veganos</li>
                    <li><CartWidget/></li>
                </ul>
                
            </div>
        </nav>
        )
    }
export default NavBar