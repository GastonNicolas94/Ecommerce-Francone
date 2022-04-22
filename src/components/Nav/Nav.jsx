
import Nav from 'react-bootstrap/Nav'
import Navdropdown from '../NavDropdown/NavDropdown'
import Widget from '../Widget/Widget'
import { NavLink } from 'react-router-dom'


const NavMenu = ({items, links}) => {

    const ItemsNavLink = ({links}) => {
        
        const listNavLinks = links.map((link) => 
        (
            <NavLink className='navbar-NavLink' to={`/category/${link}`} key={link} >{link}</NavLink>
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
              <NavLink className='navbar-NavLink' to='cart'>
                < Widget />
              </NavLink>
          </Nav>
      </>

    )
}

export default NavMenu