import { Actions } from 'react-native-router-flux';

//DemoApp no longer needed?
export const DemoApp = () => {
	Actions.restaurants();
};

export const Menu = (props) => {
	Actions.restaurantMenu(props);
}

export const AR = (props) => {
	Actions.ar(props);
}

export const Main = () => {
	Actions.test();
}