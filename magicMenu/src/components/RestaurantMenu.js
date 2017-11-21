import _ from 'lodash';
import axios from 'axios';
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import RestaurantMenuItem from './RestaurantMenuItem';

class RestaurantMenu extends Component {


	renderRow() {
		const data = this.props.items;
		const array = [];

		for (let prop in data) {
			array.push(data[prop]);
		}

		return array.map(menuItem => (
			<RestaurantMenuItem key={menuItem.name} menuItem={menuItem} />
		))
		

	}

	render() {
		console.log("RestaurantMenu", this.props.items);
		return(
			<ScrollView>{this.renderRow()}</ScrollView>
		)
	}

}

export default RestaurantMenu;
