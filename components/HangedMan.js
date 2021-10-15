import React from "react";
import { drawRandomWord } from "../shared/strings/Questions";
import { getAlphabet } from "../shared/strings/Alphabet";
import { Text, View, Image, StyleSheet, Button } from "react-native";
import GameStart from "../assets/gamestates/GameStart.png";
import Rope from "../assets/gamestates/Rope.png";
import Head from "../assets/gamestates/Head.png";
import Body from "../assets/gamestates/Body.png";
import LeftArm from "../assets/gamestates/LeftArm.png";
import RightArm from "../assets/gamestates/RightArm.png";
import LeftLeg from "../assets/gamestates/LeftLeg.png";
import GameLost from "../assets/gamestates/GameLost.png";
import i18n from "i18n-js";

class HangedMan extends React.Component {
  /* Props are immutable */
  static defaultProps = {
    noTries: 7,

    gameStatePictures: [
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
      guessedLetter: new Set(),
      solution: drawRandomWord(),
    });
  }
  guessedLetters() {
    return this.state.solution
      .split("")
      .map((letter) => (this.state.guessedLetter.has(letter) ? letter : "_"));
  }

  renderButtons() {
    return getAlphabet()
      .split("")
      .map((letter) => (
        <Button
          key={letter}
          value={letter}
          onPress={this.handleGuess}
          disabled={this.state.guessedLetter.has(letter)}
          title={letter}
        ></Button>
      ));
  }
  handleGuess = (event) => {
    console.log(event.target.value);
    let letter = event.target.value;
    this.setState({
      ...this.state,
      guessedLetter: this.state.guessedLetter.add(letter),
      countWrong:
        this.state.countWrong + (this.state.solution.includes(letter) ? 0 : 1),
    });
  };

  render() {
    console.log(this.state.solution);
    const gameLost = this.state.countWrong == this.props.noTries;
    const gameWon = this.guessedLetters().join("") === this.state.solution;
    let gameState = this.renderButtons();
    let restart = gameLost || gameWon;
    return (
      <View style={{ height: "100%", width: "100%" }}>
        <View style={{ height: "35%", width: "100%" }}>
          <Image
            style={styles.images}
            source={this.props.gameStatePictures[this.state.countWrong]}
            alt={this.props.gameStatePictures.gameLost}
          />
        </View>
        <View style={{ height: "65%", width: "100%" }}>
          <Text>
            {i18n.t("guessesLeft")} {this.props.noTries - this.state.countWrong}{" "}
            / {this.props.noTries}
          </Text>
          <Text>{i18n.t("guessTheCity")}</Text>
          <Text>{!gameLost ? this.guessedLetters() : this.state.solution}</Text>
          <View>
            <Text>{gameState}</Text>
          </View>

          {restart && (
            <Button
              id="restart"
              onClick={this.resetGameState()}
              title="Restart"
              height="100"
              width="100"
            >
              {i18n.t("restart")}
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

/* The SVG file I created here looks really good, but I couldn't figure out how to edit it based on the state of the game.
Instead, I just made PNG files for the different game states.
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
