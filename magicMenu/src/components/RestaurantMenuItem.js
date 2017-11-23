import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, ButtonE, ButtonD } from './common';


const RestaurantMenuItem = ({ menuItem }) => {
	const { name, description } = menuItem;
	return (
		<Card>
			<CardSection style={styles.itemHead}>
				<Text style={styles.itemName}>{name}</Text>
				<Text style={styles.itemCost}>$13.00</Text>
			</CardSection>
			<CardSection>
				<Text style={styles.itemDescription}>Description: This is a very very very very very very very very long description. This will take up whatever space it needs</Text>
			</CardSection>
			<CardSection>
			</CardSection>
			<CardSection style={styles.menuButtonRow}>
				<ButtonE>order</ButtonE>
				<ButtonD>info</ButtonD>
				<ButtonD>AR</ButtonD>
			</CardSection>

		</Card>

	);
}

const styles = {
	itemName: {
		color: 'black',
		fontWeight: '900',
		fontSize: 20,
		fontFamily: 'Avenir',
		// marginTop: -50
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
		
		// alignContent: 'flex-end' 
	},
	itemDescription: {
		fontSize: 14,
		fontFamily: 'Avenir',
		marginTop: 1

		// width: '50%'		
	},
	menuButtonRow: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'flex-end'
	}
}

export default RestaurantMenuItem;