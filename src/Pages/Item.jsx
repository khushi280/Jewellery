import {Stack,Button,Wrap,WrapItem} from "@chakra-ui/react"
import { FaShoppingCart } from "react-icons/fa";
//export const Item=({image,name,price,category,star,shipping})
export const Item=()=>{
    return(
        <div className="item">
            <div className="item-head">
                <div className="item-head-image" id="item-head-image">
                <img src={require(`../images/item-image.jpg`)} alt="sapphire" />
                </div>
                <div className="item-head-price">
                    <div className="head-elements">
                    <div className="first-div">
                        <div className="product-name-div">
                            <div className="rating">
                            <img src={require(`../images/rating.png`)} alt="heart" />
                            </div>
                            <div><h1 className="product-name">Cario Heart Ring</h1></div>
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
                        <span className="actual-price" id="actual-price">₹48,923</span>
                        <span className="strike-price" id="strike-price">₹49,000</span>
                    </div>
                    <p>Upon price drop,<span color="purple">Notify Me</span></p>
                    <div className="second-div">
                        <div className="product-price">
                            <Stack>
                                <Wrap spacing={4}>
                                    <WrapItem>
                                        <Button  id="add-button"><FaShoppingCart /> ADD TO CART</Button>
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

    )}