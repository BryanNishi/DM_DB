import React from "react";
import NavBar from '../../components/NavBar'
import GoogleAd from '../../components/GoogleAd';
import "./about.css";

const style = {
    marginTop: '15px',
    marginBottom: '20px'
};

const About = (props) => {



    return (

        <div className="about">
            <NavBar />
            <GoogleAd />
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
            <div className="info">
                <h3>All data is stored locally to your machine, no login required.</h3>
                <h2>Clearing your cache will delete your info!</h2>
                <h3>Version 0.2.5</h3>
            </div>
            <div className="footer">
                <p>
                    DISCLAIMER: This Web site is not affiliated with, endorsed, sponsored, or specifically approved by Wizards of the Coast LLC.
                    This Web site may use the trademarks and other intellectual property of Wizards of the Coast LLC,
                    which is permitted under Wizards'  <span><a href="http://dnd.wizards.com/articles/features/fan-site-kit">Fan Site Policy</a></span>.
                    For example, Dungeons & Dragons® is a trademark[s] of Wizards of the Coast.
                    For more information about Wizards of the Coast or any of Wizards' trademarks or other intellectual property,
                    please visit their website at <span><a href="http://wizards.com">wizards.com</a></span>.
                    </p>
                <h3>Built by: <a href="https://www.bryannishi.com" target="_blank" rel="noopener">Bryan Nishi</a> 2019</h3>
            </div>
        </div>
    )
}



export default About;