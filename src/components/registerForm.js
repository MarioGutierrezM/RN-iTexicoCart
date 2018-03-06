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
                        placeholder="User Name"
                        onChangeText={this.onNickNameChange.bind(this)}
                        value={this.props.userName}
                        iconName="user"
                    />
                </CardSection>

                <CardSection>
                    <Input
                        placeholder="Email"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                        iconName="envelope"
                    />
                </CardSection>

                <CardSection>
                    <Input
                        placeholder="Mobile Number"
                        onChangeText={this.onNumberChange.bind(this)}
                        value={this.props.number}
                        iconName="screen-smartphone"
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="Password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        iconName="lock"
                    />
                </CardSection>

                <Text>
                    {this.props.error}
                </Text>

                <CardSection>
                    <Button onPress={this.onBottonPress.bind(this)}>
                        REGISTER
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

