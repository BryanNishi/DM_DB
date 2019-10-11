import React, { Component } from "react";
import axios from 'axios';
import NavBar from '../../components/NavBar';
import { List, ListItem } from "../../components/List";
import Button from "../../components/Button";
import "./weapon.css";


class Weapon extends Component {
    state = {
        generate: {
            href: "/weapon",
            name: "Generate 5 Weapon Names"
        },
        dbNames: [],
        weaponNames: []
    }
    // When the component mounts retreive all weapon arrays
    componentDidMount() {
        this.loadWeapon();
    }

    // Loads all weapon arrays to states
    loadWeapon = () => {
        axios.get('http://localhost:5000/api/weapon')
            .then(response => {
                this.setState({ dbNames: response.data[0].name });
            })
            .catch(err => console.log(err));
    };

    generateHandler = (event) => {
        event.preventDefault();
        let generatedName = [];
        //Generate 5 weapon names
        let i = 0;
        for (i = 0; i < 5; i++) {
            //pull random name
            let weaponName = this.state.dbNames[Math.floor(Math.random() * this.state.dbNames.length)];

            //send to array
            generatedName.push(weaponName);
            console.log("generated", generatedName);
            //set state to array of weapon names
            this.setState({ weaponNames: generatedName })
        };
    };

    render() {
        return (
            <div className="weaponGenerator">
                <NavBar />
                <h1>Weapon Name Generator</h1>
                <List>
                    {this.state.weaponNames.map(weapon => (
                        <ListItem key={weapon}>
                            {weapon}
                        </ListItem>
                    ))}
                </List>
                <Button onClick={this.generateHandler} name={this.state.generate.name} />
            </div>
        );
    }
}

export default Weapon;