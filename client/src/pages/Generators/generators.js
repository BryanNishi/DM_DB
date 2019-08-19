import React, { Component } from "react";
import NavBar from '../../components/NavBar';
import Button from "../../components/Button";

import "./generators.css";


class Generators extends Component {

    state = {
        generators: [
            { href: "/advcharacter", name: "Character Generator" },
            { href: "/name", name: "Name Generator" },
            { href: "/features", name: "Class Features" },
            { href: "/classes", name: "Class Search" },
            { href: "/character", name: "Quick NPC Generator" },
            { href: "/npc", name: "NPC Generator" },
            { href: "/name", name: "Name Generator" },
            { href: "/land", name: "Land Name Generator" },
            { href: "/inn", name: "Inn Name Generator" },
            { href: "/dungeon", name: "Dungeon Generator" },
            { href: "/treasure", name: "Treasure Generator" },
        ]
    }


    render() {

        let genButtons = (
            <div>
                {this.state.generators.map(gen => {
                    return <Button
                        key={gen.name}
                        href={gen.href}
                        name={gen.name} />
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