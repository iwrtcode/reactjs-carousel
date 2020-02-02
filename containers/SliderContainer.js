import React, { Component } from "react";
import axios from "axios";
import Slider from "../components/Slider";

class SliderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: [],
      posts: [],
      initialImg: ""
    };
  }

  componentWillMount() {
    console.log(1);
    axios.get("http://jsonplaceholder.typicode.com/photos").then(response => {
      let apts = response.data.slice(0, 10).map(item => {
        this.setState({ initialImg: item.thumbnailUrl, id: item.id });
        return item;
      });

      this.setState({
        posts: apts
      });
    });
  }

  currentSlide(clickedSlideIndex) {
    let currentImgIndex = clickedSlideIndex.right;
    console.log(this.state.posts);
    /*return this.state.posts.map(item =>
      this.setState({ initialImg: item[currentImgIndex].thumbnailUrl })
    );*/
  }

  render() {
    const { initialImg, id } = this.state;

    return (
      <Slider id={this.state.id} src={initialImg} getData={this.currentSlide} />
    );
  }
}

export default SliderContainer;
