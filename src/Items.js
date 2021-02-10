import React from 'react'
import "./styles.css"
import treadmill from "./images/treadmill.png"
import bike from "./images/bike.png"
import app from "./images/app.png"
import apparel from "./images/apparel.png"
import shoes from "./images/shoes.png"

class Items extends React.Component{

    render(){
        return(
            
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
        )
    }


}

export default Items