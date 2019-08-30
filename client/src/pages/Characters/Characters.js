import React, { Component } from "react";
import NavBar from '../../components/NavBar';
import Button from "../../components/Button";
import { Link } from 'react-router-dom';
import "./style.css";


class Characters extends Component {

    state = {
        generators: [
            { to: "/advcharacter", name: "Character Creator" },
            { to: "/name", name: "Name Generator" },
            { to: "/features", name: "Class Features" },
            { to: "/classes", name: "Class Search" },
            { to: "/character", name: "Quick NPC Creator" },
            { to: "/npc", name: "NPC Creator" },
            { to: "/npc", name: "Character Flaws" },
        ]
    }


    render() {

        let charButtons = (
            <div>
                {this.state.generators.map(gen => {
                    return <Link to={gen.to}>
                        <Button key={gen.name} name={gen.name} />
                    </Link>
                })}
            </div>
        );

        return (
            <div className="characters">
                <NavBar />
                <h1>Character Creation</h1>
                <div className="container">
                    {charButtons}
                </div>
            </div>
        );
    }
}

export default Characters;