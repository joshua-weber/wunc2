import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { RestaurantMain } from '../actions';
import { Button } from './common';

class Welcome extends Component {

	onButtonPress() {
		RestaurantMain();
	}

	render() {
		return (
			<Image source={require('../assets/img/landingBackground.png')} style={styles.pageBackground}>
	        	<Image style={styles.owl} source={require('../assets/img/owl.png')} />
	        	<Image style={styles.magicMenu} source={require('../assets/img/magicMenu1x.png')} />
	        	<View style={styles.getStarted}>
	          		<Button style={styles.mainButton} onPress={this.onButtonPress.bind(this)}>
	            		<Text style={styles.buttonText}>Get Started</Text>
	          		</Button>
	        	</View>
            <View style={styles.versionNumber}>
                <Text style={{ color: '#fff' }}>
                    V 0.1.3 - alpha
                </Text>
            </View>
	        </Image>
		);	
	}	
};

const styles = {
  pageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  headText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 50,
    fontFamily: 'Avenir',
    marginTop: -50
  },
  mainButton: {
    backgroundColor: "rgba(255,255,255,.9)",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "red",
    height: 14,
    minWidth: 130
  },
  buttonText: {
    color: 'white',
  },
  owl: {
    marginBottom: 30
  },
  getStarted: {
    flexDirection: 'row',   
  },
  versionNumber: {
    marginTop: 200
  }
}

export default Welcome;