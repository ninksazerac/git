import React from "react";
import "./App.css";
class ButtonVote extends React.Component {
  onTrigger = () => {
    this.props.parentcallback();
  };
  render() {
    return (
      <button className="btn-count" onClick={this.onTrigger}>
        {this.props.content}
      </button>
    );
  }
}

export default ButtonVote;
