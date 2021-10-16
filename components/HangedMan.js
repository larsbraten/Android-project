import React from "react";
import { drawRandomWord } from "../shared/strings/Questions";
import { getAlphabet } from "../shared/strings/Alphabet";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
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
    console.log(this.state.solution);
    return (
      this.state.solution
        .split("")
        //Letter if true, underscore if false
        .map((letter) => (this.state.guessedLetter.has(letter) ? letter : "_"))
    );
  }

  EndGameMessage = () => {
    const gameWon = this.state.countWrong < 7;
    if (gameWon) {
      return <Text style={{ fontSize: 20 }}>{i18n.t("gameWon")}</Text>;
    }
    return <Text style={{ fontSize: 20 }}>{i18n.t("gameLost")}</Text>;
  };

  RenderButtons = () => {
    return getAlphabet()
      .split("")
      .map((letter) => (
        <Button
          containerStyle={{
            padding: 7,
            height: 30,
            overflow: "hidden",
            borderRadius: 4,
            margin: 2,
            backgroundColor: "white",
          }}
          key={letter}
          value={letter}
          onPress={() => this.HandleGuess(letter)}
          disabled={this.state.guessedLetter.has(letter)}
          title={letter}
        ></Button>
      ));
  };
  HandleGuess = (value) => {
    this.setState({
      ...this.state,
      guessedLetter: this.state.guessedLetter.add(value),
      countWrong:
        this.state.countWrong + (this.state.solution.includes(value) ? 0 : 1),
    });
  };

  render() {
    const gameLost = this.state.countWrong == this.props.noTries;
    const gameWon = this.guessedLetters().join("") == this.state.solution;
    let restartPrompt = gameLost || gameWon;
    let RenderButtons = this.RenderButtons();
    let EndGameMessage = this.EndGameMessage();
    if (restartPrompt) {
      RenderButtons = (
        <>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            {EndGameMessage}
            <Button
              id="restart"
              onPress={this.resetGameState}
              title={i18n.t("restart")}
              height="100"
              width="100"
            ></Button>
          </View>
        </>
      );
    }

    return (
      <View style={styles.viewtopLevel}>
        <View style={styles.viewSecondTopLevel}>
          <Image
            style={styles.images}
            source={this.props.gameStatePictures[this.state.countWrong]}
            alt={this.props.gameStatePictures.gameLost}
          />
        </View>
        <View style={styles.viewThirdTopLevel}>
          <Text>
            {i18n.t("guessesLeft")} {this.props.noTries - this.state.countWrong}{" "}
            / {this.props.noTries}
          </Text>
          <Text style={{ fontSize: 20 }}>{i18n.t("guessTheCity")}</Text>
          <Text style={{ fontSize: 30 }}>
            {!gameLost ? this.guessedLetters() : this.state.solution}
          </Text>

          <View style={styles.container}>
            <View style={styles.keyboard}>{RenderButtons}</View>
          </View>
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
  viewtopLevel: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  viewSecondTopLevel: {
    height: "35%",
    width: "100%",
    backgroundColor: "white",
  },

  viewThirdTopLevel: {
    justifyContent: "center", //Centered horizontally
    alignItems: "center", //Centered vertically
    flex: 1,
    textAlignVertical: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  container: {
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    color: "black",
  },
  keyboard: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginLeft: 5,
    marginRight: 5,
    color: "black",
    backgroundColor: "white",
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
