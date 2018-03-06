import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { Header } from './common';
import LoginForm from './loginForm';
import RegisterForm from './registerForm';

class SelectForm extends Component {
    constructor() {
        super();
        this.state = {
            headerText: '',
            formSelect: true,
            barSelect: 1
        };
    }

    changeForm() {
        if (this.state.formSelect) {
            this.setState({ formSelect: false, barSelect: 2 });
        } else {
            this.setState({ formSelect: true, barSelect: 1 });
        }
    }

    renderForms() {
        let headerText = '';
        let barStatus = 1;
        let form = <RegisterForm />;
        if (this.state.formSelect) {
            headerText = 'Sign In';
            barStatus = 1;
            form = <LoginForm />;
        } else {
            headerText = 'Sing Up';
            barStatus = 2;
            form = <RegisterForm />;
        }
        return (
            <View>
                <TouchableOpacity onPress={this.changeForm.bind(this)} >
                    <Header headerText={headerText} barStatus={barStatus} />
                </TouchableOpacity >
                {form}
            </View>
        );
    }

    render() {
        return (
            <View>
                {this.renderForms()}
            </View >
        );
    }
}

export default SelectForm;
