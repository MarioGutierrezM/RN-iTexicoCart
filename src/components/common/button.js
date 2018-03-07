import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, style }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity style={[buttonStyle, style]} onPress={onPress}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1, //extens to the content
        alignSelf: 'stretch',
        backgroundColor: '#41adec',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#41adec',
        marginLeft: 5,
        marginRight: 5
    }
};

export { Button };
