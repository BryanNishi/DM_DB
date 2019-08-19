import React from "react";
import Button from "../../components/Button"
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import "./about.css";

const About = (props) => {



    return (

        <div className="about">
            <NavBar />
            <div className="about-bg">
                <h1>Welcome to the Dungeon Master's Database</h1>
                <ul className="feature-list">
                    <li>Run a game and track initative with the DM Screen!</li>
                    <li>Lookup monster stats, spells, classes and class features!</li>
                    <li>Create your character, NPCs and your own world with the Generators!</li>
                    <li>Roll any dice combo with the dice roller!</li>
                    <li>Print out finished character sheets</li>
                </ul>
            </div>
            <Button className="login-btn" type="login" onClick="loginHandler" name="Login / Register" />
            <Footer />
        </div>
    )
}



export default About;