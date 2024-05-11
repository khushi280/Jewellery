import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard.jsx";
// import sort from "../Images/Sort.png"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import "./ProductCard.css";
import { IconButton,Icon, Radio, Checkbox } from '@chakra-ui/react'
import {ChevronDownIcon,CloseIcon } from '@chakra-ui/icons'
export const BestSellers = () => {
  const api = "http://localhost:3/products";
const [showmore,setShowmore]=useState(false);

  const [fData, setFData] = useState([]);
  const [fData1, setFData1] = useState([]);
  const [fData2, setFData2] = useState([]);

  const [pricerange,setpricerange]=useState(null);
  const [showDropdown, setShowDropdown]=useState(false);
 
  const fetchData = async () => {
    let res = await fetch(api);
    let data1 = await res.json();
    setFData(data1);
    setFData1(data1);

  };

  useEffect(() => {
    fetchData();
  }, []);
//   useEffect(() => {
// handleFilter();
//   }, [fData]);
// function handleFilter(){
//     let newdata=fData.filter((el)=>el.category ==="earrings");
//     setFData1(newdata);
//     setFData2(newdata);
// }
function handleprice(pricerange){
    setpricerange(pricerange);
    console.log(pricerange);
    if(pricerange){
        const[min,max]=pricerange.split("-");
        console.log(min)
        let newdata=fData.filter((el)=>el.price>=parseInt(min)&&el.price<=parseInt(max));
        setFData1(newdata);}
}

  return (
    <div>
        <div id="banner">
            <img src="https://cdn.caratlane.com/media/static/images/V4/2022/CL/12-DEC/AppBanner/Best/03/Desktop_1920-x560_toplisting.jpg" alt="" />
        </div>
        <div className="navdiv">
            <div className="navlist">
                <div className="head">
                <ul>
                    <li>
                        <a href="" style={{textDecoration:"none"}}>Best Sellers  <CloseIcon color="red"  /></a>
                        <span></span>
                        <a href="" style={{textDecoration:"underline"}} id="clear">Clear All</a>
                    </li>
                </ul>
                </div>
                <div class="navsmall">
                    <div>
                        <span id="all">All</span>
                    </div>
                    <div class="hovnav">
                        <span class="span">Try at Home</span>
                        <span class="hovspan1">Click here to see all designs available for Free Try at Home Service - Book an appointment to see designs at your home</span>
                    </div>
                    <div class="hovnav">
                        <span class="span">
                        Designs in Store
                        </span>
                        <span class="hovspan2">
                        Click to see designs available at any store. OR place your order online & pickup from the selected store on the same day
                        </span>
                    </div>
                    <div class="hovnav">
                        <span class="span">
                        Fast Delivery
                        </span>
                        <span class="hovspan3">
                        Designs that will reach you faster. Click to check designs ready for a Sure & Swift delivery.
                        </span>
                    </div>
                    <div> 
                        <span class="span">
                        New In
                        </span>
                    </div>
                </div>
            </div>
            <div class="sortdiv">
                        <div className="selector">
                        <form action="#">
                <label>Sort By:</label>
                <select name="sort"  className="sort-selection" >
                <option value="lowest">Latest</option>
                <option value="highest">Discount</option>
                <option value="highest">Featured</option>
                <option value="alpha">Price: Low to High</option>
                <option value="alpha">Price: High to Low</option>
                </select>  
            </form>
            </div>        
            </div>
        </div>
            <div class="total">
                <h1>CaratLane Bestsellers </h1>
                <span class="count"> 1403 Designs
                </span>
            </div>
            <div className="allpro">
                <div className="filterdiv">
                    <div className="filhead">Filter By</div>
                    <div className="fillist">
                        <div className="filsub">Price</div>
                        <div className="fil">
                        <div className="filcat">
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" checked value="0-300000" />
                                    <span className="filtext">
                                        <span>Whole Range</span>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input  type="radio" name="checkbox" id="checkbox" value="0-5000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span className="filtext" >
                                        <span>Under ₹5,000 <em>(80)</em></span>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="5001-10000" onChange={(e)=>handleprice(e.target.value)} />
                                    <span className="filtext">
                                        
                                        <span>₹5,001 - ₹10,000 <em>(261)</em> </span>
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="10001-15000" onChange={(e)=>handleprice(e.target.value)} />
                                    <span className="filtext" >
                                        <span>₹10,001 - ₹15,000 <em>(228)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="15001-20000" onChange={(e)=>handleprice(e.target.value)} />
                                    <span className="filtext">
                                        <span>₹15,001 - ₹20,000 <em>(163)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="20001-30000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span className="filtext">
                                        <span>₹20,001 - ₹30,000 <em>(329)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="30001-40000" onChange={(e)=>handleprice(e.target.value)} />
                                    <span className="filtext">
                                        <span>₹30,001 - ₹40,000 <em>(259)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="40001-50000" onChange={(e)=>handleprice(e.target.value)} />
                                    <span className="filtext">
                                        <span>₹40,001 - ₹50,000 <em>(203)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">

                            <label >
                                <i></i>
                                    <input type="radio" bg="#8863fb" name="checkbox" id="checkbox" value="50001-75000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span className="filtext">
                                        <span>₹50,001 - ₹75,000 <em>(342)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="75001-100000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span className="filtext">
                                        <span>₹75,001 - ₹1,00,000 <em>(268)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="100001-150000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span className="filtext">
                                        <span>₹1,00,001 - ₹1,50,000 <em>(116)</em></span>
                                       
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="150001-200000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span className="filtext">
                                        <span>₹1,50,001 - ₹2,00,000 <em>(33)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" bg="#8863fb" name="checkbox" id="checkbox" value="200001-250000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span className="filtext">
                                        <span>₹2,00,001 - ₹2,50,000 <em>(6)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <input type="radio" name="checkbox" id="checkbox" value="250001-400000" onChange={(e)=>handleprice(e.target.value)}/>
                                    <span className="filtext">
                                        <span>Over ₹2,50,000 <em>(8)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                        </div>
                        </div>
                        <div className="filsub">Product Type</div>
                        <div className="fil">
                        <div className="filcat">
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <Radio name="checkbox" id="checkbox"></Radio>
                                    <span className="filtext">
                                        <span>Earrings <em>(2295)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <Radio name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Rings <em>(1924)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Necklaces <em>(771)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                    <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Pendants <em>(672)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Bracelets <em>(955)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Bangles <em>(118)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Chains <em>(35)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">

                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Sets <em>(44)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Mangalsutra <em>(313)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Nose Pin <em>(124)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Nath <em>(2)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Charms <em>(97)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Charm builders <em>(4)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                    </div>
                    </div>
                    <div className="filsub">Weight Ranges</div>
                    <div className="fil">
                        <div className="filcat">
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>0 - 2 g <em>(872)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>2 - 5 g <em>(1046)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>5 - 10 g  <em>(271)</em></span>
                                       
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>10 - 20 g <em>(26)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                    </div>
                    </div>                    
                    {showmore && (<div>
                    <div className="fil">
                    <div className="filsub">Materail</div>
                        <div className="filcat">
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Platinum <em>(14)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Gold <em>(350)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Diamond <em>(1882)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Gemstone <em>(435)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Solitaire <em>(39)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                    </div>
                    </div>
                    <div className="filsub">Shop for</div>
                    <div className="fil">
                        <div className="filcat">
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Women <em>(2165)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Men <em>(27)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Kids <em>(103)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                         </div>
                    </div>
                    <div className="filsub">Occasion</div>
                    <div className="fil">
                        <div className="filcat">
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Everyday <em>(1477)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Work Wear <em>(48)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Desk to Dinner <em>(6)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Wedding <em>(5)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Evening <em>(671)</em></span>
                                       
                                    </span>
                            </label>
                            </div>
                            <div className="filcatsub">
                            <label >
                                <i></i>
                                <Radio type="radio" name="checkbox" id="checkbox" ></Radio>
                                    <span className="filtext">
                                        <span>Party Wear <em>(54)</em></span>
                                        
                                    </span>
                            </label>
                            </div>
                        </div>
                        </div>
                    </div>)}
                    <button class="Show" onClick={()=>setShowmore(!showmore)}>{showmore?"Show Less Filters":"Show More Filters" }</button>
                </div>
            </div>
      <div style={{ display: "flex", flexWrap: "wrap",gap:"1.5rem" }}>
        {fData1.map((el) => {
          return <ProductCard key={el.id} {...el} />;
        })}
      </div>
      </div>
    </div>
  );
};
