import _ from 'lodash';
import axios from 'axios';
import React, { Component } from 'react';
import ScrollingButtonMenu from 'react-native-scrolling-button-menu';
import { ScrollView, Image, View } from 'react-native';
import { connect } from 'react-redux';
import RestaurantMenuItem from './RestaurantMenuItem';


let menuCategories = [
	{
	   text:'Appetizer',
	   textColor:'white',
	   backgroundColor:'#179fd2',
	   borderColor:'rgba(0,0,0,0)'
	},
	{
	   text:'Salad',
	   textColor:'black',
	   backgroundColor:'rgba(255,255,255,0)',
	   borderColor:'rgba(255,255,255,0)'
	},
	{
	   text:'Entrée',
	   textColor:'black',
	   backgroundColor:'rgba(255,255,255,0)',
	   borderColor:'rgba(255,255,255,0)'
	},
	{
	   text:'Dessert',
	   textColor:'black',
	   backgroundColor:'rgba(255,255,255,0)',
	   borderColor:'rgba(255,255,255,0)'
	},
	{
	   text:'Beverage',
	   textColor:'black',
	   backgroundColor:'rgba(255,255,255,0)',
	   borderColor:'rgba(255,255,255,0)'
	},
	{
	   text:'À la carte',
	   textColor:'black',
	   backgroundColor:'rgba(255,255,255,0)',
	   borderColor:'rgba(255,255,255,0)'
	}
];

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
			<Image source={require('../img/food1.png')} style={styles.background}>
				<ScrollView>{this.renderRow()}</ScrollView>
				<View style={styles.menuCategories}>
					<ScrollingButtonMenu 
						style={styles.restaurantSelectionForm}
						items={menuCategories}
						// style={{padding:15}}
						// onPress={this.onPressButtonMenu.bind(this)}
					/>
				</View>	
			</Image>
		)
	}

}

const styles = {
	background: {
		flex: 1,
		// justifyContent: 'center',
		// alignItems: 'center',
		width: null,
		height: null,
		backgroundColor: 'rgba(255,255,255,0)',
		// resizeMode: 'contain'
	},
	restaurantSelectionForm: {
		// flex: 1,
		padding: 15,
		paddingBottom: 30,
		borderWidth: 0,
		// marginLeft: 40
		// alignItems: 'center',
		// justifyContent: 'center'
	},
	menuCategories: {
		backgroundColor:'rgba(255,255,255,0)',
		height: 60,
		// shadowColor: '#000',
		// shadowOffset: { width: 0, height: 2 },
		// shadowOpacity: 0.3,
		// shadowRadius: 2,
	}
}

export default RestaurantMenu;
