import ItemCount from '../components/ItemCount/ItemCount'
import Spinner from '../components/Spinner/Spinner'
import Row from 'react-bootstrap/Row'
import { useEffect, useState } from 'react'
const ItemListConteiner = ({ greeting }) => {
  
  const [loading, setLoading] = useState(true)
  const [productListCard, setProductListCard] = useState([])

  const handlerLoading = () => {
    setLoading(!loading)
  }

  const products = [ 
                      {id:1,name:'producto1',stock:1,initial:0},
                      {id:2,name:'producto2',stock:2,initial:1},
                      {id:3,name:'producto3',stock:3,initial:2},
                      {id:4,name:'producto4',stock:4,initial:3},
                      {id:5,name:'producto5',stock:5,initial:4},
                      {id:6,name:'producto6',stock:6,initial:5},
                      {id:7,name:'producto7',stock:7,initial:6},
                      {id:8,name:'producto8',stock:8,initial:7},
                      {id:9,name:'producto9',stock:9,initial:8},
                      {id:10,name:'producto10',stock:10,initial:10}
                    ]

  const task = new Promise((resolve, reject) => {
    if(products.length>0){
      setTimeout(()=>{
        
        resolve(products)

      },3000);
    } else {
      setTimeout(()=>{
        
        reject('No existen productos')
      
      },3000)
    }
  })
  
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