import "./ProductCard.css"
import {useContext, useEffect, useState} from "react";
import {CartContext} from "../Context/CartContext"
import { Link } from "react-router-dom";
import { useToast,Button } from '@chakra-ui/react'
export const ProductCard = ({id,image,name,price,shipping,star,category}) => {

    const {Cart,addToCart} = useContext(CartContext);
    const toast = useToast()
  

    console.log(Cart,"in p cart");
    function add() {
        addToCart({id,image,name,price,shipping,star,category});
        toast({
          title: "Added to the Trail Cart ",
          status: "success",
          duration: 1000,
          position: "bottom",
          isClosable: true
        });
      }
     
      
    return (
        <div>
          <div id="Card">
          <div id="ImgDiv">
            <img style={{ width: "300px" }} src={image} alt={name} />
          </div>
          <div id="DetailsDiv">
            <h1>₹{price}</h1>
            <p>{name}</p>
            <button className="submit-btn-2" onClick={add}>Add</button>
          </div>
          
        </div>
        </div>
        

      );
}