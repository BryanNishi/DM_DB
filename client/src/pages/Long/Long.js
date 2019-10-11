import React, { Component } from "react";
import axios from 'axios';
import NavBar from '../../components/NavBar';
import { List, ListItem } from "../../components/List";
import Button from "../../components/Button";
import "./long.css";


class LongRest extends Component {
    state = {
        generate: {
            href: "/long",
            name: "Generate 5 Long Rest Encounters"
        },
        dbLongRest: [],
        longRest: []
    }
    // When the component mounts retreive all long arrays
    componentDidMount() {
        this.loadLongRest();
    }

    // Loads all long arrays to states
    loadLongRest = () => {
        axios.get('http://localhost:5000/api/long')
            .then(response => {
                this.setState({ dbLongRest: response.data[0].longRest });
            })
            .catch(err => console.log(err));
    };

    generateHandler = (event) => {
        event.preventDefault();
        let generatedName = [];
        //Generate 5 long Rests
        let i = 0;
        for (i = 0; i < 5; i++) {
            //pull random name
            let longRest = this.state.dbLongRest[Math.floor(Math.random() * this.state.dbLongRest.length)];

            //send to array
            generatedName.push(longRest);
            console.log("generated", generatedName);
            //set state to array of long names
            this.setState({ longRest: generatedName })
        };
    };

    render() {
        return (
            <div className="longGenerator">
                <NavBar />
                <h1>Long Rest Generator</h1>
                <List>
                    {this.state.longRest.map(long => (
                        <ListItem key={long}>
                            {long}
                        </ListItem>
                    ))}
                </List>
                <Button onClick={this.generateHandler} name={this.state.generate.name} />
            </div>
        );
    }
}

export default LongRest;