import React, { Component } from "react";
import NavBar from '../../components/NavBar';
import Button from "../../components/Button";
import { Link } from 'react-router-dom';
import "./generators.css";


class Generators extends Component {

    state = {
        nameGen: [
            { to: "/name", name: "Character Names" },
            { to: "/land", name: "Land Name" },
            { to: "/inn", name: "Inn/Tavern Name" },
            { to: "/treasure", name: "Weapon Names" },
            { to: "/treasure", name: "City/Town Names" },
        ],
        itemGen: [
            { to: "/treasure", name: "Magic Item" },
            { to: "/treasure", name: "Food" },
            { to: "/treasure", name: "Treasure Chests" },
            { to: "/treasure", name: "Loot" },
        ],
        worldGen: [
            { to: "/treasure", name: "Environment Details" },
            { to: "/treasure", name: "Adventure Hooks" },
            { to: "/treasure", name: "Rumors" },
            { to: "/treasure", name: "Traps/Puzzles" },
            { to: "/treasure", name: "Encounters" },
            { to: "/dungeon", name: "Dungeon" },
        ],
        miscGen: [
            { to: "/treasure", name: "Crit Fails" },
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
                </div>
            </div>
        );
    }
}

export default Generators;