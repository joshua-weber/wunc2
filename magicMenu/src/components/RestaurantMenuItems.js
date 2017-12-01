import _ from 'lodash';
import firebase from 'firebase';
import React, { Component } from 'react';
import { Alert, Text, View, TouchableHighlight } from 'react-native';
import { Card, CardSection, ButtonE, ButtonD, ButtonF } from './common';
import { AR } from '../actions';

const alertMessage = "Coming Soon...";

class RestaurantMenuItems extends Component {

	onButtonPress() {
		AR(this);
	}

	onFavoritePress() {
		const favorites = firebase.database().ref().child(`/favorites`);
		newFavorite = favorites.push();
		newFavorite.set({
			name: this.name
		})
	}
	
	render() {
		const { name, description, price } = this.props.items;
		return (

			<Card>
				<CardSection style={styles.itemHead}>
					<Text style={styles.itemName}>{name}</Text>
					<Text style={styles.itemCost}>${price}</Text>
				</CardSection>
				<CardSection>
					<Text style={styles.itemDescription}>Description: {description} </Text>
				</CardSection>
				<CardSection>
				</CardSection>
				<CardSection style={styles.menuButtonRow}>
					<TouchableHighlight onPress={() => Alert.alert(
						'Order', 
						alertMessage,
					)}>
						<View style={orderStyles.buttonStyle}>
							<Text style={orderStyles.textStyle}>Order</Text>
						</View>
					</TouchableHighlight>
					<TouchableHighlight onPress={() => Alert.alert(
						'Info', 
						alertMessage,
					)}>
						<View style={infoStyles.buttonStyle}>
							<Text style={infoStyles.textStyle}>Info</Text>
						</View>
					</TouchableHighlight>
					<ButtonD onPress={this.onFavoritePress.bind(this.props.items)}>Like</ButtonD>
					<ButtonD onPress={this.onButtonPress.bind(this.props.items)}>
						<Text>
							View in AR
						</Text>
					</ButtonD>
					
				</CardSection>

			</Card>
		);
	}
}

const styles = {
	itemName: {
		color: 'black',
		fontWeight: '900',
		fontSize: 20,
		fontFamily: 'Avenir',
	},
	itemHead: {
		flexDirection: 'row',
		flex: 2,
		justifyContent: 'space-between' 
	},
	itemCost: {
		color:	'rgba(0,0,0,.7)',
		fontWeight: '700',
		fontSize: 16,
		fontFamily: 'Avenir',
		marginTop: 4,
		 
	},
	itemDescription: {
		fontSize: 14,
		fontFamily: 'Avenir',
		marginTop: 1
		
	},
	menuButtonRow: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'flex-end'
	}
}

const orderStyles = {
	textStyle: {
		alignSelf: "center",
		color: "white",
		fontSize: 14,
		fontWeight: "900",
		paddingTop: 10,
		paddingBottom: 10,
		fontFamily: 'Avenir',
		backgroundColor: 'rgba(0,0,0,0)'
	},
	buttonStyle: {
		backgroundColor: "#179fd2",
		borderWidth: 2,
		borderRadius: 40,
		borderColor: "#179fd2",
		minHeight: 45,
		minWidth: 45,
		marginLeft: 10,
	}
};

const infoStyles = {
	textStyle: {
		alignSelf: "center",
		color: "black",
		fontSize: 14,
		fontWeight: "900",
		paddingTop: 12,
		paddingBottom: 10,
		fontFamily: 'Avenir',
		paddingLeft: 10,
		paddingRight: 10,
	},
	buttonStyle: {
		backgroundColor: "rgba(0,0,0,0)",
		borderWidth: 1,
		borderRadius: 40,
		borderColor: "rgba(0,0,0,1)",
		minHeight: 45,
		minWidth: 45,
		marginLeft: 10,
	}
};

export default RestaurantMenuItems;