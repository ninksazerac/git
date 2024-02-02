import React from "react";
import "./App.css";
import ButtonVote from "./ButtonVote";
class CardFood extends React.Component {
  //   const [count, setCount] = useState();
  state = {
    count: 0,
  };
  handleIncrement = () => {
    const resultCount = this.state.count + 1;
    if (resultCount > 10) {
      alert("Cannot Vote more");
      return;
    }
    this.setState({ count: resultCount });
    // this.props.onVote(resultCount);
  };
  handleDecrement = () => {
    const resultCount = this.state.count - 1;
    if (resultCount < 0) {
      alert("Cannot unvote");
      return;
    }
    this.setState({ count: resultCount });
    // this.props.onVote(resultCount);
  };
  render() {
    let countText = this.state.count;
    if (this.state.count === 10) {
      countText = "MAX";
    }
    if (this.state.count === 0) {
      countText = "MIN";
    }
    return (
      <div className="card">
        <div className="card-top">
          <div className="card-left">
            <div>
              <h2>{this.props.type}</h2>
            </div>
            <div>
              <h4>{this.props.food}</h4>
            </div>
            <div>
              <p>{this.props.detail}</p>
            </div>
          </div>
          <div className="card-right">
            <img alt={this.props.imgalt} src={this.props.imgSrc}></img>
          </div>
        </div>
        <div className="card-bottom">
          <ButtonVote
            content="Click to Vote"
            parentcallback={this.handleIncrement}
          ></ButtonVote>
          <div className="box-count">
            <b>{countText}</b>
          </div>
          <ButtonVote
            content="Click to Unvote"
            parentcallback={this.handleDecrement}
          ></ButtonVote>
        </div>
      </div>
    );
  }
}
export default CardFood;
