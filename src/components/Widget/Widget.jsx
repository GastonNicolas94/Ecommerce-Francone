import { useEffect, useState } from "react";
import {BsFillCartFill} from "react-icons/bs";
import { useCartContext } from '../../context/CartContext'


const Widget = () => {

  const {cartList, totalItems} = useCartContext()

  const [quantityItems, setQuantityItems] = useState(0)

  useEffect(() => {

    setQuantityItems(totalItems)

  },[cartList])

  return (
    <>
    <BsFillCartFill />
    <label id="cartCount" className="badge badge-warning">{quantityItems}</label>
    </>
  )
}

export default Widget