import React from "react";

class LifeCycleMethods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.intervalId = null;
  }

  componentDidMount() {
    console.log("Component Mounted!!")
    // this.intervalId = setInterval(() => console.log("Interval Trigged !!"), 2000)
  }

  componentDidUpdate() {
    console.log("Component Updated!!");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
    clearInterval(this.intervalId);
  }

   handleIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </>
    );
  }
}

export default LifeCycleMethods;