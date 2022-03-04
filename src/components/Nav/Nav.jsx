
import Nav from 'react-bootstrap/Nav'
import Navdropdown from '../NavDropdown/NavDropdown'
import {BsFillCartFill} from "react-icons/bs";

const NavMenu = ({items, links}) => {

    const ItemsNavLink = ({links}) => {
        
        const listNavLinks = links.map((link) => 
        (
            <Nav.Link href='#' key={link} >{link.toUpperCase()}</Nav.Link>
        ))

        return (
            listNavLinks
        )
    }

    return (
      <>
          <Nav className="me-auto">
                <Navdropdown items={items} title='CATEGORIAS'/>
                <ItemsNavLink links={links}/>
          </Nav>
          <Nav>
              <Nav.Link eventKey={2} href="#memes">
                  <BsFillCartFill />
              </Nav.Link>
          </Nav>
      </>

    )
}

export default NavMenu