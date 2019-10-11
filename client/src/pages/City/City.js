import React, { Component } from "react";
import axios from 'axios';
import NavBar from '../../components/NavBar';
import { List, ListItem } from "../../components/List";
import Button from "../../components/Button";
import "./city.css";


class City extends Component {
    state = {
        generate: {
            href: "/city",
            name: "Generate 5 City Names"
        },
        dbNames: [],
        cityNames: []
    }
    // When the component mounts retreive all city arrays
    componentDidMount() {
        this.loadCity();
    }

    // Loads all city arrays to states
    loadCity = () => {
        axios.get('http://localhost:5000/api/city')
            .then(response => {
                this.setState({ dbNames: response.data[0].city });
            })
            .catch(err => console.log(err));
    };

    generateHandler = (event) => {
        event.preventDefault();
        let generatedName = [];
        //Generate 5 city names
        let i = 0;
        for (i = 0; i < 5; i++) {
            //pull random name
            let cityName = this.state.dbNames[Math.floor(Math.random() * this.state.dbNames.length)];

            //send to array
            generatedName.push(cityName);
            console.log("generated", generatedName);
            //set state to array of city names
            this.setState({ cityNames: generatedName })
        };
    };

    render() {
        return (
            <div className="cityGenerator">
                <NavBar />
                <h1>City Name Generator</h1>
                <List>
                    {this.state.cityNames.map(city => (
                        <ListItem key={city}>
                            {city}
                        </ListItem>
                    ))}
                </List>
                <Button onClick={this.generateHandler} name={this.state.generate.name} />
            </div>
        );
    }
}

export default City;