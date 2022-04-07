import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from '../components/ItemDetail/ItemDetail'
import {   
    getDoc,
    doc,
    getFirestore,       
  } from 'firebase/firestore'

const ItemDetailConteiner = () => {

    const [product, setProduct] = useState({})

    const {detailId} = useParams()

    useEffect(() => {

        const db = getFirestore()    

        const queryCollectionFinal =  doc(db, 'product', detailId)
        
        getDoc(queryCollectionFinal)
        .then(resp => setProduct({id: resp.id, ...resp.data()}))
        .catch(err => console.log(err))
        .finally() 

    },[detailId])

    return (
    <div>
        <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailConteiner