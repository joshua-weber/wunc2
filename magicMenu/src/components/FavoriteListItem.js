import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from './common';

class favoriteListItem extends Component {
	render() {
		const { name } = this.props.favorite;

		return (
			<Card style={{flex: 1}}>
				<CardSection>
					<Text>{name}</Text>
				</CardSection>
			</Card>
		);
	}
}


export default favoriteListItem;