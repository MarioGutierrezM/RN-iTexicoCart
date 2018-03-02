import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';

import { Header } from './components/common';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';

class App extends Component {

  // componentDidMount() {
  //   SplashScreen.hide();
  // }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));
    return (
      <Provider store={store}>
        <View>
          <Header headerText="iTexico Cart" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
