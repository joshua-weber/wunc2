/*
 * FavoritListItem.js
 *
 * This component uses props provided by Favorites.js.
   The props are called and rendered inside of the favoriteListItem class.
 */

// import packages 
import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import firebase from 'firebase';

// import component(s)
import { Card, CardSection, Button } from './common';

class favoriteListItem extends Component {

	onFavoritePress() {
		const favorites = firebase.database().ref().child(`/favorites`);
		newFavorite = favorites.push();
		newFavorite.set({
			name: this.name
		})
	}

	onDelete() {
		const favorites = firebase.database().ref().child(`/favorites`);
		const favToRemove = this.props.favorite.uid;
		favorites.child(favToRemove).remove();

	}

	render() {
		// call props from this.props.favorite
		// destructure name from props
		const { name } = this.props.favorite;

		return (
			<Card>
				<CardSection>
					<View style={styles.deleteBtn }>
						<Text style={{ fontSize: 20 }}>{name}</Text>
						<Button onPress={this.onDelete.bind(this)}><Image source={ require("../assets/img/deleteBtn.png") } /></Button>
					</View>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	deleteBtn: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
}

export default favoriteListItem;