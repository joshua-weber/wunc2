import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
// import ReduxThunk from 'redux-thunk';
// import reducers from './reducers';
import Router from './src/Router';

class App extends Component {

	componentWillMount() {
		var config = {
		    apiKey: '',
		    authDomain: '',
		    databaseURL: '',
		    projectId: '',
		    storageBucket: '',
		    messagingSenderId: ''
		};
		firebase.initializeApp(config);
	}

	render() {
		// const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (

				<Router />

		);
	}
}

export default App;