import React, { Component } from "react";
import { connect } from "react-redux";
import { startGame, cancelGame } from "../actions/settings";
import { fetchNewDeck } from "../actions/deck";
import fetchStates from "../reducers/fetchStates";
import Instructions from "./Instructions";

class App extends Component {
  startGame = () => {
    this.props.startGame();
    this.props.fetchNewDeck();
  };

  render() {
    console.log("this", this);

    if (this.props.fetchStates === fetchStates.error) {
      return (
        <div>
          <p>Please try reloading the app. An error occured!</p>
          <p>{this.props.message}</p>
        </div>
      );
    }
    return (
      <div>
        <div>Even or ods</div>
        {this.props.gameStarted ? (
          <div>
            <h3>The game is on!</h3>
            <br />
            <button onClick={this.props.cancelGame}>Cancel Game</button>
          </div>
        ) : (
          <div>
            <h3>A new game awaits</h3>
            <br />
            <button onClick={this.startGame}>Start Game</button>
            <hr />
            <Instructions />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state");

  const { gameStarted, fetchStates, message } = state;

  return {
    gameStarted,
    fetchStates,
    message
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     startGame: () => dispatch(startGame()),
//     cancelGame: () => dispatch(cancelGame()),
//     fetchNewDeck: () => dispatch(fetchNewDeck())
//   };
// };

const componentConnector = connect(
  mapStateToProps,
  {
    startGame,
    cancelGame,
    fetchNewDeck
  }
);

export default componentConnector(App);
