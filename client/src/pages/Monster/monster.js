import React, { Component } from "react";
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import GoogleAd from '../../components/GoogleAd';
import API from '../../utils/API';
import $ from 'jquery';
import "./monster.css";

class Monster extends Component {

    state = {
        searchList: [],
        monsterArray: [],
        searchResults: []
    }

    componentDidMount() {
        API.getMonster("")
            .then(res => {
                this.setState({
                    searchList: res.data.results.map(monster => monster.name)
                });
            })
            .catch(err => console.log(err));
    }

    selectMonster = event => {
        console.log(event.target.value);
        var choice = event.target.value;
        let monsterIndex = this.state.searchList.indexOf(choice);
        if (monsterIndex !== -1) {
            this.monsterSearch(event.target.value);
        }
    }

    submitSearch = event => {
        event.preventDefault();
        let choice = $("#monsterSearch").val();
        this.monsterSearch(choice);
    }

    monsterSearch = choice => {
        let monsterIndex = this.state.searchList.indexOf(choice);
        console.log(monsterIndex);
        if (monsterIndex !== -1) {
            API.getMonster(monsterIndex + 1)
                .then(res => {
                    this.setState({
                        searchResults: res.data
                    });
                    console.log(this.state.searchResults);
                    const searchResults = this.state.searchResults;
                    $(".actions").html("");
                    $(".legendaryActions").html("");
                    $(".specialAbilities").html("");
                    for (let i = 0; i < searchResults.actions.length; i++) {
                        $(".actions").append(
                            `                
                        <p>${searchResults.actions[i].name} </p> 
                        <ul>
                        <li><strong>Attack Bonus</strong>: ${searchResults.actions[i].attack_bonus}</li>
                        <li><strong>Damage Dice</strong>: ${searchResults.actions[i].damage_dice ? searchResults.actions[i].damage_dice : "N/A"}</li>
                        <li><strong>Description</strong>: ${searchResults.actions[i].desc}</li>
                        </ul>
                        `
                        )
                    };


                    for (let i in searchResults.legendary_actions) {

                        $(".legendaryActions").append(
                            `                 
                        <p>${searchResults.legendary_actions[i].name} </p> 
                        <ul>
                        <li><strong>Attack Bonus</strong>: ${searchResults.legendary_actions[i].attack_bonus}</li>
                        <li><strong>Damage Dice</strong>: ${searchResults.legendary_actions[i].damage_dice ? searchResults.actions[i].damage_dice : "N/A"}</li>
                        <li><strong>Description</strong>: ${searchResults.legendary_actions[i].desc}</li>
                        </ul>
                        `
                        )
                    };

                    for (let i in searchResults.special_abilities) {

                        $(".specialAbilities").append(
                            `                 
                        <p>${searchResults.special_abilities[i].name} </p> 
                        <ul>
                        <li><strong>Attack Bonus</strong>: ${searchResults.special_abilities[i].attack_bonus}</li>
                        <li><strong>Damage Dice</strong>: ${searchResults.special_abilities[i].damage_dice ? searchResults.actions[i].damage_dice : "N/A"}</li>
                        <li><strong>Description</strong>: ${searchResults.special_abilities[i].desc}</li>
                        </ul>
                        `
                        )
                    };

                })
                .catch(err => console.log(err));

        } else {
            $(".noResults").html("No Results Found").css({ "color": "red" });
            this.setState({ searchResults: [] });
        }

    }



    render() {
        return (
            <div className="monsterBody">
                <NavBar />
                <GoogleAd />
                <h1>Monster Manual</h1>
                <div className="d-flex justify-content-center">
                    <form>
                        <input list="browsers" name="browser" id="monsterSearch" className="form-control" placeholder="Search Monsters" onSelect={this.selectMonster.bind(this)} />
                        <datalist id="browsers">
                            {this.state.searchList.map(monster => <option key={monster} value={monster} />)}
                        </datalist>
                        <center>
                            <Button type="submit" onClick={this.submitSearch} name="Search" />
                            <Button type="submit" name="Clear" />
                        </center>
                    </form>
                </div>
                <div class="row">
                    <div className="col-md-12">
                        {this.state.searchResults.name ? (
                            <div className="scroll">
                                <div className="row justify-content-around monsterTable">
                                    <div className="col-sm-4 mainStats">

                                        <h2>{this.state.searchResults.name}</h2>
                                        <br />
                                        <h3>Main Stats</h3>
                                        <hr />
                                        <strong>Hit Points:</strong> {this.state.searchResults.hit_points}<br />
                                        <strong>Armor Class:</strong> {this.state.searchResults.armor_class}<br />
                                        <strong>Challenge Rating:</strong> {this.state.searchResults.challenge_rating}<br />
                                        <strong>Charisma:</strong> {this.state.searchResults.charisma}<br />
                                        <strong>Constitution:</strong> {this.state.searchResults.constitution}<br />
                                        <strong>Dexterity:</strong> {this.state.searchResults.dexterity}<br />
                                        <strong>Intelligence:</strong> {this.state.searchResults.intelligence}<br />
                                        <strong>Strength:</strong> {this.state.searchResults.strength}<br />
                                        <strong>Wisdom:</strong> {this.state.searchResults.wisdom}<br />
                                        <hr />
                                        <strong>Hit Dice:</strong> {this.state.searchResults.hit_dice}<br />
                                        {this.state.searchResults.condition_immunities ? <div><strong>Conditional Immunities:</strong> {this.state.searchResults.condition_immunities}<br /></div> : ""}
                                        {this.state.searchResults.damage_vulnerabilities ? <div><strong>Damage Vulnerabilities:</strong> {this.state.searchResults.damage_vulnerabilities}<br /></div> : ""}
                                        {this.state.searchResults.constitution_save ? <div><strong>Constitution Save:</strong> {this.state.searchResults.constitution_save}<br /></div> : ""}
                                        {this.state.searchResults.wisdom_save ? <div><strong>Wisdom Save:</strong> {this.state.searchResults.wisdom_save}< br /></div> : ""}
                                        {this.state.searchResults.intelligence_save ? <div><strong>Intelligence Save:</strong> {this.state.searchResults.intelligence_save}<br /></div> : ""}
                                        {this.state.searchResults.dexterity_save ? <div><strong>Dexterity Save:</strong> {this.state.searchResults.dexterity_save}<br /></div> : ""}
                                        <hr />
                                        {this.state.searchResults.damage_immunities ? <div><strong>Damage Immunities:</strong> {this.state.searchResults.damage_immunities}<br /></div> : ""}
                                        {this.state.searchResults.damage_resistances ? <div><strong>Damage Resistances:</strong> {this.state.searchResults.damage_resistances}<br /></div> : ""}
                                        {this.state.searchResults.languages ? <div><strong>Languages:</strong> {this.state.searchResults.languages}<br /></div> : ""}
                                        {this.state.searchResults.perception ? <div><strong>Perception:</strong> {this.state.searchResults.perception}<br /></div> : ""}
                                        {this.state.searchResults.senses ? <div><strong>Senses:</strong> {this.state.searchResults.senses}<br /></div> : ""}
                                        {this.state.searchResults.size ? <div><strong>Size:</strong> {this.state.searchResults.size}<br /></div> : ""}
                                        {this.state.searchResults.speed ? <div><strong>Speed:</strong> {this.state.searchResults.speed}<br /></div> : ""}
                                        {this.state.searchResults.type ? <div><strong>Type:</strong> {this.state.searchResults.type}<br /></div> : ""}
                                        {this.state.searchResults.subtype ? <div><strong>Subtype:</strong> {this.state.searchResults.subtype}<br /></div> : ""}
                                        {this.state.searchResults.alignment ? <div><strong>Alignment:</strong> {this.state.searchResults.alignment}</div> : ""}
                                    </div>
                                    <div className="col-sm-7 secondaryStats">
                                        <h3>Actions</h3>
                                        <div className="actions"></div>
                                        {this.state.searchResults.legendary_actions ? (
                                            <span>
                                                <h3>Legendary Actions</h3>
                                                <div className="legendaryActions"></div>
                                            </span>
                                        ) : ""
                                        }
                                    </div>
                                </div>
                                <div className="row justify-content-around special">
                                    <div className="col-sm-10">
                                        {this.state.searchResults.special_abilities ? (
                                            <span>
                                                <h3>Special Abilities</h3>
                                                <div className="specialAbilities"></div>
                                            </span>
                                        ) : ""}
                                    </div>
                                </div>
                            </div>
                        ) : <div className="col">
                                <h3 className="noResults">No Search Results Available</h3>
                            </div>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Monster;