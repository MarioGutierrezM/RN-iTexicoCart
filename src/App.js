import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';

class App extends Component {
  render() {
    return (
      <View >
        <Header headerText="iTexico Cart" />
        <RegisterForm />
      </View>
    );
  }
}

export default App;
