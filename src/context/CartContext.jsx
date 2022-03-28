
import {createContext, useContext, useState} from 'react'

const CartContext = createContext([])

//Funcion que me devuelve el contexto listo para usar
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList, setItemCart] = useState([])
    
    const addToCart = (item) => {

        //check if existe item into cartList
        if(!isInCart(item)){
            //doesn't exist
            setItemCart([...cartList, item]) 
        }else{            
            //exist
            let index = cartList.findIndex(x => x.id === item.id);
            
            cartList[index].buy = cartList[index].buy + item.buy

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

    const amount = () => {

        return cartList.reduce((total,item) => { return (total + (item.price * item.buy))},0)

    }

return (
    <CartContext.Provider value={{
        cartList,
        addToCart,
        removeFromCart,
        clear,
        amount
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
