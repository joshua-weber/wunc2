// import packages
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

// import action type needed
import { RESTAURANT_LIST_FETCH } from './types';

export const restaurantListFetch = () => {
	// fetch restaurant list data and dispatch using action
	return (dispatch) => {
		firebase.database().ref(`/restaurants`)
			.on('value', snapshot => {
				dispatch({ type: RESTAURANT_LIST_FETCH, payload: snapshot.val() });
			});
	};
};

