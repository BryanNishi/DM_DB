import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import Button from "../../components/Button";
import API from "../../utils/API";
import $ from "jquery";
import "./spellbook.css";

class Spell extends Component {
  state = {
    spellList: [],
    casting_time: "",
    classes: "",
    components: "",
    duration: "",
    level: "",
    name: "",
    page: "",
    range: "",
    ritual: "",
    school: "",
    subclasses: ""
  };

  componentDidMount() {
    API.getSpell("")
      .then(res => {
        this.setState({ spellList: res.data.results.map(spell => spell.name) });
      })
      .catch(err => console.log(err));

    document.addEventListener("keypress", event => {
      let buttonClicked = event.which || event.keyCode;

      if (buttonClicked === 13) {
        event.preventDefault();
        let choice = $("#spellSearch").val();

        this.spellSearch(choice);
      }
    });
  }

  selectSpell = event => {
    console.log(event.target.value);

    var choice = event.target.value;

    let spellIndex = this.state.spellList.indexOf(choice);

    if (spellIndex !== -1) {
      this.spellSearch(event.target.value);
    }
  };

  submitSearch = event => {
    event.preventDefault();

    let choice = $("#spellSearch").val();

    this.spellSearch(choice);
  };

  spellSearch = choice => {
    console.log(choice);

    console.log(this.state.spellList.indexOf(choice));

    let spellIndex = this.state.spellList.indexOf(choice);

    if (spellIndex !== -1) {
      API.getSpell(spellIndex + 1).then(res => {
        console.log(res.data);
        let results = res.data;

        this.setState({
          casting_time: results.casting_time,
          classes: results.classes.map(value => value.name).join(", "),
          components: results.components.join(", "),
          desc: results.desc.join(" "),
          duration: results.duration,
          level: results.level,
          name: results.name,
          page: results.page,
          range: results.range,
          ritual: results.ritual,
          school: results.school.name,
          subclasses: results.subclasses.length
            ? results.subclasses.map(value => value.name).join(", ")
            : "N/A"
        });
      });
    } else {
      $("#noResults")
        .html("No Results Found")
        .css({ color: "red" });
      this.setState({ name: "" });
    }
  };

  render() {
    return (
      <div className="spellBody">
        <NavBar />
        <h1>Spell Book</h1>
        <div className=" d-flex justify-content-center">
          <form>
            <input
              list="browsers"
              name="browser"
              id="spellSearch"
              className="form-control"
              placeholder="Search Spell Library"
              onSelect={this.selectSpell.bind(this)}
            />
            <datalist id="browsers">
              {this.state.spellList.map(spell => (
                <option key={spell} value={spell} />
              ))}
            </datalist>
            <center>
              <Button
                id="spellSubmit"
                type="submit"
                onClick={this.submitSearch}
                name="Search"
              />
              <Button id="spellClear" type="submit" name="Clear" />
            </center>
          </form>
        </div>
        <div className="row">
          <div className="col-md-12">
            {this.state.name ? (
              <div className="scroll">
                <div className="row justify-content-around spellTable">
                  <div className="col-sm-4 mainStats">
                    <h3> {this.state.name}</h3>
                    <hr />
                    <strong>Level:</strong> {this.state.level}
                    <br />
                    <strong>Range:</strong> {this.state.range}
                    <br />
                    <strong>Casting Time:</strong> {this.state.casting_time}
                    <br />
                    <strong>Ritual:</strong> {this.state.ritual}
                    <br />
                    <strong>Components:</strong> {this.state.components}
                    <hr />
                    <strong>Page:</strong> {this.state.page}
                    <br />
                    <strong>Classes:</strong> {this.state.classes}
                    <br />
                    <strong>School:</strong> {this.state.school}
                    <br />
                    <strong>Subclasses:</strong> {this.state.subclasses}
                  </div>
                  <div className="col-sm-7 description">
                    <strong>Description:</strong>
                    <br />
                    {this.state.desc}
                  </div>
                </div>
              </div>
            ) : (
              <div className="col">
                <h3 id="noResults">No Search Results Available</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Spell;
