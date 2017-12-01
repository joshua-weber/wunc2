// import packages
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

// import action type needed
import { FAVORITES_LIST_FETCH } from './types';

export const favoritesListFetch = () => {
	// fetch favorites list data and dispatch using action
	return(dispatch) => {
		firebase.database().ref(`/favorites`)
			.on('value', snapshot => {
				dispatch({ type: FAVORITES_LIST_FETCH, payload: snapshot.val() });
			});
	}
};

