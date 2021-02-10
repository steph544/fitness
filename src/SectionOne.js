import React from 'react'
import "./styles.css"
import manbike from "./images/manbike.png"

class SectionOne extends React.Component{

    render(){
        return(
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
        )
    }


}

export default SectionOne