import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { RESTAURANT_LIST_FETCH } from './types';

export const restaurantListFetch = () => {
	console.log('restaurantListFetch');

	return (dispatch) => {
		console.log('dispatch', dispatch);
		firebase.database().ref(`/restaurants`)
			.on('value', snapshot => {
				dispatch({ type: RESTAURANT_LIST_FETCH, payload: snapshot.val() });
			});
	};
};

