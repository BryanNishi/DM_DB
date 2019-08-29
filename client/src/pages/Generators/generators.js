import React, { Component } from "react";
import NavBar from '../../components/NavBar';
import Button from "../../components/Button";
import { Link } from 'react-router-dom';
import "./generators.css";


class Generators extends Component {

    state = {
        generators: [
            { to: "/advcharacter", name: "Character Creator" },
            { to: "/name", name: "Name Generator" },
            { to: "/features", name: "Class Features" },
            { to: "/classes", name: "Class Search" },
            { to: "/character", name: "Quick NPC Creator" },
            { to: "/npc", name: "NPC Creator" },
            { to: "/land", name: "Land Name" },
            { to: "/inn", name: "Inn Name" },
            { to: "/dungeon", name: "Dungeon" },
            { to: "/treasure", name: "Treasure" },
        ]
    }


    render() {

        let genButtons = (
            <div>
                {this.state.generators.map(gen => {
                    return <Link to={gen.to}>
                        <Button key={gen.name} name={gen.name} />
                    </Link>
                })}
            </div>
        );

        return (
            <div className="generator">
                <NavBar />
                <h1>Generators</h1>
                <div className="container">
                    {genButtons}
                </div>
            </div>
        );
    }
}

export default Generators;