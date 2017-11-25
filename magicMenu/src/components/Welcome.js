import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { DemoApp } from '../actions';
import { Button } from './common';

class Welcome extends Component {

	onButtonPress() {
		DemoApp();
	}

	render() {
		return (
			<Image source={require('../assets/img/landingBackground.png')} style={styles.pageBackground}>
			{/* <View> */}
				{/* <Text style={styles.headText}>Magic Menu</Text> */}
			{/* </View> */}
				<Image style={styles.owl} source={require('../assets/img/owl.png')} />
				<Image style={styles.magicMenu} source={require('../assets/img/magicMenus.png')} />
			<View style={styles.getStarted}>
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
		backgroundColor: "rgba(255,255,255,.9)",
		borderWidth: 2,
		borderRadius: 5,
		borderColor: "red",
		height: 14,
		minWidth: 130
	},
	buttonText: {
		color: 'white',

	},
	owl: {
		marginBottom: 30
	},
	magicMenu: {

	},
	getStarted: {
		flexDirection: 'row',		
		// position: 'absolute',
		// bottom: 30
	}
}

export default Welcome;



