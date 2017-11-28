import _ from 'lodash';
import axios from 'axios';
import React, { Component } from 'react';
import { ScrollView, Image, View } from 'react-native';
import { connect } from 'react-redux';
import RestaurantMenuItems from './RestaurantMenuItems';

class TestMenu extends Component {


	renderRow() {
		console.log("RenderRowApp", this.props);
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
		width: null,
		height: null,
		backgroundColor: 'rgba(255,255,255,1)',
	},
	menuItems: {
		marginTop: 60
	},
	restaurantSelectionForm: {
		padding: 5,
		borderWidth: 0,
	},
	menuCategories: {
		backgroundColor:'rgba(255,255,255,1)',
		height: 40,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.3,
		shadowRadius: 2,
		position: 'absolute',
		bottom: 10,
		borderRadius: 50,
		marginLeft: 10,
		marginRight: 10,
	}
}

export default TestMenu;
