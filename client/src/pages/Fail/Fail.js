import React, { Component } from "react";
import API from "../../utils/API";
import NavBar from "../../components/NavBar";
import { List, ListItem } from "../../components/List";
import Button from "../../components/Button";
import "./fail.css";

class Fail extends Component {
  state = {
    generate: {
      href: "/fail",
      name: "Generate 5 Crit Fails"
    },
    dbNames: [],
    failNames: []
  };
  // When the component mounts retreive all fail arrays
  componentDidMount() {
    this.loadFail();
  }

  // Loads all fail arrays to states
  loadFail = () => {
    API.getFail()
      .then(response => {
        this.setState({ dbNames: response.data[0].fail });
      })
      .catch(err => console.log(err));
  };

  generateHandler = event => {
    event.preventDefault();
    let generatedName = [];
    //Generate 5 fail names
    let i = 0;
    for (i = 0; i < 5; i++) {
      //pull random name
      let failName = this.state.dbNames[
        Math.floor(Math.random() * this.state.dbNames.length)
      ];

      //send to array
      generatedName.push(failName);
      console.log("generated", generatedName);
      //set state to array of fail names
      this.setState({ failNames: generatedName });
    }
  };

  render() {
    return (
      <div className="failGenerator">
        <NavBar />
        <h1>Crit Fail Generator</h1>
        <List>
          {this.state.failNames.map(fail => (
            <ListItem key={fail}>{fail}</ListItem>
          ))}
        </List>
        <Button
          onClick={this.generateHandler}
          name={this.state.generate.name}
        />
      </div>
    );
  }
}

export default Fail;
