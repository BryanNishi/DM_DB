import React from "react";

import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import "./dmscreen.css";

const Dmscreen = (props) => {



    return (

        <div className="dmscreen">
            <NavBar />
            <div className="dmscreen-bg">
                <h1>Dungeon Master's Screen</h1>

            </div>

            <Footer />
        </div>
    )
}



export default Dmscreen;