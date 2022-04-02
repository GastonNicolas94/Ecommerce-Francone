import Row from 'react-bootstrap/Row'
import Spinner from '../components/Spinner/Spinner'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { task } from '../helpers/gFetch'
import ItemList from '../components/ItemList/ItemList'
const ItemListConteiner = ({ greeting }) => {
  
  const [loading, setLoading] = useState(true)
  const [products, setProductListCard] = useState([])
  const {id} = useParams()

  useEffect(()=>{

    if(id){
      task 
      .then(resp => setProductListCard(resp.filter(prod=> prod.category === id)))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))

    }else {
      task 
      .then(resp => setProductListCard(resp))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }

  },[id])

  return (
    <>
      <div>{greeting}</div>
      {
        loading ? 
          <Spinner />
        :
        <Row xs={1} md={3} className="g-4">
          <ItemList products={products}/>
        </Row>

      }
    </>
    
  )
}

export default ItemListConteiner