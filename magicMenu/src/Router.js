/*
 * Router.js
 *
 * This component handles all of the routing done inside of the application
 * routing is done using button unique keys to call/identify scense
 * the keys are passed through ButtonActions.js
 */

// import packages
import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';

// import components
import Welcome from './components/Welcome';
import AR from './components/AR';
import RestaurantMain from './components/RestaurantMain';
import MenuMain from './components/MenuMain';

const RouterComponent = () => {
	return (
		<Router>
			<Stack key="root">
					<Scene 
						key="welcome" 
						component={Welcome}
						hideNavBar={true} 
						title="Welcome" 
						initial={true}
						backTitle={null}
					/>
					<Scene 
						key="restaurantMain" 
						component={RestaurantMain} 
						title="Magic Menu" 
						hideNavBar={false} 
						backTitle={null}
						navTransparent={false}
						navBarButtonColor= 'black'
						navigationBarStyle={{backgroundColor:'white', borderBottomWidth:1, shadowColor: 'rgba(0,0,0,1)', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, shadowRadius: 1, backButtonTintColor: 'black', }}	
					/>
					<Scene 
						key="menuMain" 
						component={MenuMain} 
						title="Menu" 
						backTitle={null}
						navTransparent={false}
						navBarButtonColor= 'black'
						navigationBarStyle={{backgroundColor:'white', borderBottomWidth:1, shadowColor: 'rgba(0,0,0,1)', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, shadowRadius: 1, backButtonTintColor: 'black', }}	
					/>
					<Scene 
						key="ar" 
						component={AR} 
						title="" 
						navTransparent={true}
						backTitle={null}
						navBarButtonColor= 'black'
					/>
			</Stack>
		</Router>
	)
};

const styles = {
	navBar: {
		backgroundColor:'rgba(255,255,255,1)',
		hidden: true
	},
	sceneStyle: {
		backgroundColor:'rgba(255,255,255,1)',
		hidden: true,
		borderBottomColor: '#bbb',
		borderBottomWidth: 1
	},
	navBarTitle:{
		color:'black'
	},
	barButtonTextStyle:{
	// color:'red'
	},
}	

export default RouterComponent;
