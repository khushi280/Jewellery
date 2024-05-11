import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Stack,Button,Wrap,WrapItem, Alert} from "@chakra-ui/react"
import { FaShoppingCart } from "react-icons/fa";

export let ProductDetails = () => {
    let [product, setProduct] = useState([]);
    let { id } = useParams();

    let fetchProductDetails = async () => {
      try {
        let response = await fetch(`http://localhost:3/products/${id}`);
        let data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    useEffect(() => {
      fetchProductDetails();
    }, []);
  
    if (!product) {
      return <div>Loading...</div>;
    }

  
      ;let AddToCart = async () => {
          let p_image = product.image;
          let product_price = product.price;
          let pname = product.name;
          let p_shipping = product.shipping;
          let p_star = product.star;
          let p_category = product.catgory;
          let cartProducts = {
            image: p_image,
            price: product_price,
            name: pname,
            shipping: p_shipping,
            star : p_star,
            category: p_category
          };
          console.log(cartProducts);
          let res = await fetch("http://localhost:3/cart",{
            method: "POST",
            body: JSON.stringify(cartProducts),
            headers: {
              "Content-Type": "application/json"
            }
          });
          alert("Product added to cart successfully!");
    }
   /*<Item id={product.id} img={product.image} pname={product.name} price={product.price} category={product.category} />*/
    return (
      <>
      <div className="item">
      <div className="item-head">
          <div className="item-head-image" id="item-head-image">
          <img src={product.image} id='item-head-image'  alt="sapphire" />
          </div>
          <div className="item-head-price">
              <div className="head-elements">
              <div className="first-div">
                  <div className="product-name-div">
                      <div className="rating">
                      <img src={require(`../images/rating.png`)} alt="heart" />
                      </div>
                      <div><h1 className="product-name" id='product-name'>{product.name}</h1></div>
                  </div>
                  <div className="space-div">
                  </div>
                  <div className="icon-div">
                      <div className="heart-icon">
                          <span id="">
                          <img src={require(`../images/heart.png`)} alt="heart" />  
                          </span>
                      </div>
                      <div className="share-icon">
                      <span id="share-icon">
                          <img src={require(`../images/share.png`)} alt="share" />  
                          </span>
                      </div>
                      <div className="copylink">
                      <span>
                          <img src={require(`../images/heart.png`)} alt="copylink" />  
                          </span>
                      </div>
                  </div>
              </div>
              <div className="bestseller">
                  <span>BESTSELLER</span>
              </div>
              <div className="price" id="price">
                  <span className="actual-price" id="actual-price">₹{product.price}</span>
                  <span className="strike-price" id="strike-price">₹49,000</span>
              </div>
              <p>Upon price drop,<span color="purple">Notify Me</span></p>
              <div className="second-div">
                  <div className="product-price">
                      <Stack>
                          <Wrap spacing={4}>
                              <WrapItem>
                                  <Button  id="add-button" onClick={AddToCart}><FaShoppingCart /> ADD TO CART</Button>
                              </WrapItem>
                          </Wrap>
                      </Stack>
                  </div>
                  <div className="price-space-div">
                  </div>
                  <div className="find-store">
                      <Stack>
                          <Wrap spacing={4}>
                              <WrapItem>
                                  <Button id="find-button">FIND IN STORE</Button>
                              </WrapItem>
                          </Wrap>
                      </Stack>
                  </div>
              </div>
                  </div>
          </div>
      </div>
     <div className="item-details">
     </div>
  </div>
  </>
  );
};