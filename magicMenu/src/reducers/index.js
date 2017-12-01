/*
 * index.js
 *
 * import all reducers and combine into single object
 * export combined reducers for rest of application
 */
 
import { combineReducers } from 'redux';
import RestaurantReducer from './RestaurantReducer';
import FavoriteReducer from './FavoriteReducer';

export default combineReducers ({
	restaurants: RestaurantReducer,
	favorites: FavoriteReducer
});