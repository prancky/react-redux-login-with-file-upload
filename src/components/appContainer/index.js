import React, { Component } from "react";
import "./styles.css";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    let coverImage = {
      height: this.state.height + "px",
      width: this.state.width + "px",
      backgroundImage: `url(https://images.unsplash.com/photo-1502988632461-f68f5b4f415a?ixlib=rb-0.3.5&s=ebe94070863085e5b20d94a618f96518&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb)`
    };
    return (
      <div
        className={this.props.fullscreen === true ? "app-container" : ""}
        style={this.props.fullscreen === true ? coverImage : {}}
      >
        <div
          className={
            this.props.fullscreen === true ? "app-container-innder" : ""
          }
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default AppContainer;
