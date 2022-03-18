import { useState, useEffect } from "react"
import { task } from "../helpers/gFetch"
import { useParams } from "react-router-dom"
import ItemDetail from '../components/ItemDetail/ItemDetail'

const ItemDetailConteiner = () => {

    // const {productId} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {

        task
        .then((result) => setProduct(result.find(product => product.id === 1)))
        .catch((err)=> {
            console.log(err)
            return err
        })
        .finally()

    },[])

    console.log(product)

    return (
    <div>
        <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailConteiner