import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})
    // Func to add Item to Cart
    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            //New Entry of the Item
            setCartItems((prev)=>({...prev, [itemId]:1}))
        }
        else{
            //Increase already available item
            setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        }
    }
    // Func to Remove Item from Cart
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;