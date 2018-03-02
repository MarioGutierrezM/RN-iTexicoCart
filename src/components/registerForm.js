import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {
    emailChanged,
    passwordChanged,
    loginUser,
    nickNameChanged,
    numberChanged
} from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class RegisterForm extends Component {

    onNickNameChange(text) {
        this.props.nickNameChanged(text);
    }

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onNumberChange(text) {
        this.props.numberChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onBottonPress() {
        const { email, password } = this.props;
        //this.props.loginUser({ email, password });
    }


    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="User Name"
                        placeholder="user_name"
                        onChangeText={this.onNickNameChange.bind(this)}
                        value={this.props.userName}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Number"
                        placeholder="4491234567"
                        onChangeText={this.onNumberChange.bind(this)}
                        value={this.props.number}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <Text>
                    {this.props.error}
                </Text>

                <CardSection>
                    <Button onPress={this.onBottonPress.bind(this)}>
                        Register
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, nickName, number, error, loading } = auth;

    return { email, password, nickName, number, error, loading };
};

export default connect(
    mapStateToProps,
    {
        emailChanged,
        passwordChanged,
        loginUser,
        nickNameChanged,
        numberChanged
    }
)(RegisterForm);

