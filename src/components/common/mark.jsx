import React, { Component } from "react";

class Mark extends Component {
  state = {};
  render() {
    let classes = "fa fa-star";
    if (!this.props.marked) classes = classes + "-o";
    return (
      <i
        style={{ cursor: "pointer" }}
        onClick={this.props.onClick}
        className={classes}
        aria-hidden="true"
      />
    );
  }
}

export default Mark;
