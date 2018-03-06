import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { Header } from './common';
import LoginForm from './loginForm';
import RegisterForm from './registerForm';
import ProductList from './productList';

class SelectForm extends Component {
    constructor() {
        super();
        this.state = {
            headerText: [
                'Sign In',
                'Sign Up',
                'iTexicoCart'
            ],
            formSelect: true
        };
    }

    changeForm() {
        this.setState({ formSelect: !this.formSelect });
        console.log(this.state.formSelect);
    }

    renderForms() {
        if (this.state.formSelect) {
           this.setState({ headerText: 'Sign In' });
        } else {
            this.setState({ headerText: 'Sing Up' });
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.changeForm.bind(this)} >
                    <Header headerText="iTexico Cart" />
                </TouchableOpacity >
                {/* <LoginForm /> */}
                <RegisterForm />
                {/* <ProductList /> */}
            </View >
        );
    }
}

export default SelectForm;
