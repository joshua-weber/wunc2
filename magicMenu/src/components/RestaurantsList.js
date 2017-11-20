import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
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
			<ListView
				enableEmptySections
				dataSource = {this.dataSource}
				renderRow = {this.renderRow}
			/>
		);
	}
}

const mapStateToProps = state => {
	const restaurants = _.map(state.restaurants, (val, uid) => {
		return { ...val, uid }
	});

	return { restaurants };
}

export default connect(mapStateToProps, { restaurantListFetch })(RestaurantsList);