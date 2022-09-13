import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/actions/counterActions";

class CounterWithClass extends React.Component {
  incrementFunc = () => {
    this.props.incrementProp(5);
  };

  decrementFunc = () => {
    this.props.decrementProp(5);
  };

  render() {
    console.log(this.props);
    return (
      <>
        <div>Count Value: {this.props.count}</div>
        <button onClick={this.incrementFunc}>Add +5</button>
        <button onClick={this.decrementFunc}>Subtract -5</button>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counterReducer.count,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    incrementProp: (num) => {
      dispatch(increment(num));
    },
    decrementProp: (num) => {
      dispatch(decrement(num));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterWithClass);
