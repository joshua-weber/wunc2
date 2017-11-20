import _ from 'lodash';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import RestaurantMenuItem from './RestaurantMenuItem';

class RestaurantMenu extends Component {
	state = { menuItems: [] };

	componentWillMount() {
		return	(
			console.log("componentWillMount", this.props.items),
			this.setState({ menuItems: this.props.items })
		)
	}

	renderMenu() {
		console.log("StateMENUBEFORE", this.state.menuItems)
		return Object.keys(this.state.menuItems).map(menu => (
			console.log("StateMENU", menu),
			<RestaurantMenuItem key={menu} menu={menu} menuitem={this.state.menuItems}/>
		));
	}

	render() {
		return (
			<ScrollView>{this.renderMenu()}</ScrollView>
		)
	}
}

export default RestaurantMenu;