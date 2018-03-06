//Import libraries for making a component 
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Bar } from './bar';

//Make a component 
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
            <Bar active={2} />
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        paddingTop: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 }, //dimentions of the shadow
        shadowOpacity: 0, //the darkness of the shadow
        elevation: 5,
        position: 'relative',
        marginBottom: 15
    },
    textStyle: {
        fontSize: 30
    }
};

//Make the component available to other parts of the app 
export { Header }; //HACER CLASE Y PONER EL ONPRESS
