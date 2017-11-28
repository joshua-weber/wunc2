import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { FAVORITES_LIST_FETCH } from './types';

export const favoritesListFetch = () => {
	console.log('favoritesListFetch');

	return(dispatch) => {
		firebase.database().ref(`/favorites`)
			.on('value', snapshot => {
				dispatch({ type: FAVORITES_LIST_FETCH, payload: snapshot.val() });
			});
	}
};

