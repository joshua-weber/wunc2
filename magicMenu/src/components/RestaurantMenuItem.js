import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Button } from './common';

class RestaurantMenuItem extends Component {
	state = { items: [] };

	componentWillMount() {
		console.log("This.props ITEMS ", this.props.menuitem);
		return this.setState({ items: this.props.menuitem });
	}

	renderItems() {
		const items = _.map(this.state.items, (val, uid) => {
			return {...val, uid};
		});
		return {items}
	}

	render() {
		return(
			<View>{this.renderItems()}</View>
		)
	}

}


// const RestaurantMenuItem = ({ menuitem }) => {
// 	const { name, description, chicken } = menuitem;

// 	console.log("MENU ITEM", menuitem);

// 	return (
// 		<Card>
// 			<CardSection>
// 				<Text>{chicken.name}</Text>
// 			</CardSection>

// 		</Card>

// 	);
// }

export default RestaurantMenuItem;