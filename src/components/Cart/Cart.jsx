import { useCartContext } from "../../context/CartContext"
import TableProduct from '../Table/TableProduct'

const Cart = () => {

  const headers = ['#','PRODUCTO','CANTIDAD','PRECIO','TOTAL']

  return (
      <TableProduct headers={headers}/>
    )
  }
  
  export default Cart
  