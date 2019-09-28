import React, { Component } from "react";
import NavBar from '../../components/NavBar';
import Button from "../../components/Button";
import GoogleAd from '../../components/GoogleAd';
import { Link } from 'react-router-dom';
import "./generators.css";


class Generators extends Component {

    state = {
        nameGen: [
            { to: "/name", name: "Character Names" },
            { to: "/land", name: "Land Name" },
            { to: "/inn", name: "Inn/Tavern Name" },
            { to: "/weapon", name: "Weapon Names" },
            { to: "/city", name: "City/Town Names" },
        ],
        itemGen: [
            { to: "/magic", name: "Magic Item" },
            { to: "/minor", name: "Minor Magic Item" },
            { to: "/chest", name: "Treasure Chests" },
            { to: "/loot", name: "Loot" },
        ],
        worldGen: [
            { to: "/environment", name: "Environment Details" },
            { to: "/hook", name: "Adventure Hooks" },
            { to: "/rumors", name: "Rumors" },
            { to: "/trap", name: "Traps/Puzzles" },
            { to: "/long", name: "Long Rest Encounters" },
            { to: "/encounter", name: "Travel Encounters" },
            { to: "/combat", name: "Combat Encounters" },
            { to: "/dungeon", name: "Dungeon" },
        ],
        miscGen: [
            { to: "/fail", name: "Crit Fails" },
        ]
    }


    render() {

        let nameButtons = (
            <div>
                {this.state.nameGen.map(gen => {
                    return <Link to={gen.to}>
                        <Button key={gen.name} name={gen.name} />
                    </Link>
                })}
            </div>
        );
        let itemButtons = (
            <div>
                {this.state.itemGen.map(gen => {
                    return <Link to={gen.to}>
                        <Button key={gen.name} name={gen.name} />
                    </Link>
                })}
            </div>
        );
        let worldButtons = (
            <div>
                {this.state.worldGen.map(gen => {
                    return <Link to={gen.to}>
                        <Button key={gen.name} name={gen.name} />
                    </Link>
                })}
            </div>
        );
        let miscButtons = (
            <div>
                {this.state.miscGen.map(gen => {
                    return <Link to={gen.to}>
                        <Button key={gen.name} name={gen.name} />
                    </Link>
                })}
            </div>
        );

        return (
            <div className="generator">
                <NavBar />
                <GoogleAd />
                <h1>Random Generators</h1>
                <div className="container">
                    <div className="nameButtons">
                        <h3>Name Generators</h3>
                        {nameButtons}
                    </div>
                    <div className="itemButtons">
                        <h3>Item Generators</h3>
                        {itemButtons}
                    </div>
                    <div className="worldButtons">
                        <h3>World Generators</h3>
                        {worldButtons}
                    </div>
                    <div className="miscButtons">
                        <h3>Misc Generators</h3>
                        {miscButtons}
                    </div>
                    <div className="miscButtons">
                        <h3>External Generator Links</h3>
                        <a href="http://tools.goblinist.com/5enc" target="_blank" rel="noopener noreferrer"><button>Encounter Generator</button></a>
                        <a href="https://www.fantasynamegenerators.com/" target="_blank" rel="noopener noreferrer"><button>Fantasy Name Generator</button></a>
                        <a href="https://donjon.bin.sh/5e/magic/shop.html" target="_blank" rel="noopener noreferrer"><button>Magic Shop Generator</button></a>
                        <a href="https://www.reddit.com/r/d100/comments/73v0ym/index_of_d100_lists/" target="_blank" rel="noopener noreferrer"><button>Reddit d100 Lists</button></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Generators;