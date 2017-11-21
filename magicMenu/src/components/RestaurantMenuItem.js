import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Button } from './common';


const RestaurantMenuItem = ({ menuItem }) => {
	const { name, description } = menuItem;
	return (
		<Card>
			<CardSection>
				<Text>{name}</Text>
			</CardSection>
			<CardSection>
				<Text>Description: {description}</Text>
			</CardSection>
			<CardSection>
				<Button>View Item</Button>
			</CardSection>

		</Card>

	);
}

export default RestaurantMenuItem;