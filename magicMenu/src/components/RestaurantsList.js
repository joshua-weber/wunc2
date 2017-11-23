import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, Image, SegmentedControlIOS, View } from 'react-native';
import ScrollingButtonMenu from 'react-native-scrolling-button-menu';
import { connect } from 'react-redux';
import { restaurantListFetch } from '../actions';
import RestaurantListItem from './RestaurantListItem';

let menus = [
	{
	   text:'Nearby',
	   textColor:'white',
	   backgroundColor:'#179fd2',
	   borderColor:'rgba(0,0,0,0)'
	},
	{
	   text:'Map',
	   textColor:'black',
	   backgroundColor:'rgba(255,255,255,0)',
	   borderColor:'rgba(255,255,255,0)'
	},
	{
	   text:'Favorites',
	   textColor:'black',
	   backgroundColor:'rgba(255,255,255,0)',
	   borderColor:'rgba(255,255,255,0)'
	},
	{
	   text:'Search',
	   textColor:'black',
	   backgroundColor:'rgba(255,255,255,0)',
	   borderColor:'rgba(255,255,255,0)'
	}
];

class RestaurantsList extends Component {


	componentWillMount() {
		this.props.restaurantListFetch();

		this.createDataSource(this.props);
		console.log('ComponentWillMount', this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.createDataSource(nextProps);
		console.log('componentWillReceiveProps', nextProps);
	}

	createDataSource({ restaurants }) {
		console.log("createDataSource", restaurants);
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(restaurants);
	}

	renderRow(restaurant) {
		console.log("RESTUARANTLISTITEM")
		return <RestaurantListItem restaurant = {restaurant} />;
	}

	onPressButtonMenu(menu) {
		console.log(menu.text);
	  }

	render() {
		return (
			<Image source={require('../assets/img/food1.png')} style={styles.background}>
				<ListView style={styles.restaurantList}
					enableEmptySections
					dataSource = {this.dataSource}
					renderRow = {this.renderRow}
				/>
				<View style={styles.menuCategories}>
					<ScrollingButtonMenu 
						style={styles.restaurantSelectionForm}
						items={menus}
						// style={{padding:15}}
						onPress={this.onPressButtonMenu.bind(this)}
					/>
				</View>				
			</Image>
		);
	}
}


const mapStateToProps = state => {
	console.log("state.restaurants", state.restaurants);
	const restaurants = _.map(state.restaurants, (val, uid) => {
		return { ...val, uid }
	});

	return { restaurants };
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
	restaurantList: {
		// flexDirection: "row",
		// flex: 1,
		// backgroundColor: 'rgba(255,255,255,.5)',
		// padding: 100,
		// width: '100%'
		borderWidth: 0,
	},
	restaurantSelectionForm: {
		// flex: 1,
		padding: 15,
		paddingBottom: 30,
		// shadowColor: '#000',
		// shadowOffset: { width: 0, height: 2 },
		// shadowOpacity: 0.5,
		// shadowRadius: 2,
		// borderWidth: 0,
		// marginLeft: 40
		// alignItems: 'center',
		// justifyContent: 'center'
	},
	menuCategories: {
		backgroundColor:'rgba(255,255,255,0)',
		height: 60,
		// shadowColor: 'rgba(0,0,0,1)',
		// shadowOffset: { width: 0, height: 2 },
		// shadowOpacity: 0.3,
		// shadowRadius: 2,
	}
}

export default connect(mapStateToProps, { restaurantListFetch })(RestaurantsList);







// import _ from 'lodash';
// import React, { Component } from 'react';
// import { ListView } from 'react-native';
// import { connect } from 'react-redux';
// import { restaurantListFetch } from '../actions';
// import RestaurantListItem from './RestaurantListItem';

// class RestaurantsList extends Component {

// 	componentWillMount() {
// 		this.props.restaurantListFetch();

// 		this.createDataSource(this.props);
// 		console.log('ComponentWillMount', this.props);
// 	}

// 	componentWillReceiveProps(nextProps) {
// 		this.createDataSource(nextProps);
// 		console.log('componentWillReceiveProps', nextProps);
// 	}

// 	createDataSource({ restaurants }) {
// 		console.log("createDataSource", restaurants);
// 		const ds = new ListView.DataSource({
// 			rowHasChanged: (r1, r2) => r1 !== r2
// 		});

// 		this.dataSource = ds.cloneWithRows(restaurants);
// 	}

// 	renderRow(restaurant) {
// 		console.log("RESTUARANTLISTITEM")
// 		return <RestaurantListItem restaurant = {restaurant} />;
// 	}

// 	render() {
// 		return (
// 			<ListView
// 				enableEmptySections
// 				dataSource = {this.dataSource}
// 				renderRow = {this.renderRow}
// 			/>
// 		);
// 	}
// }

// const mapStateToProps = state => {
// 	console.log("state.restaurants", state.restaurants);
// 	const restaurants = _.map(state.restaurants, (val, uid) => {
// 		return { ...val, uid }
// 	});

// 	return { restaurants };
// }

// export default connect(mapStateToProps, { restaurantListFetch })(RestaurantsList);