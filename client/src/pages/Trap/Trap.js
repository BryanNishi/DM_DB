import React, { Component } from "react";
import axios from 'axios';
import NavBar from '../../components/NavBar';
import { List, ListItem } from "../../components/List";
import Button from "../../components/Button";
import "./trap.css";


class Trap extends Component {
    state = {
        generate: {
            href: "/trap",
            name: "Generate 5 Traps"
        },
        traps: [],
        tripped: [],
        hazard: [],
        disarm: [],
        trapNames: []
    }
    // When the component mounts retreive all trap arrays
    componentDidMount() {
        this.loadTrap();
    }

    // Loads all trap arrays to states
    loadTrap = () => {
        axios.get('http://localhost:5000/api/trap')
            .then(response => {
                this.setState({ traps: response.data[0].traps });
                this.setState({ tripped: response.data[0].tripped });
                this.setState({ hazard: response.data[0].hazard });
                this.setState({ disarm: response.data[0].disarm });
            })
            .catch(err => console.log(err));
    };

    generateHandler = (event) => {
        event.preventDefault();
        let generatedName = [];
        //Generate 5 traps
        let i = 0;
        for (i = 0; i < 5; i++) {
            //pull random trap
            let traps = this.state.traps[Math.floor(Math.random() * this.state.traps.length)] + " causes... ";
            //pull random tripp
            let tripped = this.state.tripped[Math.floor(Math.random() * this.state.tripped.length)] + " and then... ";
            //pull random hazard
            let hazard = this.state.hazard[Math.floor(Math.random() * this.state.hazard.length)] + ". The party notices...";
            //pull random disarm
            let disarm = this.state.disarm[Math.floor(Math.random() * this.state.disarm.length)] + " that disarms the trap.";



            //send to array
            generatedName.push(traps + tripped + hazard + disarm);
            console.log("generated", generatedName);
            //set state to array of trap names
            this.setState({ trapNames: generatedName })
        };
    };

    render() {
        return (
            <div className="trapGenerator">
                <NavBar />
                <h1>Trap Generator</h1>
                <List>
                    {this.state.trapNames.map(trap => (
                        <ListItem key={trap}>
                            {trap}
                        </ListItem>
                    ))}
                </List>
                <Button onClick={this.generateHandler} name={this.state.generate.name} />
            </div>
        );
    }
}

export default Trap;