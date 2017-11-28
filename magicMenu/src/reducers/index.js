import { combineReducers } from 'redux';
import RestaurantReducer from './RestaurantReducer';
import FavoriteReducer from './FavoriteReducer';

export default combineReducers ({
	restaurants: RestaurantReducer,
	favorites: FavoriteReducer
});