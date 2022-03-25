
import {createContext, useContext, useState} from 'react'

const CartContext = createContext([])

//Funcion que me devuelve el contexto listo para usar
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList, setItemCart] = useState([])

    const addQuantity = (id ,quantity ,item) => {

        if (id === item.id){

            item.quantity = item.quantity + quantity

        }

        return item

    }
    
    const addToCart = (item) => {

        //check if existe item into cartList
        if(!isInCart(item)){
            //doesn't exist
            setItemCart([...cartList, item]) 
        }else{            
            //exist
            let index = cartList.findIndex(x => x.id === item.id);
            
            cartList[index].quantity = cartList[index].quantity + item.quantity

            setItemCart(cartList)
        }

    }

    const isInCart = (item) => {

        return cartList.some(product => product.id === item.id)
    }

    const removeFromCart = (item) => {

        let index = cartList.findIndex(x => x.id === item.id);

        cartList.splice(index,1)

        setItemCart(cartList)

    }

    const clear = () => {

        setItemCart([])

    }

return (
    <CartContext.Provider value={{

    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
