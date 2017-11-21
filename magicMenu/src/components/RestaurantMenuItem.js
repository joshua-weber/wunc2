import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Button } from './common';
import { AR } from '../actions';


class RestaurantMenuItem extends Component {

	onButtonPress() {
		console.log("onButtonPress", this);
		AR(this);
	}
	
	render() {
		const { name, description } = this.props.menuItem;
		return (
		<Card>
			<CardSection>
				<Text>{name}</Text>
			</CardSection>
			<CardSection>
				<Text>Description: {description}</Text>
			</CardSection>
			<CardSection>
				<Button onPress={this.onButtonPress.bind(this.props.menuItem)}>View Item</Button>
			</CardSection>

		</Card>

	);
	}
	
}

export default RestaurantMenuItem;