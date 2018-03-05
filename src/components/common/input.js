import React from 'react';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import { TextInput, View, Text } from 'react-native';

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
