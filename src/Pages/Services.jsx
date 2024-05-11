export const Services=()=>{
    return(
        <div>
            <h2 class="services-heading">CaratLane Special In-store Services</h2>
            <div class="services-main">
                <div className="services-first">
                    <div className="services-first-image">
                    <img src={require(`../images/oldgold.png`)} alt="free try at home" />
                    </div>
                    <h4 className="services-h4" >Old Gold Exchange</h4>
                    <p className="services-para">It can be any gold jewellery</p>
                    <button className="services-button">Find Store</button>
                </div>
                <div className="services-first">
                    <div className="services-first-image">
                    <img src={require(`../images/buyonline.png`)} alt="free try at home" />
                    </div>
                    <h4 className="services-h4" >Buy Online,Pick At Store</h4>
                    <p className="services-para">Save time, pickup and go</p>
                    <button className="services-button">Find Store</button>
                </div>
                <div className="services-first">
                    <div className="services-first-image">
                    <img src={require(`../images/instore.png`)} alt="free try at home" />
                    </div>
                    <h4 className="services-h4" >In-Store Customisation</h4>
                    <p className="services-para">Made-to-order and Personalised for you</p>
                    <button className="services-button">Find Store</button>
                </div>
            </div>
        </div>
    )}