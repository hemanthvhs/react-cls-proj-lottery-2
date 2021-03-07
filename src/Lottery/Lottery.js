import React, { Component } from "react";
import Ball from "../Ball/Ball";
import "./Lottery.css";

class Lottery extends Component {
  // If the component doesn't receive any props then by default we can set the default Props for that component as below:
  // It should be of static defaultProps = {}
  static defaultProps = {
    title: "Mega",
    maxBalls: 6,
    maxNum: 40
  };

  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({ length: this.props.maxBalls })
    };
    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    // 1) Not so great approach of updating the state
    // const newNums = this.state.nums.map(num => {
    //   return Math.floor(Math.random() * this.props.maxNum);
    // });
    // this.setState({ nums: newNums });

    // 2) The ideal approach

    this.setState(curState => ({
      nums: curState.nums.map(num =>
        Math.floor(Math.random() * this.props.maxNum)
      )
    }));
  }

  handleClick() {
    // We can directly call this.generate on button click, but this is good practice to call handleClick. Inside that we can invoke generate method.
    this.generate();
  }

  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {console.log(this.state.nums)}
          {this.state.nums.map(el => {
            return <Ball num={el} />;
          })}
        </div>
        <button className="button" onClick={this.handleClick}>
          Generate
        </button>
      </section>
    );
  }
}

export default Lottery;
