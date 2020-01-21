import React, { Component } from "react";
import DM_ScreenPDF from "../../assets/images/dmScreen.pdf";
import DM_ShopPDF from "../../assets/images/ShopCatalog.pdf";
import NavBar from "../../components/NavBar";
import Card from "../../components/BattleOrder/Card";
import Button from "../../components/Button";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
import { FormGroup, Input, Row, Col, Container } from "reactstrap";
import "./DM.css";

const update = require("immutability-helper");

class DM extends Component {
  state = {
    cards: [],
    name: "",
    intiative: "",
    ac: "",
    hp: "",
    dmNotes: "",
    campaignNotes: ""
  };

  componentDidMount() {
    // retrieve notes
    const storedCampaignNotes = localStorage.getItem("Campaign Notes") || "";
    document.getElementById("campaignNotes").value = storedCampaignNotes;

    const storedDmNotes = localStorage.getItem("DM Notes") || "";
    document.getElementById("dmNotes").value = storedDmNotes;

    // retrieve character initative cards
    const retrievedCards = localStorage.getItem("Cards") || "";
    if (retrievedCards !== "") {
      let newCharacter = JSON.parse(retrievedCards);
      this.setState({ cards: newCharacter });
    }
  }

  moveCard = (dragIndex, hoverIndex) => {
    const { cards } = this.state;
    const dragCard = cards[dragIndex];
    this.setState(
      update(this.state, {
        cards: {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard]
          ]
        }
      })
    );
  };

  addCharacterName = event => {
    this.setState({
      name: event.target.value
    });
  };

  addCharacterAC = event => {
    this.setState({
      ac: event.target.value
    });
  };

  addCharacterHP = event => {
    this.setState({
      hp: event.target.value
    });
  };

  addCharacterIntiative = event => {
    this.setState({
      intiative: event.target.value
    });
  };

  addCharacter = event => {
    event.preventDefault();

    let newCharacterObj = {
      id: this.state.name,
      text: this.state.intiative,
      ac: this.state.ac,
      hp: this.state.hp
    };

    console.log(newCharacterObj);

    let newCharacter = this.state.cards.concat(newCharacterObj);

    this.setState({ cards: newCharacter });

    this.setState({
      name: "",
      ac: "",
      hp: "",
      intiative: ""
    });

    document.getElementById("characterName").value = "";
    document.getElementById("characterHP").value = "";
    document.getElementById("characterAC").value = "";
    document.getElementById("characterIntiative").value = "";

    localStorage.setItem("Cards", JSON.stringify(newCharacter));
  };

  // state and localstorage using callback function to make up for setState not being synchronous
  dmNotesHandler = event => {
    let newNotes = event.target.value;
    this.setState({ dmNotes: newNotes }, () =>
      localStorage.setItem("DM Notes", newNotes)
    );
  };

  campaignNotesHandler = event => {
    let newNotes = event.target.value;
    this.setState({ campaignNotes: newNotes }, () =>
      localStorage.setItem("Campaign Notes", newNotes)
    );
  };

  deleteHandler = event => {
    console.log("Delete Trigger");
  };

  render() {
    return (
      <div className="DM-Page">
        <NavBar />
        <h1>DM Screen</h1>
        <div className=" d-flex justify-content-center">
          <div className="col-sm-5 fixed-Notes">
            <h2>DM's Notes</h2>
            <textarea id="dmNotes" onChange={this.dmNotesHandler.bind(this)} />
          </div>
          <div className="col-sm-5 fixed-Notes">
            <h2>Campaign Notes</h2>
            <textarea
              id="campaignNotes"
              onChange={this.campaignNotesHandler.bind(this)}
            />
          </div>
        </div>
        <div className=" d-flex justify-content-center">
          <div className="tracker">
            <h2>Character/Initative Tracker</h2>
            <Container>
              <FormGroup className="newCharacterInput">
                <Row>
                  <Col sm="3">
                    <Input
                      type="input"
                      name="inputName"
                      id="characterName"
                      placeholder="Name"
                      onChange={this.addCharacterName.bind(this)}
                    />
                  </Col>
                  <Col sm="2">
                    <Input
                      type="input"
                      name="inputAC"
                      id="characterAC"
                      placeholder="AC"
                      onChange={this.addCharacterAC.bind(this)}
                    />
                  </Col>
                  <Col sm="2">
                    <Input
                      type="input"
                      name="selectHP"
                      id="characterHP"
                      placeholder="HP"
                      onChange={this.addCharacterHP.bind(this)}
                    />
                  </Col>
                  <Col sm="2">
                    <Input
                      type="input"
                      name="inputIntiative"
                      id="characterIntiative"
                      placeholder="Intiative"
                      onChange={this.addCharacterIntiative.bind(this)}
                    />
                  </Col>
                  <Col sm="3">
                    <Button
                      type="submit"
                      onClick={this.addCharacter}
                      name="Add Character"
                    />
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
          <h2>Info Tables</h2>
          <div className="dmScreen">
            <iframe
              src={DM_ScreenPDF}
              width="1300"
              height="700"
              title="DM Screen"
            />
          </div>
        </div>
        <div className="col-sm-12">
          <h3>Shop Catalog</h3>
          <div className="dmScreen">
            <iframe
              src={DM_ShopPDF}
              width="1300"
              height="700"
              title="Shop Catalog"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(DM);
