import React from "react";
import { connect } from "react-redux";

const GameState = ({ remaining, correctGuess }) => {
  const guessText = correctGuess === 1 ? "guess" : "guesses";
  return (
    <div>
      <p>{remaining} cards remaining</p>
      <p>
        {correctGuess} correct {guessText}
      </p>
    </div>
  );
};

export default connect(
  ({ deck: { remaining }, gameState: { correctGuesses } }) => ({
    remaining,
    correctGuesses
  })
)(GameState);
