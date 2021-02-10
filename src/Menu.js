import React from "react"
import "./styles.css"
import TopBar from "./TopBar.js"
import VideoPortion from "./VideoPortion.js"
import Items from "./Items.js"
import SectionOne from "./SectionOne"
import BikePlus from "./images/Bike_Plus.png"
import BikeRender from "./images/Bike_Render.png"

class Menu extends React.Component{

    render(){

        if (this.props.bike === true){
            return(
               <div className="drop_down">

                   <div>
                        <img className="menu_images" src={BikePlus}/> 
                            <br/>
                        <img className="menu_images" src={BikeRender}/> 
                   </div>

                   <div className="bike2">
                       <p>
                             Bikes overview
                       </p>
                      
                        <p>
                            Compare specs
                        </p>
                        <p>
                            Reviews
                        </p>
                        <p>
                           Financing
                       </p>
                        <p>
                            Home trial
                        </p>
                        <p>
                            Trade in
                        </p>
                        <p>
                            Compare your fitness 
                            <br/>cost to Peloton
                        </p>
                        <p>
                            Book a free test ride
                        </p>
                        
                   </div>
               </div>
            )
        } else {
            return (
                <div>
                    
                </div>
            )
        }
      
    }
}
export default Menu