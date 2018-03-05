import React, { Component } from 'react';
import { View } from 'react-native';

import LoginForm from './loginForm';
import RegisterForm from './registerForm';
import ProductList from './productList';

class SelectForm extends Component {
    render() {
        return (
            <View>
                <LoginForm />
                {/* <RegisterForm /> */}
                {/* <ProductList /> */}
            </View>
        );
    }
}

export default SelectForm;
