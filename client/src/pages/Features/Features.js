import React, { Component } from "react";
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import API from '../../utils/API';
import $ from 'jquery';
import "./features.css";

class Feature extends Component {

    state = {
        featureList: [],
        searchResults: []
    }

    componentDidMount() {
        API.getfeature("")
            .then(res => {
                this.setState({ featureList: res.data.results.map(feature => feature.name) })
            })
            .catch(err => console.log(err));

        document.addEventListener('keypress', (event) => {
            let buttonClicked = event.which || event.keyCode;

            if (buttonClicked === 13) {
                event.preventDefault();
                let choice = $("#featureSearch").val();

                this.featureSearch(choice);
            }
        });
    }

    selectFeature = event => {
        console.log(event.target.value);

        var choice = event.target.value;

        let featureIndex = this.state.featureList.indexOf(choice);

        if (featureIndex !== -1) {

            this.featureSearch(event.target.value);
        }
    }

    submitSearch = event => {
        event.preventDefault();
        let choice = $("#featureSearch").val();
        this.featureSearch(choice);
    }

    featureSearch = choice => {
        console.log(choice);
        console.log(this.state.featureList.indexOf(choice));
        let featureIndex = this.state.featureList.indexOf(choice);
        if (featureIndex !== -1) {
            API.getfeature(featureIndex + 1)
                .then(res => {
                    this.setState({
                        searchResults: res.data
                    });
                    console.log(this.state.searchResults);
                });
        } else {
            $("#noResults").html("No Results Found").css({ "color": "red" });
            this.setState({ searchResults: [] });
        }
    }

    render() {
        return (
            <div className="featureBody">
                <NavBar />
                <h1>Feature Search</h1>
                <div className=" d-flex justify-content-center">
                    <form>
                        <input list="browsers" name="browser" id="featureSearch" className="form-control" placeholder="Search Feature Library" onSelect={this.selectFeature.bind(this)} />
                        <datalist id="browsers">
                            {this.state.featureList.map((feature, index) => <option key={index} value={feature} />)}
                        </datalist>
                        <center>
                            <Button id="spellSubmit" type="submit" onClick={this.submitSearch} name="Search" />
                            <Button id="spellClear" type="submit" name="Clear" />
                        </center>
                    </form>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {this.state.searchResults.name ? (
                            <div className="scroll">
                                <div className="row justify-content-around spellTable">
                                    <div className="col-sm-4 mainStats">
                                        <strong>Name:</strong> {this.state.searchResults.name}<br />
                                        <strong>Level:</strong> {this.state.searchResults.level ? this.state.searchResults.level : "N/A"}<br />
                                    </div>
                                    <div className="col-sm-7 description">
                                        <strong>Description:</strong>
                                        {this.state.searchResults.desc.map((desc, index) => <span key={index}> {desc} <br /> </span>)}
                                    </div>
                                </div>
                            </div>

                        ) : <div>
                                <h3 id="noResults">No Search Results Available</h3>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Feature;