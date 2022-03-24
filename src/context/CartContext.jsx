
import {createContext, useContext, useState} from 'react'

const CartContext = createContext([])

//Funcion que me devuelve el contexto listo para usar
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    const [cartList, setItemCart] = useState([])

    const addToCart = (item) => {

        //check if existe item into cartList
        (cartList.indexOf(item.id) == -1) ?  
            
            //isn't exist
            setItemCart([...cartList, item]) 
        
        : 
            //existe
            cartList.reduce(() => {

                

                }

            )

    }

return (
    <CartContext.Provider value={{

    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
