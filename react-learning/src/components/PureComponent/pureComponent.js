import React from "react";

class MyPureComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        arr: [10, 20]
    };
  }

  render() {
    console.log("Component Rendered");
    return <>
    {this.props.arr.map(val => <h3>{val}</h3>)}
    </>
  }
}

export default MyPureComponent;
