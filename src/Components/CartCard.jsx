import "./CartCard.css"
import  {useContext} from "react";
import {CartContext} from "../Context/CartContext"
import { useToast,Button } from '@chakra-ui/react'

export const CartCard = ({id,image,name,price,shipping,star,category}) => {
  const toast = useToast()
    const {Cart,removeFromCart} = useContext(CartContext);
  console.log(Cart);
    function remove(){
        removeFromCart({id,image,name,price,shipping,star,category});
        toast({
          title: "Item Removed From The Cart ",
          status: "error",
          duration: 1000,
          position: "bottom",
          isClosable: true
        });
    }

    return (
        <div id="Card1">
          <div id="ImgDiv1">
            <img style={{ width: "200px" }} src={image} alt={name} />
          </div>
          <div id="DetailsDiv1">
            <p>{name}</p>
            <h1>{price}</h1>
            <button onClick={remove}>Remove</button>
          </div>
        </div>
      );
}
