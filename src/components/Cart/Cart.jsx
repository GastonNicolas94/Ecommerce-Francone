import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { Order } from '../Order/Order'


const Cart = () => {

  const {cartList,amount,removeFromCart, clear} = useCartContext()

  const [total, setTotal] = useState(0)

  useEffect(() => {

    setTotal(amount);

  },[cartList])

  return (
    <>
<div className="container pt-4">
      <div className="row mb-5 pb-5 m-4">
        <div className="col col-12 col-md-8 cartList">
          <div className="d-flex flex-row">
            <h3 className="w-75">Mi carrito</h3>
            <Link to='/'>
              <Button className="btn btn-success">SEGUIR COMPRANDO</Button>
            </Link>
            <Button className="btn btn-secondary w-25" onClick={() => clear()}>VACIAR CARRITO</Button>
          </div>
          <hr className="mb-3" />
          {
            cartList.map(product =>
              <div key={product.id} className="row shadow-sm rounded-3 my-2">
                <li className="cartList_items">
                  <img src={`${product.img}`} alt={product.name} />
                  <h6 className="cartList_title">{product.name}</h6>
                  <h6 className="cartList_cantidad">X{product.buy}</h6>
                  <h6 className="cartList_price"><strong>$ {(product.price * product.buy)}</strong></h6>
                  <Button onClick={() => removeFromCart(product)} className="btn btn-danger my-2 btn-CartItem">X</Button>
                </li>
              </div>
            )}
        </div>
        <div className="col">
          <div className="card shadow rounded">
            <div className="card-header text-center"><h5>Resumen del pedido</h5></div>
            <div className="card-body">
              <div>
                <table className="table table-light text-center table-borderless">
                  <caption className="mt-4">
                    <h6>Subtotal: $ {total}</h6>
                  </caption>
                  <tbody>
                    {
                      cartList.map(product =>
                        <tr key={product.id}>
                          <td>{product.name}</td>
                          <td>{product.buy}</td>
                          <td>$ {(product.price * product.buy).toLocaleString()}</td>
                        </tr>
                      )}
                  </tbody>
                </table>
                <Order/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    )
  }
  
  export default Cart
  