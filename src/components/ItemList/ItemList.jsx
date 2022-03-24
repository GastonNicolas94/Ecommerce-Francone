import Item from "../Item/Item"


function ItemList({ products }) {
    return (
        <>
            {products.map((prod) => <Item key={prod.id} prod={prod} /> )}
        </>
    )
}

export default ItemList

