import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Button } from './common';
import { Menu } from '../actions';

class RestaurantListItem extends Component {
	onButtonPress() {
		console.log("onButtonPress", this);
		Menu(this);
	}

	render() {
		const { rating, name, menu } = this.props.restaurant;

		return (
			<Card>
				<CardSection style={styles.testStyle}>
					<Text style={{fontSize: 20}}>{name}</Text>
				</CardSection>
				<CardSection>
					<Text>Rating: {rating}</Text>
				</CardSection>
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this.props.restaurant.menu)}>View Menu</Button>
				</CardSection>
			</Card>
		);
	}
}

styles = {
	testStyle: {
	}
}

export default RestaurantListItem;