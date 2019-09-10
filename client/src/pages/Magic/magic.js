import React, { Component } from "react";
import API from "../../utils/API";
import NavBar from '../../components/NavBar';
import { Row, Form, FormGroup, Label, Input } from 'reactstrap';
import { List, ListItem } from "../../components/List";
import Button from "../../components/Button";
import "./magic.css";


class Magic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            generate: {
                href: "/magic",
                magicItem: "Generate 5 Magic Items",
            },
            items: [],
            type: "",
            itemArray: [],
            fiveItems: []
        };
    }

    componentDidMount() {
        this.loadMagicItems();
    }

    loadMagicItems = () => {
        API.getMagicItems()
            .then(response => {
                this.setState({ items: response.data });
                console.log("DB items", this.state.items);
            })
            .catch(err => console.log(err));
    };

    setType = (event) => {
        this.setState({
            type: event.target.value
        },
            () => {
                this.loadItemArray();
            });
    };

    loadItemArray = () => {
        this.setState({ itemArray: this.state.items[0][this.state.type] });
        console.log("type", this.state.type);
    };


    generateItemHandler = (event) => {
        event.preventDefault();
        let generatedItem = [];
        //Generate 5 fail names
        let i = 0;
        for (i = 0; i < 5; i++) {
            //pull random name
            let randomItem = this.state.itemArray[Math.floor(Math.random() * this.state.itemArray.length)];

            //send to array
            generatedItem.push(randomItem);
            console.log("generated", generatedItem);
            //set state to array of fail names
            this.setState({ fiveItems: generatedItem })
        };
    };


    render() {
        return (
            <div className="magicItemGenerator">
                <NavBar />
                <h1>Magic Item Generator</h1>
                <div className="itemList">
                    {this.state.fiveItems.map(item => (
                        <List>
                            <ListItem key={item}>
                                {item}
                            </ListItem>
                        </List>
                    ))}
                </div>
                <Form>
                    <FormGroup>
                        <Label for="race">Type</Label>
                        <Input type="select" name="select" id="type" onChange={this.setType.bind(this)}>
                            <option defaultValue value="">Choose an Item Type</option>
                            <option value="minor">Minor</option>
                            <option value="armor">Armor</option>
                            <option value="potion">Potion</option>
                            <option value="ring">Ring</option>
                            <option value="rod">Rod</option>
                            <option value="scroll">Scroll</option>
                            <option value="staff">Staff</option>
                            <option value="weapon">Weapon</option>
                        </Input>
                    </FormGroup>
                </Form>
                <Row className="buttonList">
                    <Button onClick={this.generateItemHandler} name={this.state.generate.magicItem} />
                </Row>
            </div>
        );
    }
}

export default Magic;