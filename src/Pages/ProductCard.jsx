import "./ProductCard.css";
import { useState } from "react";
// import sort from "../Images/Sort.png"
import {Helmet, link} from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CloseButton, Toast, useToast } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Text,
  Stack,
  Divider,
  Button,
  ButtonGroup,
  Heading,
  Alert,
  AlertIcon,AlertTitle
} from "@chakra-ui/react";

export const ProductCard = (props) => {
  const toast = useToast();
  const { id, image, price, name, shipping, star, category } = props;
  const [wishlist,setwishlist]=useState(false);
  const [book,setbook]=useState(false);
  const navigate = useNavigate();
  function nav() {
    navigate(`/products/${id}`);
  }
  function funcset(){
    setbook(!book);
  }
  const [msg,setmsg]=useState(false);
  const addtowishlist =  async () => {
    let dataobj={
      id:id,
      image:image,
      price:price,
      name:name,
      shipping:shipping,
      star:star,
      category:category
    }
    let res = await fetch(`http://localhost:3/wishlist`, {
        method: "POST",
        body: JSON.stringify(dataobj),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    setwishlist(!wishlist);
    setmsg(!msg);
}
  return (
    
    <Card maxW="sm" maxH="sm" bgColor="transparent" id="Card">
      <CardBody>
      <Helmet>
          <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        /></Helmet>
         <button className="wishlist" onClick={addtowishlist} style={{color: wishlist? "red":"black"}}><i class="fa fa-heart"></i></button>
                 
{ 
          msg &&  <Alert mt="-1" maxW="sm" maxH="sm" status="success"><AlertIcon/>
          <AlertTitle>
            Item is added successfully
          </AlertTitle>
          <CloseButton alignSelf="flex-end" top="-1" right="-1" onClick={()=>setmsg(!msg)}/>
          </Alert>
         }
        
        <Image src={image}  borderRadius="lg" ml="12" />
       
        <Stack spacing="1" mt="-2">
            <div className="head">
          <Heading className="text" size="lg">₹{price}</Heading>
          
          <span>
            <a class="details" size="md" href="#" target="_blank" onClick={nav}>Details</a>
          </span>
          </div>
          <Text color='#4a2a64' fontSize="lg" textAlign="left" fontFamily="MuliRegular, Helvetica Neue, Helvetica, Arial, sans-serif;">Check Delivery Date 
          </Text>
          <Text textAlign="left" fontFamily="InterRegular,Helvetica Neue,Helvetica,Arial,sans-serif;" color=" #9d9fa4;" size="lg" spacing="0">{name}</Text>
        </Stack>
        <ButtonGroup spacing="5" mt="2">
          <Button borderRadius= "10px"
    border=" solid 1px #4f3267;"
    fontFamily= "InterRegular,Helvetica Neue,Helvetica,Arial,sans-serif;" color=" #231535;" onClick={funcset}>
            Book Try at Home
          
          </Button>
          <Button border= "solid 1px #75d167;"  fontFamily= "InterRegular,Helvetica Neue,Helvetica,Arial,sans-serif;" color=" #75d167;" >
            Live Video Call
          </Button>
        </ButtonGroup>
        {book && <Alert mt="-1" maxW="sm" maxH="sm" status="error"><AlertIcon/>
      <AlertTitle>
        Oops! free try at home not available
      </AlertTitle>
      <CloseButton alignSelf="flex-end" top="3" right="-1" onClick={funcset}/>
      </Alert>}
        </CardBody>
        
    </Card>
  );
};
