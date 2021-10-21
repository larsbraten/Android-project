import React from 'react';
import { word } from '../shared/strings/Questions';
import { getAlphabet } from '../shared/strings/Alphabet';
import { Text, View, StyleSheet, Button, TouchableHighlight } from 'react-native';
import GameStart from '../assets/gamestates/GameStart.png';
import Rope from '../assets/gamestates/Rope.png';
import Head from '../assets/gamestates/Head.png';
import Body from '../assets/gamestates/Body.png';
import LeftArm from '../assets/gamestates/LeftArm.png';
import RightArm from '../assets/gamestates/RightArm.png';
import LeftLeg from '../assets/gamestates/LeftLeg.png';
import GameLost from '../assets/gamestates/GameLost.png';
import i18n from 'i18n-js';
import FitImage from 'react-native-fit-image';

class HangManGame extends React.Component {
	/* Props are immutable */
	static defaultProps = {
		gameStatePictures: [GameStart, Rope, Head, Body, LeftArm, RightArm, LeftLeg, GameLost],
		/* Number of gamestates minus 1 */
		noTries: 7,
	};

	constructor(props) {
		/* Can’t use "this" */
		super(props);
		/* Can use "this" after calling super */
		this.state = {
			/* Number of times the user has guessed the wrong number */
			countWrong: 0,
			/* Set of guessed letters */
			guesses: new Set(),
			/* Hangman solution */
			solution: word(),
		};
	}
	/* Draws a new word, and resets the number of failed attempts. Effectively restarting the game. */
	resetGameState() {
		this.setState({
			countWrong: 0,
			guesses: new Set(),
			solution: word(),
		});
	}
	/* Used for displaying correct guesses */
	ShowProgress = () => {
		console.log(this.state.solution);
		return (
			this.state.solution
				/* Splits the string letter by letter */
				.split('')
				/* guessed letter if true, dash if false */
				.map((letter) => (this.state.guesses.has(letter) ? letter : '-'))
		);
	};

	EndGameMessage = () => {
		return this.state.countWrong < 7 ? (
			<Text style={{ fontSize: 20 }}>{i18n.t('gameWon')}</Text>
		) : (
			<Text style={{ fontSize: 20 }}>{i18n.t('gameLost')}</Text>
		);
	};

	RenderButtons = () => {
		return (
			getAlphabet()
				/* Splits the string letter by letter */
				.split('')
				/* Creates a new array containing the result of the provided function */
				.map((guess) => (
					<TouchableHighlight
						style={{
							padding: 5,
							height: 'auto',
							margin: 'auto',
							backgroundColor: 'gray',
						}}
						key={guess}
					>
						<Button
							onPress={() => this.CompareGuessToSolution(guess)}
							value={guess}
							title={guess}
							disabled={this.state.guesses.has(guess)}
						></Button>
					</TouchableHighlight>
				))
		);
	};

	/* Compares the guess to the solution, and adds an attempt if it is wrong. Also stores the guess in the guesses set */
	CompareGuessToSolution = (guess) => {
		this.setState({
			...this.state,
			guesses: this.state.guesses.add(guess),
			countWrong: this.state.countWrong + (this.state.solution.includes(guess) ? 0 : 1),
		});
	};

	render() {
		const gameLost = this.state.countWrong == this.props.noTries;
		const gameWon = this.ShowProgress().join('') == this.state.solution;
		const restartPrompt = gameLost || gameWon;
		const EndGameMessage = this.EndGameMessage();
		let RenderButtons = null;
		!restartPrompt
			? (RenderButtons = this.RenderButtons())
			: (RenderButtons = (
					<>
						<View
							style={{
								flex: 1,
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							{EndGameMessage}
							<TouchableHighlight>
								<Button
									id="restart"
									onPress={() => this.resetGameState()}
									title={i18n.t('restart')}
									height="100"
									width="100"
									buttonStyle={styles.button}
								></Button>
							</TouchableHighlight>
						</View>
					</>
			  ));

		return (
			<View style={styles.viewtopLevel}>
				<View style={styles.fitImage}>
					{/* GameStatePictures. Uses the number of failed guesses as the index. */}
					<FitImage
						style={styles.fitImage}
						source={this.props.gameStatePictures[this.state.countWrong]}
						alt={this.props.gameStatePictures.gameLost}
					/>
				</View>
				<View style={styles.textContainer}>
					<Text style={{ marginBottom: 10 }}>
						{i18n.t('guessesLeft')} {this.props.noTries - this.state.countWrong}
					</Text>
					<View style={styles.textContainer}>
						{!gameLost && !gameWon ? (
							<Text style={{ fontSize: 20 }}>{i18n.t('guessTheCity')}</Text>
						) : (
							<Text style={{ fontSize: 20 }}>{i18n.t('correctCity')}</Text>
						)}
					</View>
					<View style={styles.textContainer}>
						<Text style={{ fontSize: 30 }}>
							{/* Solution if it the game is lost, correct guesses if not. */}
							{gameLost ? this.state.solution : this.ShowProgress()}
						</Text>
					</View>
				</View>
				<View style={styles.container}>
					{/* Renders the clickable keyboard */}
					<View style={styles.keyboard}>{RenderButtons}</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	fitImage: {
		flex: 0.65,
		resizeMode: 'center',
	},
	button: {
		backgroundColor: '#00aeef',
		borderColor: 'red',
		borderWidth: 5,
		borderRadius: 120,
	},
	viewtopLevel: {
		height: '100%',
		width: '100%',
		backgroundColor: 'white',
	},

	textContainer: {
		/* Centered horizontally */
		justifyContent: 'center',
		/* Centered vertically */
		alignItems: 'center',
		flex: 0.5,
		textAlignVertical: 'center',
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 10,
		marginTop: 10,
	},
	container: {
		/* Centered vertically */
		alignItems: 'center',
		flex: 0.45,
		flexDirection: 'row',
	},
	keyboard: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		marginLeft: 5,
		marginRight: 5,
	},
});
export default HangManGame;

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
