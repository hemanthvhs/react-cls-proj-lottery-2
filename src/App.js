import React, { Component } from "react";
import Lottery from "./Lottery/Lottery";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Lottery />
        <Lottery title="Mini" maxNum={10} maxBalls={4} />
      </div>
    );
  }
}

export default App;
