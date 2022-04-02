
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

        console.log(item)
        
        let cartListFiltered = cartList.filter(prod => prod.id !== item.id)

        console.log(cartListFiltered)

        setItemCart(cartListFiltered)

    }

    const clear = () => {

        setItemCart([])

    }

    const totalItems = () => {

        return cartList.reduce((total, item) => {return total + item.buy},0)
    
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
        amount,
        totalItems
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
