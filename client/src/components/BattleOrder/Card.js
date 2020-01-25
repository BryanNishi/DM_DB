import React, { Component } from "react";
import PropTypes from "prop-types";
import { findDOMNode } from "react-dom";
import { DragSource, DropTarget } from "react-dnd";
import flow from "lodash/flow";
import Button from "../../components/Button";
import "./style.css";

const style = {
  border: "1px dashed black",
  padding: "0.5rem 1rem",
  margin: ".5rem",
  backgroundColor: "white",
  cursor: "move"
};

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    };
  }
};

const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%
    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.moveCard(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.any.isRequired,
    text: PropTypes.string.isRequired,
    moveCard: PropTypes.func.isRequired
  };

  // componentDidMount() {
  //   const retrievedCards = localStorage.getItem("Cards") || "";
  //   let newCards = JSON.parse(retrievedCards);
  //   this.setState({ cards: newCards });
  // }

  // deleteHandler = event => {
  //   console.log("Delete Trigger", this.props.index);
  //   let indexedCard = this.props;
  //   let newArray = this.state.cards;
  //   newArray.splice(indexedCard, 1);
  //   localStorage.setItem("Cards", JSON.stringify(newArray));
  // };

  deleteCardHandler() {
    this.props.cardInfo(this.state.cards);
    let importedCards = this.props.storedCardsToSend;
    this.setState({ cards: importedCards });
    console.log("cards recieved from parent", importedCards);
    let indexedCard = this.props.index;
    console.log("index is... ", indexedCard);
    let newArray = this.state.cards;
    newArray.splice(indexedCard, 1);
    console.log("new spliced array", newArray);
    let newCardArray = JSON.stringify(newArray);
    console.log("new array to send ", newCardArray);
  }

  render() {
    const {
      text,
      isDragging,
      connectDragSource,
      connectDropTarget,
      id,
      hp,
      ac
    } = this.props;
    const opacity = isDragging ? 0 : 1;

    return (
      connectDragSource &&
      connectDropTarget &&
      id &&
      hp &&
      ac &&
      connectDragSource(
        connectDropTarget(
          <div style={{ ...style, opacity }}>
            <div className="intiativeStats">
              <span>
                <b>Player:</b> <input className="id" placeholder={id} />{" "}
              </span>
              <span>
                <b>AC: </b> <input className="ac" placeholder={ac} />{" "}
              </span>
              <span>
                <b>HP: </b> <input className="hp" placeholder={hp} /> / {hp}
              </span>
              <span>
                <b>Intiative: </b>
                <input className="name" placeholder={text} />{" "}
              </span>
              <span>
                <b>Notes </b>
                <input className="notes" placeholder="Notes" />{" "}
              </span>
              <Button
                name="Delete"
                onClick={this.deleteCardHandler.bind(this)}
                deleteHandler={this.props.newCardArray}
              />
            </div>
          </div>
        )
      )
    );
  }
}

export default flow(
  DragSource("card", cardSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })),
  DropTarget("card", cardTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  }))
)(Card);
