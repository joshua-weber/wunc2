import { Actions } from 'react-native-router-flux';

export const DemoApp = () => {
	Actions.restaurants();
};

export const Menu = (props) => {
	Actions.restaurantMenu(props);
}