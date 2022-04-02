import { useEffect, useState } from 'react'
import TableProduct from '../Table/TableProduct'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button'
import { useCartContext } from '../../context/CartContext'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'
import './Cart.css'

const Cart = () => {

  const headers = ['#','PRODUCTO','CANTIDAD','PRECIO','SUBTOTAL']

  const {cartList,amount} = useCartContext()

  const [anyProducts, setAnyProducts] =useState(false)

  const [total, setTotal] = useState(0)

  useEffect(() => {

    setTotal(amount);

    (cartList.length > 0) ? setAnyProducts(true) : setAnyProducts(false);


  },[cartList])

  return (
    <>
    <Container className='container-cart'>
      {
        anyProducts ?
        <>
          <h3>CARRITO DE COMPRAS</h3>

          <Row>
            <Col>
              <TableProduct headers={headers}/>
            </Col>
            <Col className='summary'>
              <Card>
                <Card.Header>RESUMEN DE COMPRA</Card.Header>
                <Card.Body>
                  <Card.Text>
                    <h3>{`$ ${total}`}</h3>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button variant='outline-success'>INICIAR PAGO</Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
          
        </>
        :
        <>
          <h3>ESTAMOS ESPERANDO SU COMPRA</h3>
          <Link to="/">
            <Button variant='outline-success'>IR A COMPRAR</Button>
          </Link>
        </>
      }

    </Container>


    </>
    )
  }
  
  export default Cart
  