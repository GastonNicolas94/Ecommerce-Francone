import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from '../components/ItemDetail/ItemDetail'
import Spinner from '../components/Spinner/Spinner'
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import {   
    getDoc,
    doc,
    getFirestore,       
  } from 'firebase/firestore'


const ItemDetailConteiner = () => {

    const [product, setProduct] = useState({})

    const [loading, setLoading] = useState(true)

    const {detailId} = useParams()

    useEffect(() => {

        const db = getFirestore()    

        const queryCollectionFinal =  doc(db, 'product', detailId)
        
        getDoc(queryCollectionFinal)
        .then(resp => setProduct({id: resp.id, ...resp.data()}))
        .catch(err => console.log(err))
        .finally(setLoading(false))

    },[detailId])

    return (
    <div>
        <Container style={{ textAlign: 'center' }}>
        {

          (loading) ?
          <Spinner />
            :
            <Container className="detail-container">
              <Row>
                <Col>
                  <ItemDetail product={product}/>
                </Col>
              </Row>
            </Container>
        }
      </Container>
        
    </div>
  )
}

export default ItemDetailConteiner