import "./Freetryathome.css"
import line from "../Components/Images/Line.png"
import mobile from "../Components/Images/mobile.png"
import calender from "../Components/Images/calender.png"
import person from "../Components/Images/person.png"
import bag from "../Components/Images/bag.png"
import coma from "../Components/Images/coma.png"
import call from "../Components/Images/call.png"
import { Divider,AbsoluteCenter,Box,Button } from '@chakra-ui/react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"
import React, { Component } from "react";
import Slider from "react-slick";
import { Tooltip } from '@chakra-ui/react'


import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from "@chakra-ui/react";
import { Products } from "../Pages/Products"
export const Freetryathome = () =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed:4000,
        autoplay:true,
        cssEase:"linear"
      };
      
    return(
        <div className="main">
            
            {/* <h1>Jai Shree Ram</h1> */}
            <div className="video-container">
            <video className="video-c" autoPlay loop playsInline muted>
                <source
                    src="https://assets.cltstatic.com/images/responsive/TAH-Desktop-Snippet.mp4"
                    type="video/mp4"
                />
            </video>
            <div className="video-text-main">
                <h2 className="video-text">
                    Your Favourite designs at Your Doorstep!
                </h2>
                <div className="input-main">
                    <div className="input-text">
                        <span className="map-logo"></span>
                        <input className="pin-input" value="751024" name="pincode" placeholder="Enter the Pincode" spellCheck="false" />
                    </div>
                    <button className="map-input-button" content="See Design">
                        See Designs
                    </button> 
                </div>
                        <span className="video-button"></span>
                        <p>See How It Works</p> 
                    </div>   
                </div>
                <div className="two-prod">
                    <div className="prod">
                    <div>
                        <img
                        src="https://assets.cltstatic.com/images/responsive/tah-gift-ribbon.png"
                        alt=""
                        />
                    </div>
                    <div className="prod-det">
                        <h3>Give Her the Gift of Choice!</h3>
                        <p>Book a surprise Try at Home and let her pick from 5 stunning designs. </p>
                    </div>
                    </div>
                    <div className="prod">
                    <div>
                        <img
                        src="https://assets.cltstatic.com/images/responsive/tah-gift-ring.png"
                        alt=""
                        />
                    </div>
                    <div className="prod-det">
                        <h3>Ensure the Perfect Fit...</h3>
                        <p>Always.</p>
                    </div>
                </div>
            </div>
            <div className="option" style={{height:"600px"}}>
                <div className="opt">
                    <h1>It Doesn't Get Easier than This!</h1>
                    <p>It's free and there's no obligation to buy!</p>
                </div>
                
                <div className="opt-img">
                    <section className="opt-sec">
                    {/* <span className="span">----------------------------------------</span> */}
                        <div className="opt-sec-sel">
                            <div className="opt-sec-select">
                                <img src={mobile} alt="bag"/>
                                <img className="image" src={line} style={{width:"250px",height:"10px"}}/>
                            </div>
                            <div className="opt-sel-info-div">
                                    <h3>Pick your favourite
                                    designs online</h3>
                                    <p>Add Minimum 1 design</p>
                            </div>
                            {/* <span className="span1" style={{border:"2px solid black"}}>---------------------------</span> */}
                        </div>
                        {/* <span className="span">----------------------------------------</span> */}
                        <div className="opt-sec-sel">
                            <div className="opt-sec-select">
                                <img src={calender} alt="calender"/>
                                <img className="image" src={line} style={{width:"250px",height:"10px"}}/>

                            </div>
                            <div className="opt-sel-info-div">
                                    <h3>Book an appointment< br />(It's Free !)</h3>
                                    <p>Select your convenient date, time and place.</p>
                            </div>
                        </div>
                        {/* <span className="span">----------------------------------------</span> */}
                        <div className="opt-sec-sel">
                            <div className="opt-sec-select">
                                <img src={person} alt="person"/>
                                <img className="image" src={line} style={{width:"250px",height:"10px"}}/>

                            </div>
                            <div className="opt-sel-info-div">
                                    <h3>Try the designs</h3>
                                    <p>Our Try at Home consultants will get you your chosen designs-at home or at work</p>
                            </div>
                        </div>
                        {/* <span className="span">----------------------------------------</span> */}
                            <div className="opt-sec-sel">
                            <div className="opt-sec-select">
                            <img src={bag} alt="bag"/>
                            </div>
                            <div className="opt-sel-info-div">
                                    <h3>Buy Only if you like</h3>
                                    <p>Buy on the spot! And if you don't like it,there's no obligation to buy</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="bestsell" >
                <div >
                <div className="bestselld">
                    <h2>Pick from Our Bestsellers</h2>
                </div>
                <div className="input-box">
                    <div className="input-get">
                        <span className="input-get-part"></span>
                        <label className="input-label">Enter Pincode</label>
                    <input
                        type="number"
                        spellCheck="false"
                        className="input-check"
                        name="pincode"
                        placeholder="Enter Valid Pincode"
                        id="pincode"
                    />
                    </div>
                    <button className="submit-btn">
                        Submit
                    </button>
                    <Box position='relative' padding='10' className="box">
                        <Divider   />
                        <AbsoluteCenter  px='10' className="orr">
                            <p>OR</p>
                        </AbsoluteCenter>
                        </Box>
                    <div className="locate-tag">
                            <span className="location-logo"><img src="https://www.nicepng.com/png/detail/431-4318534_location-map-pin-pink6-location-icon-png-pink.png" style={{width:"60px",height:"40px"}}></img></span>
                            <button className="locate-tag-btn">Locate Me</button>
                    </div>
                    <br />
                    <br />
                   
                </div>
                </div>
                <div id="nop" className="image" style={{display:"flex"}} >
                <Products />
                </div>
               <button className="submit-btn-2">
               <Link to='/carts'>Show Trial Cart</Link>
               </button>
                <div className="design-btn">
                <button className="submit-btn-1" >
                        See all designs for try at home
                </button>
                </div>
            </div>
            <div className="customer-doubt" style={{height:"300px"}}>
                <h2>Hear it from Our Customer</h2>
                <br />
                <br />
                <img src={coma} alt=""  style={{width:"100px"}} />
            </div>
    
        <Slider {...settings}>
        <div className="review">
          <h2 className="name">Navya pradeep,Bengaluru</h2>
          <br />
          <span>⭐⭐⭐⭐⭐</span>
          <br />
          <br />
          <p className="talk">
            It was wonderful to have a ability to see and try these at home.
            <br />
            Classic designs made affordable. Bravo
          </p>
          </div>
          <div>
          <h2 className="name">Preeti Singh,Bengaluru</h2>
          <br />
          <span>⭐⭐⭐⭐⭐</span>
          <br />
          <br />
          <p className="talk">
            It was a great experience of try at home . It saves time . Products were also good.
            <br />
            Behaviour of person is professional
          </p>
          </div>
          <div>
          <h2 className="name">Gokul Karki,New Delhi</h2>
          <br />
          <span>⭐⭐⭐⭐⭐</span>
          <br />
          <br />
          <p className="talk">
           Try at home service very useful for people like us. Thanks for the excellent service by the executive
            <br />
            .Very polite person,had good knowledge about the product I will recommend my friends as well about this service
          </p>
          </div>
        </Slider>
            <div className="Accordian">
                <div className="Query">
                    <h3>Have Some Questions?</h3>
                    <div className="Contact" >
                        <img src={call} alt=""  />
                        <div className="contact">
                                <p>Just give us a call</p>
                                <br />
                                <a className="number">+91-7681049286</a>
                        </div>
                    </div>
                </div>
            <div className="Accordian-opt">
                <Accordion allowToggle>
                    <AccordionItem className="Accord">
                        <h1>
                            <AccordionButton>
                            <Box as="span" flex="1" textAlign="left" className="boxes">
                                What is Try at Home?
                            </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h1>
                        <AccordionPanel className="panel" pb={4}>
                                Try at Home is a service that you can avail to try our designs
                                in the comfort of your home. It is a free service, with
                                absolutely no obligation to buy. All you have to do is pick your
                                favourite designs, and schedule an appointment as per your
                                convenience.
                         </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem className="Accord">
                        <h1>
                            <AccordionButton>
                            <Box as="span" flex="1" textAlign="left" className="boxes">
                                Is Try at Home avaliable outside India
                            </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h1>
                        <AccordionPanel className="panel" pb={4}>
                                No.Try at Home availiable only within India.
                         </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem className="Accord">
                        <h1>
                            <AccordionButton>
                            <Box as="span" flex="1" textAlign="left" className="boxes">
                            Which are the cities in which this service is available?
                            </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h1>
                        <AccordionPanel className="panel" pb={4}>
                        Try at Home service is currently available in Agra, Ahmedabad, Bangalore, Bhubaneswar, Bokaro, Chandigarh, Chennai, Cuttack, Dehradun, Delhi-NCR, Gandhinagar, Guwahati, Haridwar, Hyderabad, Jaipur, Kochi, Kolkata, Lucknow, Ludhiana, Mumbai, Nagpur, Pathankot, Patna, Pune, Ranchi, Surat, Vijayawada & Visakhapatnam.
                         </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem className="Accord">
                        <h1>
                            <AccordionButton>
                            <Box as="span" flex="1" textAlign="left" className="boxes">
                            Is the Try at Home service free?
                            </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h1>
                        <AccordionPanel className="panel" pb={4}>
                        Yes, there are absolutely no charges for Try at Home.
                         </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem className="Accord">
                        <h1>
                            <AccordionButton>
                            <Box as="span" flex="1" textAlign="left" className="boxes">
                            Which products can I try?
                            </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h1>
                        <AccordionPanel className="panel" pb={4}>
                        The products available for you are based on your location. Once you enter your pincode on the Try at Home page, you can select any of those designs.
                         </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem className="Accord">
                        <h1>
                            <AccordionButton>
                            <Box as="span" flex="1" textAlign="left" className="boxes">
                            How many products can I try?
                            </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h1>
                        <AccordionPanel className="panel" pb={4}>
                        You can select up to 5 products for Try at Home. If you would like to select a few more designs to try, please contact us on 1800-102-0103 (Toll Free), and we will help you with it.
                         </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem className="Accord">
                        <h1>
                            <AccordionButton>
                            <Box as="span" flex="1" textAlign="left" className="boxes">
                            How will you send me the products for trial?
                            </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h1>
                        <AccordionPanel className="panel" pb={4}>
                        Our Try at Home consultant will visit your location to show you the designs, at a time and place that is convenient to you.
                         </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem className="Accord">
                        <h1>
                            <AccordionButton>
                            <Box as="span" flex="1" textAlign="left" className="boxes">
                            Can I request for a Try at Home at my office?
                            </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h1>
                        <AccordionPanel className="panel" pb={4}>
                        Absolutely! You can request for the appointment to take place at your office, or any other indoor location.
                         </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem className="Accord">
                        <h1>
                            <AccordionButton>
                            <Box as="span" flex="1" textAlign="left" className="boxes">
                            What if the date or time slot convenient to me is not available?
                            </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h1>
                        <AccordionPanel className="panel" pb={4}>
                        In such cases, we request you to contact us on 1800-102-0103 (Toll Free), and we will try to arrange the appointment as per your convenience.
                         </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem className="Accord">
                        <h1>
                            <AccordionButton>
                            <Box as="span" flex="1" textAlign="left" className="boxes">
                            After trying on the products at home, can I place the order immediately?
                            </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h1>
                        <AccordionPanel className="panel" pb={4}>
                        Yes, if you would like to purchase any of the designs you tried, you can place an order on the spot with our Try at Home consultant.
                         </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem className="Accord">
                        <h1>
                            <AccordionButton>
                            <Box as="span" flex="1" textAlign="left" className="boxes">
                            Are all the jewellery sent for the Try at Home appointment made of real gold?
                            </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h1>
                        <AccordionPanel className="panel" pb={4}>
                        Yes, the jewellery we send to your home for trial is crafted with real gold and diamonds. If you place an order after the trial, you will receive the certificate of authenticity too.
                         </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem className="Accord">
                        <h1>
                            <AccordionButton>
                            <Box as="span" flex="1" textAlign="left" className="boxes">
                            What are the measures CaratLane is taking to ensure the Try at Home consultants are healthy and safe?
                            </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h1>
                        <AccordionPanel className="panel" pb={4}>
                        - Our jewellery consultants use mask, gloves & sanitisers
- We monitor & record the temperature of all our consultants every day via thermal screening
- Every consultant uses the Aarogya Setu App to ensure they are healthy, and they have a limited number of appointments per day
                         </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem className="Accord">
                        <h1>
                            <AccordionButton>
                            <Box as="span" flex="1" textAlign="left" className="boxes" >
                            What are the safety measures taken during the Try at Home appointments?

                            </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h1>
                    <AccordionPanel className="panel" pb={4}>
                        - All our jewellery is sanitised with alcohol swabs before and after the appointment
                        - We sanitise our bag, jewellery kit, mirrors, ring sizer, bangle sizer, iPad, and everything else we bring, to ensure your safety
                        - For appointments in containment zones, we will first double-check with the customer if the entry is allowed and if it's a non-infected zone
                        - Proper social distancing during the appointment is practised, and we also bring a new mask for the customer to wear

                        Please note: We may need to check the status of the customer's health on the Aarogya Setu App.
                         </AccordionPanel>
                    </AccordionItem>

                </Accordion>
            </div>
        </div>
        
    </div>   
    )
}