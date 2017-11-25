import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Main } from '../actions';
import { Button } from './common';

class Welcome extends Component {

	onButtonPress() {
		Main();
	}

	render() {
		return (
		<Image source={require('../assets/img/food1.jpeg')} style={styles.pageBackground}>
			<View>
				<Text style={styles.headText}>Magic Menu</Text>
			</View>
			<View >
			{/* style={styles.exampleStyle} */}
				<Button style={styles.mainButton} onPress={this.onButtonPress.bind(this)}>
					<Text style={styles.buttonText}>Get Started</Text>
				</Button>
			</View>
		</Image>
	);	
	}
	
};

const styles = {
	//Styling goes here with the form of:
	exampleStyle: {
		// marginTop: 65,
		// borderBottomWidth: 1,
		// padding: 5,
		// backgroundColor: "#99cc33",
		// justifyContent: "flex-end",
		// flexDirection: "row",
		// borderColor: "rgba(0,0,0,0)",
		// justifyContent: 'center'
		// position: "relative",
		// alignContent: "flex-end",
		// marginLeft: 50,
		// marginRight: 50,
		// backgroundColor: 'rgba(255,255,255,.5)'
	},
	pageBackground: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: null,
		height: null,
		backgroundColor: 'rgba(0,0,0,0)'
	},
	headText: {
		color: '#fff',
		fontWeight: '900',
		fontSize: 50,
		fontFamily: 'Avenir',
		marginTop: -50
	},
	mainButton: {
		flex: 1,
		alignSelf: "stretch",
		backgroundColor: "rgba(255,255,255,.9)",
		borderWidth: 2,
		borderRadius: 5,
		borderColor: "red",
		// marginLeft: 5,
		// marginRight: 5,
		height: 50
	},
	buttonText: {
		color: 'white',
		// fontWeight: '900',
		// paddingBottom: 30
	}
}

export default Welcome;