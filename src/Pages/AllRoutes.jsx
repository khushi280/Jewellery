import { Routes,Route } from "react-router-dom"
//import {Overview} from "./Pages/Overview"
// import {Allitem} from "./Pages/Allitem"
import { Products } from "../pages/Products"
import {ProductDetails} from "../pages/ProductDetails"

export const AllRoutes=()=>{
    return(
        <div>
        <Routes>
           {/* <Route path="/" element={<Allitem />}></Route> */}
           {/*<Route path="/pop" element={<Overview />}></Route>*/}
           <Route path="/p" element={<Products/>}></Route>
           <Route path="/products/:id" element={<ProductDetails/>}></Route>
        </Routes>
        </div>
    )
}