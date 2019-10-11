import React, { Component } from "react";
import axios from 'axios';
import NavBar from '../../components/NavBar';
import { List, ListItem } from "../../components/List";
import Button from "../../components/Button";
import "./minor.css";


class Minor extends Component {
    state = {
        generate: {
            href: "/minor",
            name: "Generate 5 Minor Magic Items"
        },
        dbItems: [],
        itemNames: []
    }
    // When the component mounts retreive all minor arrays
    componentDidMount() {
        this.loadMinor();
    }

    // Loads all minor arrays to states
    loadMinor = () => {
        axios.get('http://localhost:5000/api/minor')
            .then(response => {
                this.setState({ dbItems: response.data[0].minorItem });
            })
            .catch(err => console.log(err));
    };

    generateHandler = (event) => {
        event.preventDefault();
        let generatedItem = [];
        //Generate 5 minor names
        let i = 0;
        for (i = 0; i < 5; i++) {
            //pull random name
            let itemName = this.state.dbItems[Math.floor(Math.random() * this.state.dbItems.length)];

            //send to array
            generatedItem.push(itemName);
            console.log("generated", generatedItem);
            //set state to array of minor item names
            this.setState({ itemNames: generatedItem })
        };
    };

    render() {
        return (
            <div className="minorGenerator">
                <NavBar />
                <h1>Minor Magic Item Generator</h1>
                <List>
                    {this.state.itemNames.map(minor => (
                        <ListItem key={minor}>
                            {minor}
                        </ListItem>
                    ))}
                </List>
                <Button onClick={this.generateHandler} name={this.state.generate.name} />
            </div>
        );
    }
}

export default Minor;