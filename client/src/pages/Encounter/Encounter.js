import React, { Component } from "react";
import axios from 'axios';
import NavBar from '../../components/NavBar';
import { List, ListItem } from "../../components/List";
import Button from "../../components/Button";
import "./encounter.css";


class Encounter extends Component {
    state = {
        generate: {
            href: "/encounter",
            name: "Generate 5 Non-Combat Encounters"
        },
        dbEncounter: [],
        encounters: []
    }
    // When the component mounts retreive all encounter arrays
    componentDidMount() {
        this.loadEncounter();
    }

    // Loads all encounter arrays to states
    loadEncounter = () => {
        axios.get('http://localhost:5000/api/encounter')
            .then(response => {
                this.setState({ dbEncounter: response.data[0].encounter });
            })
            .catch(err => console.log(err));
    };

    generateHandler = (event) => {
        event.preventDefault();
        let generatedName = [];
        //Generate 5 encounter names
        let i = 0;
        for (i = 0; i < 5; i++) {
            //pull random name
            let encounters = this.state.dbEncounter[Math.floor(Math.random() * this.state.dbEncounter.length)];

            //send to array
            generatedName.push(encounters);
            console.log("generated", generatedName);
            //set state to array of encounter names
            this.setState({ encounters: generatedName })
        };
    };

    render() {
        return (
            <div className="encounterGenerator">
                <NavBar />
                <h1>Travel Encounter Generator</h1>
                <List>
                    {this.state.encounters.map(encounter => (
                        <ListItem key={encounter}>
                            {encounter}
                        </ListItem>
                    ))}
                </List>
                <Button onClick={this.generateHandler} name={this.state.generate.name} />
            </div>
        );
    }
}

export default Encounter;