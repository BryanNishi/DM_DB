import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import "./style.css";

class Characters extends Component {
  state = {
    generators: [
      { to: "/advcharacter", name: "Character Creator*" },
      { to: "/name", name: "Name Generator" },
      { to: "/features", name: "Class Features Search" },
      { to: "/classes", name: "Class Search*" },
      { to: "/character", name: "Quick NPC Creator*" },
      { to: "/npc", name: "NPC Creator*" },
      { to: "/npc", name: "Character Flaws*" }
    ]
  };

  render() {
    let charButtons = (
      <div>
        {this.state.generators.map(gen => {
          return (
            <Link to={gen.to}>
              <Button key={gen.name} name={gen.name} />
            </Link>
          );
        })}
      </div>
    );

    return (
      <div className="characters">
        <NavBar />
        <h1>Character Creation</h1>
        <h3>* = features coming soon!</h3>
        <div className="container">
          <div className="characterButtons">
            <h3>Character Creation</h3>
            {charButtons}
          </div>
          <div className="linkButtons">
            <h3>External Links</h3>
            <a
              href="https://www.dndbeyond.com/characters/builder#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>DnD Beyond Character Builder</button>
            </a>
            <a
              href="https://www.heroforge.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Hero Forge Custom Miniatures</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Characters;
