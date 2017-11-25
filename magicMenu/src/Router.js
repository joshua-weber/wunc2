import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import Welcome from './components/Welcome';
import AR from './components/AR';
import RestaurantsList from './components/RestaurantsList';
import RestaurantMenu from './components/RestaurantMenu';
import Main from './components/Main';

const RouterComponent = () => {
	return (
		<Router sceneStyle={styles.sceneStyle} navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} barButtonTextStyle={styles.barButtonTextStyle} barButtonIconStyle={styles.barButtonIconStyle}>
			<Stack key="root" hideNavBar>
				<Scene key="main">
					<Scene key="welcome" component={Welcome} hideNavBar />
					<Scene key="test" component={Main} />
					<Scene key="restaurants" component={RestaurantsList} title="Restaurants" />
					<Scene key="restaurantMenu" component={RestaurantMenu} title="Menu" />
					<Scene key="ar" component={AR} title="AR Compnent" />
				</Scene>

			</Stack>
		</Router>
	)
};

const styles = {
	navBar: {
		backgroundColor:'rgba(255,255,255,1)',
	},
	sceneStyle: {
		backgroundColor:'rgba(255,255,255,1)',
	},
	navBarTitle:{
		color:'black'
	},
	barButtonTextStyle:{
		color:'red'
	},
	barButtonIconStyle:{
		tintColor:'red'
	},
}	

export default RouterComponent;