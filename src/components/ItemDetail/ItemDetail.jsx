import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import '../ItemDetail/ItemDetail.css'

const InputCount = () => {

  return(
    <>
        <Link to='/cart'>
          <Button
            variant='outline-success'
          >
            TERMINAR MI COMPRA
          </Button>
        </Link>
        <Link to='/'>
          <Button 
            variant='outline-success'
          >
            SEGUIR COMPRANDO
          </Button>
        </Link>
    </>
    )

}


const ItemDetail = ({product}) => {

  const [inputType, setInputType] = useState('button')

  const {addToCart} = useCartContext()
  
  const onAdd = ({buy}) => {

    setInputType('input')

    addToCart({...product, buy})
  
  }

  return (
    <>
      <Container className='container-product'>
        <Row>
          <Col>
            <img className='zoom border' src={product.img}/>
          </Col>
          <Col>
            <Card className="cart">
              <Card.Body>
                <Card.Title>{`${product.name} - ${product.category}`}</Card.Title>
                <Card.Text><h3>{`$ ${product.price}`}</h3></Card.Text>
                <Card.Text><h3>This is a longer card with supporting text below as a natural
                          lead-in to additional content. This content is a little bit longer.</h3></Card.Text>
              </Card.Body>
              <Card.Footer>
                {
                  (inputType === 'button') ?
                    <ItemCount stock={25} initial={5} onAdd={onAdd}/>
              
                  :
                    <InputCount />
                }
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
      
    </>
  )
}

export default ItemDetail