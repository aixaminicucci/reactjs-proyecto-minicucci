import { Container, Nav, Navbar} from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { CartWidget } from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="danger" >
            <Container>
                <NavLink className='nombre' to="/">Le péché</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavLink className= {({ isActive })=> isActive ? 'btn btn-danger' : 'btn btn-dark'} to="/categoria/dulce">Dulce</NavLink>
                    <NavLink className={({ isActive })=> isActive ? 'btn btn-danger' : 'btn btn-dark'} to="/categoria/salado">Salado</NavLink>
                </Nav>
                <Nav>
                    <Link to='/cart' ><CartWidget/></Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default NavBar