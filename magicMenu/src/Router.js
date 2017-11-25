import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import Welcome from './components/Welcome';
import AR from './components/AR';
import RestaurantsList from './components/RestaurantsList';
import RestaurantMenu from './components/RestaurantMenu';

const RouterComponent = () => {
	return (
<Router>
{/* sceneStyle={styles.sceneStyle} navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} barButtonTextStyle={styles.barButtonTextStyle} barButtonIconStyle={styles.barButtonIconStyle} */}
{/* <Stack key="root" hideNavBar> */}

{/* key="main"  */}
	<Scene key="root" titleStyle={{ color: 'black' }} barButtonIconStyle={{ tintColor: 'green' }}>
		{/* <Scene key="welcome" component={Welcome} title="how do i hide this?"/> */}
		<Scene 
			key="connexion" 
			component={Welcome}
			hideNavBar={true} 
			title="Welcome" 
			initial={true}
			backTitle={null}
		/>
		<Scene 
			key="restaurants" 
			component={RestaurantsList} 
			title="Restaurants" 
			hideNavBar={false} 
			backTitle={null}
			navTransparent={true}
			navBarButtonColor= 'black'
			// backButtonTintColor = {{ tintColor:'black'}}
			navigationBarStyle={{backgroundColor:'white', borderBottomWidth:1, shadowColor: 'rgba(0,0,0,1)', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, shadowRadius: 1, backButtonTintColor: 'black', }}
			
			
			
			/>
		<Scene 
			key="restaurantMenu" 
			component={RestaurantMenu} 
			title="Menu" 
			backTitle={null}
			navTransparent={true}
			navBarButtonColor= 'black'
			// navigationBarStyle={{backgroundColor:'white', borderBottomWidth:0, shadowColor: 'rgba(0,0,0,1)', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, shadowRadius: 1, backButtonTintColor: 'black', }}
			/>
		<Scene 
			key="ar" 
			component={AR} 
			title="AR Compnent" 
			backTitle={null}
			navBarButtonColor= 'black'
			// navigationBarStyle={{backgroundColor:'white', borderBottomWidth:0, shadowColor: 'rgba(0,0,0,1)', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, shadowRadius: 1,  }}
			/>
	</Scene>

{/* </Stack> */}
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
barButtonIconStyle:{
// tintColor:'red'
},
}		

export default RouterComponent;