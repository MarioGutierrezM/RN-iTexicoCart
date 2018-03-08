import React from 'react';
import { View, Text } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
};

export { Card };
