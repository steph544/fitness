import React from "react"
import "./styles.css"
import {ReactComponent as Logo} from "./images/logo.svg";
import {ReactComponent as Presentation} from "./images/presentation.svg";
import {ReactComponent as Cart} from "./images/cart.svg";
import {ReactComponent as Expand} from "./images/expand.svg";
import {ReactComponent as Arrow} from "./images/arrow.svg";
import {ReactComponent as SideArrow} from "./images/side_arrow.svg";
import treadmill from "./images/treadmill.png"
import bike from "./images/bike.png"
import app from "./images/app.png"
import apparel from "./images/apparel.png"
import shoes from "./images/shoes.png"
import manbike from "./images/manbike.png"

function Home(){

    const handleClick=()=>{
        console.log("bike");
    }

    return(
        <div>
            <div className="div1">
                    BRING HOME THE PELOTON BIKES TODAY WITH 0% APR. MOST DELIVERY TIMES ARE LONGER THAN NORMAL. SHOP BIKE OR SHOP BIKE+
            </div>

            <div className="div2">
                 
                 <video className="running_video" width="100%" autoPlay loop muted> 
                    <source src='/assets/videos/running.mp4' type="video/mp4"></source>
                </video>

                <video className="gradient_video" src="https://videos.ctfassets.net/6jnflt57iyzx/4FH0IKhgNVCJymm5Wwh2BS/629d118f8a93ebab778192b35cd89fe7/desktop_gradient_fast.m4v" poster="https://images.ctfassets.net/6jnflt57iyzx/4P8R2lPuGAN3gZqhxcAiFk/ba104430bafe4208d7a65c4833dbf036/desktop_static.jpeg" autoPlay loop muted width="100%">                        
                </video>

                <div className="logo">
                    <div className="navigation">
                         <div className="logo_nav">
                             <Logo/> 
                        </div>

                        <div className="bar">
                            <table className="table">
                                <tr>
                                    <th onClick={handleClick}>BIKES </th>
                                    <th>TREADS</th>
                                    <th>APP</th>
                                    <th>CLASSES</th>
                                    <th>ACCESSORIES</th>
                                    <th>APPAREL</th>
                                </tr>
                            </table>
                        </div>
                        
                        <div className="presentation_nav">
                            <Presentation/> <Cart/><Expand/>
                        </div>

                    
                       
                    </div>
                   
                </div>
                <div className="center_grid">
                   
                        <div className="center_message">
                            <div className="center_order">
                                <div className="center_div1">
                                    <SideArrow/>
                                </div>

                                <div className= "center_div2">
                                   THE   PELOTON  TREAD  IS  
                                   <br/>
                                   COMING  MAY  27
                                   <br/>

                                  <div className= "small_font">
                                      <p>

                                      </p>
                                        Run, lift and stretch in next-level total body
                                        <br/>
                                        workouts designed to meet your every goal.
                                  </div>
                                      <p>
                                          
                                      </p>
                                  <button className="red_button" type="button">EXPLORE THE TREAD</button>
                                
                                  <button className="red_button" type="button">TRY IN STORES TODAY</button>
                                </div>

                                <div className="center_div3 transform">
                                    <SideArrow/>
                                </div>
                            </div>
                                
                        </div>
             
                 
                </div>
               
            </div>


            <div className="div3">
                <table className="center">
                    <tr>
                        <th>
                            <div className="box">
                                <img className="img1 photo" src={treadmill}/>
                                <br></br>
                                <p className="font_light"> 
                                    TREADS
                                </p>
                            </div>
                            
                        </th>
                        <th>    
                            <div className="box">
                                <img className="img1 photo" src={bike}/>
                                <br></br>
                                <p className="font_light"> 
                                    BIKES
                                </p>
                            </div>
                            
                        </th>
                        <th>    
                            <div className="box">
                                <img className="img1 photo" src={app}/>
                                <br></br>
                                <p className="font_light"> 
                                    APP
                                </p>
                            </div>
                        </th>
                        <th>    
                            <div className="box">
                                <img className="img1 photo" src={apparel}/>
                              
                                <p className="font_light"> 
                                    APPAREL
                                </p>
                            </div>
                        </th>
                        <th>    
                            <div className="box">
                                <img className="img1 photo" src={shoes}/>
                                <p className="font_light"> 
                                    SHOES
                                </p>
                            </div>
                        </th>
                    </tr>
                </table>
            </div>

            <div className="div4">
                <img className="left photo_3" src={manbike}/>
                <p className="right center">
                    <p className="title">
                            THE ORIGINAL PELOTON BIKE
                    </p>
                    <p className="blurb">
                    Bring home the Bike with our best price ever
                    </p>

                    <table className="small_font_2">
                        <tr>
                            <th className="vertical">
                                Now starting at
                                <p className="pricing">
                                    $1,895 
                                </p>
                                
                            </th>
                            <th >
                                Pay monthly
                                <p className="pricing">
                                $49/MO†
                                </p>
                            </th>
                        </tr>
                        <tr>
                            Peloton All-Access Membership and accessories separate.
                        </tr>
                    </table>
                        <div className="new_button">
                              <button className="red_button" type="button">EXPLORE BIKE</button>
                        </div>
                        
                            <p className="small_font_2">
                                As low as $49/mo for 39 mos with 0% APR. See financing options
                            </p>

                    
                
                </p>
            </div>
              
        </div>
    )
}
export default Home