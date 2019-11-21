import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import "./generators.css";

class Generators extends Component {
  state = {
    nameGen: [
      { to: "/name", name: "Character Names", key: "n1" },
      { to: "/land", name: "Land Name", key: "n2" },
      { to: "/inn", name: "Inn/Tavern Name", key: "n3" },
      { to: "/weapon", name: "Weapon Names", key: "n4" },
      { to: "/city", name: "City/Town Names", key: "n5" }
    ],
    itemGen: [
      { to: "/magic", name: "Magic Item*", key: "i1" },
      { to: "/minor", name: "Minor Magic Item", key: "i2" },
      { to: "/chest", name: "Treasure Chests", key: "i3" },
      { to: "/loot", name: "Loot*", key: "i4" }
    ],
    worldGen: [
      { to: "/environment", name: "Environment Details*", key: "w1" },
      { to: "/hook", name: "Adventure Hooks*", key: "w2" },
      { to: "/rumors", name: "Rumors*", key: "w3" },
      { to: "/trap", name: "Traps/Puzzles", key: "w4" },
      { to: "/long", name: "Long Rest Encounters", key: "w5" },
      { to: "/encounter", name: "Travel Encounters", key: "w6" },
      { to: "/combat", name: "Combat Encounters*", key: "w7" },
      { to: "/dungeon", name: "Dungeon*", key: "w8" }
    ],
    miscGen: [{ to: "/fail", name: "Crit Fails", key: "m1" }]
  };

  render() {
    let nameButtons = (
      <div>
        {this.state.nameGen.map(gen => {
          return (
            <Link to={gen.to}>
              <Button key={gen.key} name={gen.name} />
            </Link>
          );
        })}
      </div>
    );
    let itemButtons = (
      <div>
        {this.state.itemGen.map(gen => {
          return (
            <Link to={gen.to}>
              <Button key={gen.key} name={gen.name} />
            </Link>
          );
        })}
      </div>
    );
    let worldButtons = (
      <div>
        {this.state.worldGen.map(gen => {
          return (
            <Link to={gen.to}>
              <Button key={gen.key} name={gen.name} />
            </Link>
          );
        })}
      </div>
    );
    let miscButtons = (
      <div>
        {this.state.miscGen.map(gen => {
          return (
            <Link to={gen.to}>
              <Button key={gen.key} name={gen.name} />
            </Link>
          );
        })}
      </div>
    );

    return (
      <div className="generator">
        <NavBar />
        <h1>Random Generators</h1>
        <h3>* = feature coming soon</h3>
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
            <a
              href="http://tools.goblinist.com/5enc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Encounter Generator</button>
            </a>
            <a
              href="https://www.fantasynamegenerators.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Fantasy Name Generator</button>
            </a>
            <a
              href="https://donjon.bin.sh/5e/magic/shop.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Magic Shop Generator</button>
            </a>
            <a
              href="https://www.reddit.com/r/d100/comments/73v0ym/index_of_d100_lists/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Reddit d100 Lists</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Generators;
