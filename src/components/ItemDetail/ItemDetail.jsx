import { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const InputCount = () => {

  return(
    <>
        <div className='d-flex flex-column'>
            <div className='pt-2'>
                <Link to='/'>
                    <Button className="btn btn-primary">SEGUIR COMPRANDO</Button>
                </Link>
            </div>
            <div className='pt-2'>
                <Link to='/cart'>
                    <Button className="btn btn-secondary">FINALIZAR COMPRA</Button>
                </Link>
            </div>
        </div>
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
        <div className="row mb-5">
            <div className="col">
              <figure className={product.stock === 0 ? 'figure tag tag-out':''}>
                <img width="350" height="300" src={`${product.img}`} alt="" />
              </figure>
            </div>
            <div className="col">
                <Card className='h-100 w-100'>
                    <Card.Header>
                        <strong><h3>{product.title}</h3></strong>
                    </Card.Header>
                    <Card.Body>
                        <p>{product.category} - {product.name}</p>
                        <h4>$ {product.price}</h4>
                        <h6>Cantidad disponible: {product.stock}</h6>
                    </Card.Body>
                    <Card.Footer className="detail-container_buy">
                      {
                      (inputType === 'button') ?
                        <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>
                
                      :
                        <InputCount />
                      }
                    </Card.Footer>
                </Card>
            </div>
        </div>
    </>
  )
}

export default ItemDetail
