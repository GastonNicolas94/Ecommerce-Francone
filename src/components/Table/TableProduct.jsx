import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useCartContext } from '../../context/CartContext'
import Tbody from './Tbody'
import Thead from './Thead'


const TableProduct = ({headers}) => {

  const {cartList, removeFromCart, amount} = useCartContext()

  const [anyProducts, setAnyProducts] =useState(false)

  const onRemove = ({item}) => {

    console.log(`ITEM QUE SE DESEA ELIMINAR ${item.id}`)

    // removeFromCart({item})

  }

  useEffect(() => {

    (cartList.length > 0) ? setAnyProducts(true) : setAnyProducts(false)


  },[cartList])

  return (
    <>
      {
        anyProducts ?

          <Table striped bordered hover size="sm">
            <Thead headers={headers}/>
            <Tbody cartList={cartList} amount={amount} onRemove={onRemove}/>
          </Table>
        :
          <h3>ESTAMOS ESPERANDO SU COMPRA</h3>
        
      }
    
    </>
  )
}

export default TableProduct
