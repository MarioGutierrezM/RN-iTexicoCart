import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import { TextInput, View } from 'react-native';

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFocus: false,
            iconColor: 'gray'
        };
    }

    renderOnFocusInput() {
        this.setState({ isFocus: true, iconColor: '#0080B9' });
    }

    renderOffFocusInput() {
        this.setState({ isFocus: false, iconColor: 'gray' });
    }

    renderInput() {
        const { value, onChangeText, placeholder, secureTextEntry } = this.props;
        //const { inputStyle, containerStyle, iconStyle } = styles;

        let styleAux = { ...styles.inputStyle };
        if (this.state.isFocus) {
            styleAux = { ...styleAux, ...styles.inputFocusStyle };
        }
        return (
            <TextInput
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                placeholder={placeholder}
                style={styleAux}
                value={value}
                onChangeText={onChangeText}
                onFocus={this.renderOnFocusInput.bind(this)}
                onBlur={this.renderOffFocusInput.bind(this)}
            />
        );
    }

    render() {
        const { iconName } = this.props;
        const { containerStyle, iconStyle } = styles;

        // const { value, onChangeText, placeholder, secureTextEntry, iconName } = this.props;
        // const { inputStyle, containerStyle, iconStyle } = styles; chido

        return (
            <View style={containerStyle}>
                <Icon
                    style={iconStyle}
                    name={iconName} size={18} color={this.state.iconColor}
                />
                {this.renderInput()}
            </View>
        );
    }
}

const styles = { //azul: #0080B9  41adec
    inputStyle: {
        color: '#41adec',
        paddingRight: 5,
        paddingLeft: 5,
        borderBottomWidth: 1,
        borderColor: 'gray',
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    inputFocusStyle: {
        color: '#41adec',
        borderColor: '#41adec'
    },
    labelStyle: {
        color: 'gray',
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

