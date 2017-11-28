import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { favoritesListFetch } from '../actions';
import { CardSection } from './common';
import FavoriteListItem from './FavoriteListItem';

class Favorites extends Component {

	componentWillMount() {
		this.props.favoritesListFetch();

		this.createDataSource(this.props);
		console.log('FAV ComponentWillMount', this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.createDataSource(nextProps);
		console.log('FAV componentWillReceiveProps', nextProps);
	}

	createDataSource({ favorites }) {
		console.log("FAV createDataSource", favorites);
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(favorites);
	}

	renderRow(favorite) {
		console.log("RESTUARANTLISTITEM")
		return <FavoriteListItem favorite = {favorite} />;
	}

	render() {
		return(
			<ListView
					enableEmptySections
					dataSource = {this.dataSource}
					renderRow = {this.renderRow}
				/>	
		)
	}
}

const mapStateToProps = state => {
	console.log("state.favorites", state.favorites);
	const favorites = _.map(state.favorites, (val, uid) => {
		return { ...val, uid }
	});

	return { favorites };
}

export default connect(mapStateToProps, { favoritesListFetch })(Favorites);