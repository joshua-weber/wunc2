/*
 * ButtonActions.js
 *
 * handles button actions for routing
 * able to pass props through from one scene to another
 */

import { Actions } from 'react-native-router-flux';

export const MenuMain = (props) => {
	Actions.menuMain(props);
}

export const AR = (props) => {
	Actions.ar(props);
}

export const RestaurantMain = () => {
	Actions.restaurantMain();
}