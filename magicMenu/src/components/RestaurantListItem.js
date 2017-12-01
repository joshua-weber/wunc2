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
				<CardSection style={styles.bottomRow}>
					<ButtonE onPress={this.onButtonPress.bind(this.props.restaurant.menu)}>
						<Text>menu</Text>
					</ButtonE>
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
	},
	restaurantName: {
		fontSize: 20, 
		color: '#28353D', 
		fontFamily: 'Avenir',
		fontWeight: '900',
	},	
	restaurantNumber: {
		marginLeft: 4,
		marginTop: 4,
		fontSize: 12,
		color: 'rgba(0,0,0,.7)'
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
	bottomRow: {
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