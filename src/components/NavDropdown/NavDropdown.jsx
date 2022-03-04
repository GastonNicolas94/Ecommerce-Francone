import NavDropdown from 'react-bootstrap/NavDropdown'

const Navdropdown = ({items, title}) => {

    const ItemDropDown = ({items}) => {
        
        const listNavDropdown = items.map((item) => 
        (
            <NavDropdown.Item href="#" key={item}>{item.toUpperCase()}</NavDropdown.Item>
        ))
        
        return (
            listNavDropdown
        )
    }
  
    return (
        <>
            <NavDropdown title={title} id="collasible-nav-dropdown">
                <ItemDropDown items={items}/>
            </NavDropdown>
        </>
    )
}

export default Navdropdown
