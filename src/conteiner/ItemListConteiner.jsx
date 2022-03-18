import ItemCount from '../components/ItemCount/ItemCount'
import Spinner from '../components/Spinner/Spinner'
import Row from 'react-bootstrap/Row'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { task } from '../helpers/gFetch'
const ItemListConteiner = ({ greeting }) => {
  
  const [loading, setLoading] = useState(true)
  const [productListCard, setProductListCard] = useState([])
  const {id} = useParams()

  const handlerLoading = () => {
    setLoading(!loading)
  }

  useEffect(()=>{
      task
      .then((result) => {
        const itemsCardList = result.map((product) => 
          (
            <ItemCount key={product.id} stock={product.stock} initial={product.initial} name={product.name}/>
          )
        )
        return itemsCardList
      })
      .then((list)=>{
        setProductListCard(list)
        handlerLoading()
      })
      .catch((err) => {
        console.log(err)
        return err
      })
      .finally(
        
      )

  },[])

  return (
    <>
      <div>{greeting}</div>
      {
        loading ? 
          <Spinner />
        :
        <Row xs={3} md={3} className="g-4">
          {productListCard}
        </Row>  
      }
    </>
    
  )
}

export default ItemListConteiner