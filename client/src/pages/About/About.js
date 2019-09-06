import React from "react";
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
                    <li>Run a game and track initative with the DM Screen</li>
                    <li>Lookup monster stats, spells, classes and class features</li>
                    <li>Create your character, NPCs and your own world with the Generators (Coming Soon)</li>
                    <li>Roll any dice combo with the dice roller</li>
                    <li>Print out finished character sheets (Coming Soon)</li>
                </ul>
            </div>
            <h3>All data is stored locally to your machine, no login required.</h3>
            <h2>Clearing your cache will delete your info!</h2>
            <h3>Version 0.2.1</h3>
            <Footer />
        </div>
    )
}



export default About;