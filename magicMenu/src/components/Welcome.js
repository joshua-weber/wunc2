import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { DemoApp } from '../actions';
import { Button } from './common';

class Welcome extends Component {

	onButtonPress() {
		DemoApp();
	}

	render() {
		return (
		<View>
			<View>
			<Text>***Magic Menu***</Text>
			</View>
			<View style={styles.exampleStyle}>
			<Button onPress={this.onButtonPress.bind(this)}>Demo App</Button>
			</View>
		</View>
	);	
	}
	
};

const styles = {
	//Styling goes here with the form of:
	exampleStyle: {
		marginTop: 65,
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: "#fff",
		justifyContent: "flex-start",
		flexDirection: "row",
		borderColor: "#ddd",
		position: "relative"
	}
}

export default Welcome;

