import { useState, useEffect } from "react"
import { task, getFech } from "../helpers/gFetch"
import { useParams } from "react-router-dom"
import ItemDetail from '../components/ItemDetail/ItemDetail'

const ItemDetailConteiner = () => {

    const [product, setProduct] = useState({})

    const {detailId} = useParams()

    useEffect(() => {

        getFech
        .then((result) => setProduct(result.find(item => item.id === detailId)))
        .then(() => console.log(product))
        .catch(err => console.log(err))

    },[detailId])

    return (
    <div>
        <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailConteiner