import { createContext,useState } from "react";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [Cart, setCart] = useState([]);
  
    function addToCart(el) {
      setCart([...Cart, el]);
    //   console.log(cart);
    }
    function removeFromCart(el) {
        let filteredArr = Cart.filter((prod) => {
          return prod.id !== el.id;
        });
        setCart(filteredArr);
        // console.log(filteredArr, "Inside context");
      }
      console.log(Cart, "in cartContext");
   return(
    <CartContext.Provider value={{Cart,addToCart,removeFromCart}}>{children}</CartContext.Provider>
   )
      
}
