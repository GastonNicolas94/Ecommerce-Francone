
const ItemDetail = ({product}) => {
  return (
    <div>
        <p>{product.name}</p>
        <p>{product.price}</p>
        <p>{product.category}</p>
    </div>
  )
}

export default ItemDetail