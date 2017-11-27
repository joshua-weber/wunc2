import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class Map extends Component {

	state = {
		mapRegion: null,
		lastLat: null,
		lastLong: null,
	}

	componentDidMount() {
     	this.watchID = navigator.geolocation.watchPosition((position) => {
			let region = {
				latitude:       position.coords.latitude,
				longitude:      position.coords.longitude,
				latitudeDelta:  0.00922*1.5,
				longitudeDelta: 0.00421*1.5
			}

			this.onRegionChange(region, region.latitude, region.longitude);
    	});
  	}

	onRegionChange(region, lastLat, lastLong) {
		this.setState({
			mapRegion: region,
			// If there are no new values set the current ones
			lastLat: lastLat || this.state.lastLat,
			lastLong: lastLong || this.state.lastLong
		});
	}

	componentWillUnmount() {
		navigator.geolocation.clearWatch(this.watchID);
	}
	
	render() {
		return (
			<View style={{flex: 1}}>
				<MapView
					style={styles.Container}
					region={this.state.mapRegion}
					showsUserLocation={true}
					followUserLocation={true}
					onRegionChange={this.onRegionChange.bind(this)}
				>
				</MapView>
			</View>
		);
	}
}

const styles = {
	Container: {
		height: '100%',
		width: '100%'
	}
}

export default Map;