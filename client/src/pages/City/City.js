import React, { Component } from "react";
import API from "../../utils/API";
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
        adjs: [],
        nouns: [],
        types: [],
        cityNames: []
    }
    // When the component mounts retreive all inn arrays
    componentDidMount() {
        this.loadCity();

    }

    // Loads all inn arrays to states
    loadInn = () => {
        API.getCity()
            .then(response => {
                this.setState({ adjs: response.data[0].adj });
                this.setState({ nouns: response.data[0].noun });
                this.setState({ types: response.data[0].type });
            })
            .catch(err => console.log(err));
    };

    generateHandler = (event) => {
        event.preventDefault();
        let generatedName = [];
        //Generate 5 inn names
        let i = 0;
        for (i = 0; i < 5; i++) {
            //pull random adjective
            let adj = "The " + this.state.adjs[Math.floor(Math.random() * this.state.adjs.length)] + " ";

            //pull random noun
            let noun = this.state.nouns[Math.floor(Math.random() * this.state.nouns.length)] + " ";

            //pull random type
            let type = this.state.types[Math.floor(Math.random() * this.state.types.length)];

            //send to array
            generatedName.push(adj + noun + type);
            console.log("generated", generatedName);
            //set state to array of inn names
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