import React, { Component } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      left: 0,
      right: 1
    };

    this.leftArrow = this.leftArrow.bind(this);
    this.rightArrow = this.rightArrow.bind(this);
  }

  leftArrow() {
    this.setState(prevState => ({ left: prevState.left - 1 }));
    let tempApt = {
      left: this.state.left
    };

    this.props.getData(tempApt);
    //console.log(this.state.left);
  }

  rightArrow() {
    this.setState(prevState => ({ right: prevState.right + 1 }));
    let tempApt = {
      right: this.state.right
    };

    this.props.getData(tempApt);
  }

  render() {
    return (
      <div>
        <h1>Scenary</h1>
        <FaChevronLeft onClick={this.leftArrow} />
        <img key={this.props.id} src={this.props.src} alt="slider img" />
        <FaChevronRight onClick={this.rightArrow} />
      </div>
    );
  }
}

export default Slider;
