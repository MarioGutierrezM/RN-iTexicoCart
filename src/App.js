import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/loginForm';

class App extends Component {
  render() {
    return (
      <View >
        <Header headerText="iTexico Cart" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
