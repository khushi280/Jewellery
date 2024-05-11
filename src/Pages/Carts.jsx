import { useContext } from "react"
import {CartContext} from "../Context/CartContext"
import { CartCard } from "../Components/CartCard"
import { ProductCard } from "../Components/ProductCard"
import "../Pages/Trial.css"
import {useNavigate} from "react-router-dom"
export const Carts = () =>{
  const navigate = useNavigate();
  function navi() {
    return navigate('/freetry');
  }
  const {Cart} = useContext(CartContext)
  console.log(Cart,"in carts");
  if(Cart.length==0){
    return (
      <div class="main">
        <div className="trial">
          <h1>Trial Cart({Cart.length})</h1>
        </div>
      <div>
          <div class="one">
              <div class="two">
                  <div class="three">
                      <div class="four">
                          <div class="five">
                          <img src="https://assets.cltstatic.com/images/responsive/empty-trail-cart.gif"/>
                          </div>
                          <div>
                              <div class="six">
                                  Nothing to Try at Home?
                              </div>
                              <div class="seven">
                              Let's do some retail therapy.
                              </div>
                          </div>
                          </div>
                          <div class="eight">
                          <a  target="_blank" rel="noopener noreferrer" class="a">
                              <button onClick={navi} class="b">5 Designs to try at home!</button>
                          </a>
                      </div>
                  </div>
                  <div class="nine">
                      <div class="ten">
                      <h4 class="heading">How does try at home work?</h4>
                      <div class="eleven">
                          <div class="twelve">
                               <video  playsInline  >
                              <source src="https://banner.caratlane.com/live-images/4a56af38790c43f0a86cb04baef2853d.mp4" type="video/mp4"></source>
                              </video> 
                              <botton class="bottom">Play/Pause
                              </botton>
                              <div class="thirteen">
                                  <p>Pick your favorite designs to try out at the comfort of your home for free! If you don’t like it, don’t buy it. Zero compulsion.</p>
                              </div>
                          </div>
                      </div>
                      <div class="fourteen">
                          </div>
                          <span class="span1">Trusted professionals <br/>and expert jewellery consultants</span>
                          <div class="e">
                              <div class="f">
                                  <div class="g">
                                      <span class="span2">2</span>
                                      <span class="span2">3</span>
                                      <span class="span2">4</span>
                                      <span class="span2">5</span>
                                      <span class="span2">6</span>
                                      <span class="span2">7</span>
                                      <span class="span2">8</span>
                                      <span class="span2">9</span>
                                      <span class="span3">0</span>
                                      <span class="span4">1</span>
                                  </div>
                                  <div class="g">
                                      <span class="span2">3</span>
                                      <span class="span2">4</span>
                                      <span class="span2">5</span>
                                      <span class="span2">6</span>
                                      <span class="span2">7</span>
                                      <span class="span2">8</span>
                                      <span class="span2">9</span>
                                      <span class="span2">0</span>
                                      <span class="span3">1</span>
                                      <span class="span4">2</span>
                                  </div>
                                  <div class="g">
                                      <span class="span2">7</span>
                                      <span class="span2">8</span>
                                      <span class="span2">9</span>
                                      <span class="span2">0</span>
                                      <span class="span2">1</span>
                                      <span class="span2">2</span>
                                      <span class="span2">3</span>
                                      <span class="span2">4</span>
                                      <span class="span3">5</span>
                                      <span class="span4">6</span>
                                  </div>
                                  <div class="g">
                                      <span class="span2">2</span>
                                      <span class="span2">3</span>
                                      <span class="span2">4</span>
                                      <span class="span2">5</span>
                                      <span class="span2">6</span>
                                      <span class="span2">7</span>
                                      <span class="span2">8</span>
                                      <span class="span2">9</span>
                                      <span class="span3">0</span>
                                      <span class="span4">1</span>
                                  </div>
                                  <div class="g">
                                      <span class="span2">9</span>
                                      <span class="span2">0</span>
                                      <span class="span2">1</span>
                                      <span class="span2">2</span>
                                      <span class="span2">3</span>
                                      <span class="span2">4</span>
                                      <span class="span2">5</span>
                                      <span class="span2">6</span>
                                      <span class="span3">7</span>
                                      <span class="span4">8</span>
                                  </div>
                                  <div class="g">
                                      <span class="span2">8</span>
                                      <span class="span2">9</span>
                                      <span class="span2">0</span>
                                      <span class="span2">1</span>
                                      <span class="span2">2</span>
                                      <span class="span2">3</span>
                                      <span class="span2">4</span>
                                      <span class="span2">5</span>
                                      <span class="span3">6</span>
                                      <span class="span4">7</span>
                                  </div>
                              </div>
                              <p>happy customers so far!</p>
                          </div>
                      </div>
                      <h3 class="h3">Contact us for further assistance</h3>
                      <div class="h">
                          <a class="Call a2">
                              {/* ::before */}
                              "Call"
                          </a>
                          <a class=" Chat a2">
                              {/* ::before */}
                              "Chat"
                          </a>
                          <a class="Whatsapp a2">
                              {/* ::before */}
                              "Whatsapp"
                          </a>
                      </div>
                      </div>
                  </div>

              </div>

          </div>

      </div>
      

  );
  }
  return (
    <div class="main">
      <div className="trial">
          <h1>Trial Cart({Cart.length})</h1>
        </div>
    <div>
        <div class="one">
            <div class="two">
                
                 <div className="card">
                 <div style={{display:"grid"}}>
                        {Cart.map((el) => {
                          console.log(el,"in el");
                          
                          return <CartCard {...el} />;
                        })}
                      </div>
                 </div>
                <div class="nine">
                    <div class="ten">
                    <h4 class="heading">How does try at home work?</h4>
                    <div class="eleven">
                        <div class="twelve">
                             <video  playsInline  >
                            <source src="https://banner.caratlane.com/live-images/4a56af38790c43f0a86cb04baef2853d.mp4" type="video/mp4"></source>
                            </video> 
                            <botton class="bottom">Play/Pause
                            </botton>
                            <div class="thirteen">
                                <p>Pick your favorite designs to try out at the comfort of your home for free! If you don’t like it, don’t buy it. Zero compulsion.</p>
                            </div>
                        </div>
                    </div>
                    <div class="fourteen">
                        </div>
                        <span class="span1">Trusted professionals <br/>and expert jewellery consultants</span>
                        <div class="e">
                            <div class="f">
                                <div class="g">
                                    <span class="span2">2</span>
                                    <span class="span2">3</span>
                                    <span class="span2">4</span>
                                    <span class="span2">5</span>
                                    <span class="span2">6</span>
                                    <span class="span2">7</span>
                                    <span class="span2">8</span>
                                    <span class="span2">9</span>
                                    <span class="span3">0</span>
                                    <span class="span4">1</span>
                                </div>
                                <div class="g">
                                    <span class="span2">3</span>
                                    <span class="span2">4</span>
                                    <span class="span2">5</span>
                                    <span class="span2">6</span>
                                    <span class="span2">7</span>
                                    <span class="span2">8</span>
                                    <span class="span2">9</span>
                                    <span class="span2">0</span>
                                    <span class="span3">1</span>
                                    <span class="span4">2</span>
                                </div>
                                <div class="g">
                                    <span class="span2">7</span>
                                    <span class="span2">8</span>
                                    <span class="span2">9</span>
                                    <span class="span2">0</span>
                                    <span class="span2">1</span>
                                    <span class="span2">2</span>
                                    <span class="span2">3</span>
                                    <span class="span2">4</span>
                                    <span class="span3">5</span>
                                    <span class="span4">6</span>
                                </div>
                                <div class="g">
                                    <span class="span2">2</span>
                                    <span class="span2">3</span>
                                    <span class="span2">4</span>
                                    <span class="span2">5</span>
                                    <span class="span2">6</span>
                                    <span class="span2">7</span>
                                    <span class="span2">8</span>
                                    <span class="span2">9</span>
                                    <span class="span3">0</span>
                                    <span class="span4">1</span>
                                </div>
                                <div class="g">
                                    <span class="span2">9</span>
                                    <span class="span2">0</span>
                                    <span class="span2">1</span>
                                    <span class="span2">2</span>
                                    <span class="span2">3</span>
                                    <span class="span2">4</span>
                                    <span class="span2">5</span>
                                    <span class="span2">6</span>
                                    <span class="span3">7</span>
                                    <span class="span4">8</span>
                                </div>
                                <div class="g">
                                    <span class="span2">8</span>
                                    <span class="span2">9</span>
                                    <span class="span2">0</span>
                                    <span class="span2">1</span>
                                    <span class="span2">2</span>
                                    <span class="span2">3</span>
                                    <span class="span2">4</span>
                                    <span class="span2">5</span>
                                    <span class="span3">6</span>
                                    <span class="span4">7</span>
                                </div>
                            </div>
                            <p>happy customers so far!</p>
                        </div>
                    </div>
                    <h3 class="h3">Contact us for further assistance</h3>
                    <div class="h">
                        <a class="Call a2">
                            {/* ::before */}
                            "Call"
                        </a>
                        <a class=" Chat a2">
                            {/* ::before */}
                            "Chat"
                        </a>
                        <a class="Whatsapp a2">
                            {/* ::before */}
                            "Whatsapp"
                        </a>
                    </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
    

);
}