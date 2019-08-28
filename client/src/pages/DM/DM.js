import React, { Component } from 'react';
import './DM.css';
import DM_ScreenPDF from '../../assets/images/dmScreen.pdf';
import NavBar from '../../components/NavBar';
import Card from '../../components/BattleOrder/Card';
import HTML5Backend from 'react-dnd-html5-backend'
import Textbox from "../../components/Textbox";
import { DragDropContext } from 'react-dnd';
import { Button, ButtonToolbar, FormGroup, Input, Row, Col, Container } from 'reactstrap';
const update = require('immutability-helper');

class DM extends Component {
    state = {
        cards: [

        ],
        name: "",
        intiative: "",
        ac: "",
        hp: "",
        dmNotes: "",
        campaignNotes: ""
    }

    componentDidMount() {
        let storedCampaignNotes = localStorage.getItem('Campaign Notes') || '';
        document.getElementById("campaignNotes").value = storedCampaignNotes;

        let storedDmNotes = localStorage.getItem('DM Notes') || '';
        document.getElementById("dmNotes").value = storedDmNotes;
    }

    moveCard = (dragIndex, hoverIndex) => {
        const { cards } = this.state
        const dragCard = cards[dragIndex]
        this.setState(
            update(this.state, {
                cards: {
                    $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
                },
            }),
        )
    }

    addCharacterName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    addCharacterAC = (event) => {
        this.setState({
            ac: event.target.value
        })
    }

    addCharacterHP = (event) => {
        this.setState({
            hp: event.target.value
        })
    }

    addCharacterIntiative = (event) => {
        this.setState({
            intiative: event.target.value
        })
    }

    addCharacter = event => {
        event.preventDefault();

        let newCharacterObj = {
            id: this.state.name,
            text: this.state.intiative,
            ac: this.state.ac,
            hp: this.state.hp
        }

        console.log(newCharacterObj);

        let newCharacter = this.state.cards.concat(newCharacterObj);

        this.setState({ cards: newCharacter });

        this.setState({
            name: "",
            ac: "",
            hp: "",
            intiative: ""
        })

        document.getElementById("characterName").value = "";
        document.getElementById("characterHP").value = "";
        document.getElementById("characterAC").value = "";
        document.getElementById("characterIntiative").value = "";

        let newCard = this.state.cards;
        localStorage.setItem('Cards', newCard);
    }

    dmNotesHandler = (event) => {
        this.setState({
            dmNotes: event.target.value
        })
        let dmNotes = this.state.dmNotes;
        localStorage.setItem('DM Notes', dmNotes);

    }

    campaignNotesHandler = (event) => {
        this.setState({
            campaignNotes: event.target.value
        })
        let campaignNotes = this.state.campaignNotes;
        localStorage.setItem('Campaign Notes', campaignNotes);
    }
    
      

    render() {
        return (
            <div className="DM-Page">
                <NavBar />
                <h1>DM Screen</h1>
                {/* <div className=" d-flex justify-content-center">
                    <ButtonToolbar>
                        <Button className="create-btn" type="submit" onClick="loadCampaign" name="Load Campaign" />
                        <Button className="create-btn" type="submit" onClick="saveCampaign" name="Save Campaign" />
                    </ButtonToolbar>
                </div> */}
                <div className=" d-flex justify-content-center">
                    <div className="col-sm-5 fixed-Notes">
                        <h2>DM's Notes</h2>
                        <textarea id="dmNotes" onChange={this.dmNotesHandler.bind(this)} />
                    </div>
                    <div className="col-sm-5 fixed-Notes">
                        <h2>Campaign Notes</h2>
                        <textarea id="campaignNotes" onChange={this.campaignNotesHandler.bind(this)} />
                    </div>
                </div>
                <div className=" d-flex justify-content-center">
                    <div className="tracker">
                        <h2>Character/Initative Tracker</h2>
                        <Container>
                            <FormGroup className="newCharacterInput">
                                <Row>
                                    <Col>
                                        <Input type="input" name="inputName" id="characterName" placeholder="Name" onChange={this.addCharacterName.bind(this)} />
                                    </Col>
                                    <Col sm="3">
                                        <Input type="input" name="inputAC" id="characterAC" placeholder="AC" onChange={this.addCharacterAC.bind(this)} />
                                    </Col>
                                    <Col sm="3">
                                        <Input type="input" name="selectHP" id="characterHP" placeholder="HP" onChange={this.addCharacterHP.bind(this)} />
                                    </Col>
                                    <Col sm="3">
                                        <Input type="input" name="inputIntiative" id="characterIntiative" placeholder="Intiative" onChange={this.addCharacterIntiative.bind(this)} />
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Col md="12" md={{ size: 6, offset: 4 }}>
                                        <ButtonToolbar>
                                            <Button className="btn" type="submit" onClick={this.addCharacter}>Add Character</Button>
                                            <Button className="btn" type="submit" onClick={this.sortCharacter}>Sort</Button>
                                        </ButtonToolbar>
                                    </Col>
                                </Row>
                            </FormGroup>
                        </Container>
                        <div className="card-container">
                            {this.state.cards.map((card, i) => (
                                <Card
                                    key={card.id}
                                    index={i}
                                    id={card.id}
                                    ac={card.ac}
                                    hp={card.hp}
                                    text={card.text}
                                    moveCard={this.moveCard}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="dmScreen">
                        <iframe src={DM_ScreenPDF} width="1300" height="750" title="DM Screen" />
                    </div>
                </div>
            </div >
        );
    }
}


export default DragDropContext(HTML5Backend)(DM);
