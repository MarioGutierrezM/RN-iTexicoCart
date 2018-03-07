import React, { Component } from 'react';
// import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import logger from 'redux-logger';
import reducers from './reducers';
import Router from './router';

import ProductList from './components/productList';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCeEE4-0JJn5CQaV3KlAKeb8f60XKuZzlU',
      authDomain: 'manager-359c7.firebaseapp.com',
      databaseURL: 'https://manager-359c7.firebaseio.com',
      projectId: 'manager-359c7',
      storageBucket: 'manager-359c7.appspot.com',
      messagingSenderId: '323949238138'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
