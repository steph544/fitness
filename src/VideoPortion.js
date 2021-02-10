import React from 'react'
import "./styles.css"
import {ReactComponent as Logo} from "./images/logo.svg";
import {ReactComponent as Presentation} from "./images/presentation.svg";
import {ReactComponent as Cart} from "./images/cart.svg";
import {ReactComponent as Expand} from "./images/expand.svg";
import {ReactComponent as Arrow} from "./images/arrow.svg";
import {ReactComponent as SideArrow} from "./images/side_arrow.svg";
import Menu from "./Menu.js"
import {ReactComponent as SmallArrow} from "./images/small_arrow.svg"

class VideoPortion extends React.Component{

    state={
        bike: false
    }
    
   handleClick=()=>{
        this.setState({
            bike: !this.state.bike
        })
    }

    render(){
        return(
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
                                    <th onClick={this.handleClick}>
                                        BIKES 
                                    </th>
                                    <th>TREADS</th>
                                    <th>APP</th>
                                    <th>CLASSES</th>
                                    <th>ACCESSORIES</th>
                                    <th>APPAREL</th>
                                </tr>
                            </table>
                            <Menu bike={this.state.bike}/>
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
        )
    }


}

export default VideoPortion