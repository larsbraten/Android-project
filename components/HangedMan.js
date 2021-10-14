import React from "react";
import { drawRandomWord } from "../shared/strings/Questions";
import { Text, View, Image, StyleSheet, Button, Touchable } from "react-native";
import GameStart from "../assets/GameStart.png";
import Rope from "../assets/Rope.png";
import Head from "../assets/Head.png";
import Body from "../assets/Body.png";
import LeftArm from "../assets/LeftArm.png";
import RightArm from "../assets/RightArm.png";
import LeftLeg from "../assets/LeftLeg.png";
import GameLost from "../assets/GameLost.png";
import no from "../shared/strings/no";
import en from "../shared/strings/en";

class HangedMan extends React.Component {
  static defaultProps = {
    noTries: 7,
    gameStates: [
      GameStart,
      Rope,
      Head,
      Body,
      LeftArm,
      RightArm,
      LeftLeg,
      GameLost,
    ],
  };

  constructor(props) {
    super(props);
    this.state = {
      countWrong: 0,
      guessedLetter: new Set(),
      solution: drawRandomWord(),
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.resetGameState = this.resetGameState.bind(this);
  }

  resetGameState() {
    this.setState({
      countWrong: 0,
      guessedLetter: new set(),
      solution: drawRandomWord(),
    });
  }
  guessedLetters() {
    return this.state.solution
      .split("")
      .map((letter) => (this.state.guessedLetter.has(letter) ? letter : "_"));
  }

  renderButtons() {
    return "abcdefghijklmnopqrstuvwxyz"
      .split("")
      .map((letter) => (
        <Button
          key={letter}
          value={letter}
          onClick={this.handleGuess}
          disabled={this.state.guessedLetter.has(letter)}
          title={letter}
        ></Button>
      ));
  }
  handleGuess(event) {
    let letter = event.target.value;
    this.setState((state) => ({
      guessedLetter: state.guessedLetter.add(letter),
      countWrong: state.countWrong + (state.solution.includes(letter) ? 0 : 1),
    }));
  }

  render() {
    const gameLost = this.state.countWrong == this.props.noTries;
    const gameWon = this.guessedLetters().join("") === this.state.solution;
    let gameState = this.renderButtons();

    /* Replaces the rendered keyboard with victory or defeat messages */
    if (gameWon) gameState = "You won!";
    if (gameLost) gameState = "You lost!";

    let restart = gameLost || gameWon;
    return (
      <View style={{ height: "100%", width: "100%" }}>
        <View style={{ height: "35%", width: "100%" }}>
          <Image
            style={styles.images}
            source={this.props.gameStates[this.state.countWrong]}
            alt={this.props.gameStates.gameLost}
          />
        </View>
        <View style={{ height: "65%", width: "100%" }}>
          <Text>
            Guesses Left: {this.props.noTries - this.state.countWrong} /{" "}
            {this.props.noTries}
          </Text>
          <Text>Guess the city!</Text>
          <Text>{!gameLost ? this.guessedLetters() : this.state.solution}</Text>
          <Text>{gameState}</Text>
          {restart && (
            <Button
              id="restart"
              onClick={this.resetGameState()}
              title="Restart"
            >
              Restart
            </Button>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  images: {
    height: undefined,
    width: undefined,
    ...StyleSheet.absoluteFillObject,
  },
});
export default HangedMan;

/* The SVG file created here looks really good, but I couldn't figure out how to edit it based on the state of the game. Instead, I just made PNG files for the different game states.
/*
let HangedMan = () => {
  return (
    <Svg
      width={200}
      height={250}
      viewBox="0 0 200 250"
      fill="none"
      stroke="black"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLineJoin="round"
      strokeWidth="5.5"
    >
      <Line x1="60" y1="20" x2="140" y2="20" />
      <Line x1="140" y1="20" x2="140" y2="50" />
      <Line x1="60" y1="20" x2="60" y2="230" />
      <Line x1="20" y1="230" x2="100" y2="230" />
      <Circle cx="140" cy="70" r="20" />
      <Line x1="140" y1="90" x2="140" y2="150" />
      <Line x1="140" y1="120" x2="120" y2="100" />
      <Line x1="140" y1="120" x2="160" y2="100" />
      <Line x1="140" y1="150" x2="120" y2="180" />
      <Line x1="140" y1="150" x2="160" y2="180" />
    </Svg>
  );
};
*/
