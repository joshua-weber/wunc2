import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, Image, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { restaurantListFetch } from '../actions';
import RestaurantListItem from './RestaurantListItem';

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

	render() {
		return (
			<Image source={require('../assets/img/food1.png')} style={styles.background}>
				<ListView style={styles.restaurantList}
					enableEmptySections
					dataSource = {this.dataSource}
					renderRow = {this.renderRow}
				/>			
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
		width: null,
		height: null,
		backgroundColor: 'rgba(255,255,255,0)',
	},
	restaurantList: {
		borderWidth: 0,
		marginTop: 60
		
	},
	lineStyle:{
		borderWidth: 0.5,
		borderColor:'red',
		marginTop:90,
		marginLeft: 10,
		marginRight: 10
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