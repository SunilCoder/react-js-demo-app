import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.counter.value,
  };
  render() {
    return (
      <div>
        <span className={this.getBadgesClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  handleIncrement = () => {
    return this.setState({ count: this.state.count + 1 });
  };

  getBadgesClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const counts = "Zero";
    return this.state.count === 0 ? counts : this.state.count;
  }
}

export default Counter;
