/*
 * Favorites.js
 *
 * This component grabs the favorites list from the database and passes
   the received data to FavoriteListItem.js
 *
 */

// import packages
import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

// import actions
import { favoritesListFetch } from '../actions';

// import component(s)
import { CardSection } from './common';
import FavoriteListItem from './FavoriteListItem';

class Favorites extends Component {

	componentWillMount() {
		// fetch props provided by FavoritesActions.js
		this.props.favoritesListFetch();

		// create a Data Source using this.props which will populate 
		// an array of data blobs for a ListView component
		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.createDataSource(nextProps);
	}

	createDataSource({ favorites }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(favorites);
	}

	renderRow(favorite) {
		// render FavoriteListItem.js component passing the favorites list as a prop
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
	const favorites = _.map(state.favorites, (val, uid) => {
		return { ...val, uid }
	});

	return { favorites };
}

export default connect(mapStateToProps, { favoritesListFetch })(Favorites);