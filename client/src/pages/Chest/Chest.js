import React, { Component } from "react";
import axios from 'axios';
import NavBar from '../../components/NavBar';
import { List, ListItem } from "../../components/List";
import Button from "../../components/Button";
import "./chest.css";


class Chest extends Component {
    state = {
        generate: {
            href: "/chest",
            name: "Generate 5 Treasure Chests"
        },
        style: [],
        material: [],
        trim: [],
        decor: [],
        trap: [],
        lock: [],
        key: [],
        chestNames: [],
    }
    // When the component mounts retreive all chest arrays
    componentDidMount() {
        this.loadChest();
    }

    // Loads all chest arrays to states
    loadChest = () => {
        axios.get('http://localhost:5000/api/chest')
            .then(response => {
                this.setState({ style: response.data[0].style });
                this.setState({ material: response.data[0].material });
                this.setState({ trim: response.data[0].trim });
                this.setState({ decor: response.data[0].decor });
                this.setState({ trap: response.data[0].trap });
                this.setState({ lock: response.data[0].lock });
                this.setState({ key: response.data[0].key });
            })
            .catch(err => console.log(err));
    };

    generateHandler = (event) => {
        event.preventDefault();
        let generatedName = [];
        //Generate 5 chest names
        let i = 0;
        for (i = 0; i < 5; i++) {
            //pull random style
            let style = "A " + this.state.style[Math.floor(Math.random() * this.state.style.length)] + " styled chest is made of ";
            //pull random tripp
            let material = this.state.material[Math.floor(Math.random() * this.state.material.length)] + ", trimmed with ";
            //pull random hazard
            let trim = this.state.trim[Math.floor(Math.random() * this.state.trim.length)] + ", and decorated with ";
            //pull random disarm
            let decor = this.state.decor[Math.floor(Math.random() * this.state.decor.length)] + ". ";
            //pull random disarm
            let trap = "It has a " + this.state.trap[Math.floor(Math.random() * this.state.trap.length)] + " trap with a ";
            //pull random disarm
            let lock = this.state.lock[Math.floor(Math.random() * this.state.lock.length)] + " lock. ";
            //pull random disarm
            let key = "The Key seems to be " + this.state.key[Math.floor(Math.random() * this.state.key.length)];

            //send to array
            generatedName.push(style + material + trim + decor + trap + lock + key);
            console.log("generated", generatedName);
            //set state to array of chest names
            this.setState({ chestNames: generatedName })
        };
    };

    render() {
        return (
            <div className="chestGenerator">
                <NavBar />
                <h1>Treasure Chest Generator</h1>
                <List>
                    {this.state.chestNames.map(chest => (
                        <ListItem key={chest}>
                            {chest}
                        </ListItem>
                    ))}
                </List>
                <Button onClick={this.generateHandler} name={this.state.generate.name} />
            </div>
        );
    }
}

export default Chest;