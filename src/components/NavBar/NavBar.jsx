import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import NavMenu from '../Nav/Nav'
import "./NavBar.css"
import {default as logo} from '../../logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const categories = ['FUTBOL','BASQUET','RUGBY','CROSSFIT','RUNNING','GIMNASIO']
    const links = ['REMERAS','CALZAS','GUANTES','SHORTS','TODOS LOS PRODUCTOS']
  return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Link to='/'>
                    <Navbar.Brand>
                        <img className='logo' alt='' src={logo}/>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    < NavMenu items = {categories} links={links}/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </>

  )
}

export default NavBar
