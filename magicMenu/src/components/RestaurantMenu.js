import _ from 'lodash';
import axios from 'axios';
import React, { Component } from 'react';
import { ScrollView, Image, View } from 'react-native';
import { connect } from 'react-redux';
import RestaurantMenuItems from './RestaurantMenuItems';

class TestMenu extends Component {


	renderRow() {
		const data = this.props.menuItems;
		const array = [];

		for (let prop in data) {
			array.push(data[prop]);
		}

		return array.map(items => (
			<RestaurantMenuItems items={items} />
		))
		

	}

	render() {
		console.log("Appetizer", this.props.menuAppetizer);
		return(
			<View style={{flex: 1}}>
				<Image source={require('../assets/img/food1.png')} style={styles.background}>
					<ScrollView>{this.renderRow()}</ScrollView>
				</Image>
			</View>
		)
	}

}

const styles = {
	background: {
		flex: 1,
		// justifyContent: 'center',
		width: null,
		height: null,
		backgroundColor: 'rgba(255,255,255,0)',
	},
	restaurantSelectionForm: {
		padding: 15,
		paddingBottom: 30,
		borderWidth: 0,
	},
	menuCategories: {
		backgroundColor:'rgba(255,255,255,0)',
		height: 60,
	}
}

export default TestMenu;
