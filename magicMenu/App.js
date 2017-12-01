// App.js - main control for entire application

// import packages
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

//import reducers
import reducers from './src/reducers';

// import component(s)
import Router from './src/Router';

class App extends Component {

	// componentWillMount() is grabbing firebase api-key and database paths/information
	componentWillMount() {
		var config = {
		    apiKey: "AIzaSyDjfG-HQZPaQ8CvN56-0c3QiOMZOGnnRbw",
			authDomain: "magicmenu-4c59c.firebaseapp.com",
			databaseURL: "https://magicmenu-4c59c.firebaseio.com",
			projectId: "magicmenu-4c59c",
			storageBucket: "magicmenu-4c59c.appspot.com",
			messagingSenderId: "806396487290"
		};
		firebase.initializeApp(config);
	}

	// Create a store to use redux in application
	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}

export default App;