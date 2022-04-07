import Row from 'react-bootstrap/Row'
import Spinner from '../components/Spinner/Spinner'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ItemList from '../components/ItemList/ItemList'

import { 
  collection,    
  getDocs, 
  getFirestore,       
  query, 
  where 
} from 'firebase/firestore'



const ItemListConteiner = ({ greeting }) => {
  
  const [loading, setLoading] = useState(true)
  const [products, setProductListCard] = useState([])
  const {id} = useParams()
   
  
  // traer productos filtrados por categorías
  useEffect(()=> {

    const db = getFirestore()    

    const queryCollectionFinal =  !id 
                          ? 
                              collection(db, 'product' )
                          :  
                              query( collection(db, 'product' ), 
                                  where('category','==', id)                                  
                              )                             

    getDocs(queryCollectionFinal)
    .then(resp => setProductListCard( resp.docs.map(producto =>( {id: producto.id, ...producto.data()}) ) ) )
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))   
      
  }, [id])

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