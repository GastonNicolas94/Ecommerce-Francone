import { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

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
      <div>
        <center>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <p>{product.category}</p>
          <p>{product.sport}</p>
          {
            (inputType === 'button') ?
              <ItemCount stock={25} initial={5} onAdd={onAdd}/>
        
            :
              <InputCount />
          }
        </center>
      </div>
    </>
  )
}

export default ItemDetail