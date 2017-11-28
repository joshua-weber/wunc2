import { Actions } from 'react-native-router-flux';

//DemoApp no longer needed?
export const DemoApp = () => {
	Actions.restaurants();
};

export const MenuMain = (props) => {
	Actions.menuMain(props);
}

export const AR = (props) => {
	Actions.ar(props);
}

export const RestaurantMain = () => {
	Actions.restaurantMain();
}