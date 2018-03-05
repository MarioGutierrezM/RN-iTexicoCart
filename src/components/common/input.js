import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import { TextInput, View, Text } from 'react-native';

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            onFocusStyle: '#000'
        };
    }

    componentDidMount() {
        this.setState({
            onFocusStyle: '#000'
        });
        console.log('asdadads', this.state.onFocusStyle);
    }

    onFocusInput() {
        this.setState({
            onFocusStyle: '#0080B9'
        });
        console.log('asdadads', this.state.onFocusStyle);
    }

    render() {
        const { value, onChangeText, placeholder, secureTextEntry, iconName } = this.props;
        const { inputStyle, containerStyle, iconStyle } = styles;

        return (
            <View style={containerStyle}>
                <Icon
                    style={iconStyle}
                    name={iconName} size={18} color={this.state.onFocusStyle}
                />
                <TextInput
                    secureTextEntry={secureTextEntry}
                    autoCorrect={false}
                    placeholder={placeholder}
                    style={inputStyle}
                    value={value}
                    onChangeText={onChangeText}
                    onFocus={this.onFocusInput.bind(this)}
                />
            </View>
        );
    }
}

const styles = {
    inputStyle: {
        color: '#0080B9',
        paddingRight: 5,
        paddingLeft: 5,
        borderBottomWidth: 1,
        borderColor: '#0080B9',
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        color: '#0080B9',
        fontSize: 18,
        paddingLeft: 20
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconStyle: {
        marginLeft: 5,
        marginRight: 10
    }
};

export { Input };

/* 

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            onFocusStyle: ''
        };
    }

    render() {
    const { label, value, onChangeText, placeholder, secureTextEntry, iconName } = this.props;
    const { inputStyle, labelStyle, containerStyle, iconStyle } = styles;
        return (
        <View style={containerStyle}>
            <Icon
                style={iconStyle}
                name={iconName} size={18} color="#0080B9"
            />
            <TextInput
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                placeholder={placeholder}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
    }
}

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, iconName }) => {
    const { inputStyle, labelStyle, containerStyle, iconStyle } = styles;
    return (
        <View style={containerStyle}>
            <Icon
                style={iconStyle}
                name={iconName} size={18} color="#0080B9"
            />
            <TextInput
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                placeholder={placeholder}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

*/

