import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, ButtonE, ButtonC } from './common';
import { MenuMain } from '../actions';

class RestaurantListItem extends Component {
	onButtonPress() {
		MenuMain(this);
	}

	render() {
		const { rating, name, menu } = this.props.restaurant;

		return (
			<Card style={styles.cardBackground}>
				<CardSection style={styles.restaurantHeader}>
					<Text style={styles.restaurantName}>{name}</Text>
					<Text style={styles.restaurantRating}>Rating: {rating}</Text>

				</CardSection>
					<Text style={styles.restaurantAddress}>101 Main Street, Salt Lake City</Text>
					<Text style={styles.restaurantNumber}>(801) 123-4567</Text>
					<Text style={styles.restaurantInfo}>Sushi, Japanese, Asian</Text>
				{/* <CardSection style={styles.cardStyle}> */}
				{/* </CardSection> */}
				<CardSection style={styles.bottomRow}>
					<ButtonE onPress={this.onButtonPress.bind(this.props.restaurant.menu)}>
						<Text>menu</Text>
					</ButtonE>
					{/* <ButtonC onPress={this.onButtonPress.bind(this.props.restaurant.menu)}>
						<Text>Directions</Text>
					</ButtonC> */}
					{/* <ButtonC onPress={this.onButtonPress.bind(this.props.restaurant.menu)}>
						<Text>Call</Text>
					</ButtonC> */}
					{/* <ButtonB 
						style={styles.restaurantButton} 
						onPress={this.onButtonPress.bind(this.props.restaurant.menu)}>
						<Text style={styles.buttonText}>Order</Text>
					</ButtonB> */}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	restaurantHeader: {
		flexDirection: 'row',
		flex: 2,
		justifyContent: 'space-between' 
		// color: '#28353D',
		// backgroundColor: 'rgba(255,255,255,0)',
		// borderRadius: 8,
		// borderColor: "rgba(0,0,0,0)",
		// border: 0,
		// borderWidth: 0
	},
	restaurantName: {
		fontSize: 20, 
		color: '#28353D', 
		fontFamily: 'Avenir',
		fontWeight: '900',
		// justifyContent: 'center',
		// flex: 1,
		// alignContent: 'center'
	},	
	restaurantNumber: {
		marginLeft: 4,
		marginTop: 4,
		fontSize: 12,
		color: 'rgba(0,0,0,.7)'
		// justifyContent: 'flex-end',
		// alignItems: 'flex-end'
	},
	restaurantAddress: {
		color: 'rgba(0,0,0,.7)',
		marginLeft: 4,
		marginTop: -5,
		fontSize: 12
	},
	restaurantRating: {
		color:	'rgba(0,0,0,.7)',
		fontWeight: '700',
		fontSize: 16,
		fontFamily: 'Avenir',
		marginTop: 4,
	},
	cardBackground: {
		// backgroundColor: '#28353D',
		// borderRadius: 0,
		// borderColor: "rgba(0,0,0,0)",
		// border: 0,
		// borderWidth: 0,
		// borderBottomWidth: 1,
		// borderBottomColor: '#bbb',

	},
	buttonText: {
		// color: 'black',
		// fontWeight: '900',
		// borderRadius: 50
	},
	restaurantButton: {
		// width: 50
	},
	bottomRow: {
		// flexDirection: 'row',
		// flex: 2,
		justifyContent: 'flex-end' 
	},
	restaurantInfo: {
		marginLeft: 4,
		marginTop: 4,
		fontSize: 12,
		color: 'rgba(0,0,0,.7)'
	}
}

export default RestaurantListItem;