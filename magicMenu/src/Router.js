import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import Welcome from './components/Welcome';
import AR from './components/AR';
import RestaurantsList from './components/RestaurantsList';
import RestaurantMenu from './components/RestaurantMenu';

const RouterComponent = () => {
	return (
		<Router>
			<Stack key="root" hideNavBar>
				<Scene key="main">
					<Scene key="welcome" component={Welcome} title="Welcome To" />
					<Scene key="restaurants" component={RestaurantsList} title="Restaurants" />
					<Scene key="restaurantMenu" component={RestaurantMenu} title="Menu" />
					<Scene key="ar" component={AR} title="AR Compnent" />
				</Scene>

			</Stack>
		</Router>
	)
};

export default RouterComponent;