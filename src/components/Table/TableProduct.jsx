import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Table from 'react-bootstrap/Table'
import { useCartContext } from '../../context/CartContext'
import Thead from './Thead'
import './Table.css'


const TableProduct = ({headers}) => {

  const {cartList, removeFromCart} = useCartContext()

  const onRemove = ({item}) => {

    removeFromCart(item)

  }

  return (
    <>
      <Table striped bordered hover size="sm">
        <Thead headers={headers}/>
        <tbody>
          {cartList.map((item, index) => 
            <tr key={item.id}>
                <td>{index}</td>
                <td><img src={item.img} className="img-table-cart"/></td>
                <td>{item.buy}</td>
                <td>{`$ ${item.price}`}</td>
                <td>{`$ ${item.price * item.buy}`}</td>
                <td><Button variant='outline-danger' size='sm' onClick={() => onRemove({item})}>ELIMINAR</Button></td>
            </tr>)
          }
        </tbody>
        
      </Table>
    </>
  )
}

export default TableProduct
