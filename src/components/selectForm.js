import React, { Component } from 'react';
import { View } from 'react-native';

import LoginForm from './loginForm';
import RegisterForm from './registerForm';

class SelectForm extends Component {
    render() {
        return (
            <View>
                <LoginForm />
                {/* <RegisterForm /> */}
            </View>
        );
    }
}

export default SelectForm;
