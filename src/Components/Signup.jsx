import "./Signup.css";
import { Link, useNavigate} from "react-router-dom";
import gif from "./Images/gifg.gif"
// import line from "../Components/Images/Line.png"
import React, { useState } from 'react';
import axios from 'axios';
import { useToast,Button } from '@chakra-ui/react'
// import {
//     Alert,
//     AlertIcon,
//     AlertTitle,
//     AlertDescription,
//   } from '@chakra-ui/react'
  
export const Signup = () =>{
    const navigate = useNavigate();
    const apiUrl = 'http://localhost:5000/users';
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      });
      const[status,setstatus] = useState(false);
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(apiUrl, formData);
          console.log('User created:', response.data);
          setstatus(!status);
          console.log(status);
          if(status){
            toast({
                title: "You are Successfully signed into भारत Jewels ",
                status: "success",
                duration: 1000,
                position: "top",
                isClosable: true
              });
         
             return navigate('/')//the next page address should be written here
            }
            // setstatus(status)
        // You can customize this message or redirect to another page.
          setFormData({
            number :'',
            firstName: '',
            lastName: '',
            email: '',
            password: ''
          });
        } catch (error) {
          console.error('Error creating user:', error);
          alert('Sign-up failed. Please try again later.');
        }
      };
      const toast = useToast()
    return (
        <div className="main">
            <div className="container">
                <form onSubmit={handleSubmit} >
                    <div className="header">
                        <img src={gif} alt="Fingerprint" style={{width:"90px"}}/>
                        <h2>Signup with भारत Jewels</h2>
                        <br />
                        <p>Unlock Best prices and become an insider for our exclusive launches & offers. Complete your profile and get ₹250 worth of xCLusive Points.</p>
                    </div>
                    <div className="choice" >
                        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ22anEy_Mqjn2MKrNI75Io_JUkIis4t8n5s8nPMh2gj0HiOyCV" />
                        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJWrYWHEvXHPvlbjPIxCtzIdB0LC4M5bbXVN2QnsHnyl0tADJM" />
                    </div>
                    <br />
                    <br />
                    <div className="or">
                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRy08BX8mlhq5hOd8xt1EtSl9VUg8U94BeGHvewRRqccLog1IvH"style={{width:"70px"}} />
                    <p>or continue with</p>
                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRy08BX8mlhq5hOd8xt1EtSl9VUg8U94BeGHvewRRqccLog1IvH"style={{width:"70px"}} />
                    </div>
                    <div className="numein">
                    <input type="number" id="number" value={formData.number}
                        onChange={handleChange} name="number" placeholder="Mobile number" required />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    
                    </div>
                    <div className="input1">
                    <input
                        id="fname"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        />
                        <input
                        id="lname"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        />
                    </div>
                    <div className="input2">
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    
                    </div>
                    <div className="radio">
                    <input type="radio" name='passify' />
                        <label> 8Chrs </label>
                        <input type="radio" name='passify' />
                        <label> 1Lowercase </label>
                        <input type="radio"  name='passify'/>
                        <label> 1Uppercase </label>
                        <input type="radio"  name='passify'/>
                        <label> 1Symbol </label>
                        <input type="radio"  name='passify'/>
                        <label> 1Number </label>
                    </div>
                    <div >
                    <button className="btn">
                    <h3>✅ Opt for Whatssap support</h3>
                        <div className="wt-img" style={{display:"flex"}}>
                        <p>We will be sharing Delivery & precious order related communication.Also provide with an interactive whatssap support</p>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSRxPxgWhkcaMyVf9oVXj4ywhzv8r9nIEIFYT9RNjnVcoGEsj7" style={{width:"40px"}}/>
                        </div>
                    </button>
                    </div>
                    <br />
                    <input type="radio" name='gender' />
                        <label> Male </label>
                        <input type="radio" name='gender' />
                        <label>  Female  </label>
                        <input type="radio"  name='gender'/>
                        <label> I don't want to specify </label>
                        <div>
                        <button className="submit-btn-1"
                            // onClick={() =>
                            //     toast({
                            //     title: 'Account created in भारत Jewels ',
                            //     status: 'success',
                            //     duration: 500,
                            //     isClosable: true,
                              
                            //     })
                            // }
                            // isloading={status}
                            //     loadingText = "Submitting"
                            //     colorScheme="teal"
                            //     variant="outline"
                            //     onClick={() =>{
                            //         setstatus(true);
                            //         setTimeout(() => {
                            //             setstatus(false)
                            //         },1000)
                            //     }}
                            >
    
                            SUBMIT
                            </button>
                        </div>
                        <br />
                        <p style={{color:"grey"}}>Already have an account?   <Link className="style" to='/login'>LOG IN</Link></p>  
                </form>
            </div>
        </div>
    )
}