import React from "react"
import "./styles.css"
import TopBar from "./TopBar.js"
import VideoPortion from "./VideoPortion.js"
import Items from "./Items.js"
import SectionOne from "./SectionOne"

function Home(){

    const handleClick=()=>{
        console.log("bike");
    }

    return(
        <div>
          
            <TopBar/>
            <VideoPortion/>
            <Items/>
            <SectionOne/>
    
        </div>
    )
}
export default Home