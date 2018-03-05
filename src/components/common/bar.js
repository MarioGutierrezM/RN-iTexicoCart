import React, { Component } from 'react';
import { View } from 'react-native';

class Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            barSelected: ''
        };
    }

    renderBlock(isActive) {
        let styleAux = { ...styles.barOffStyle };//spread operator
        if (isActive) {
            styleAux = { ...styleAux, ...styles.barOnStyle };
        }
        return <View style={styleAux} />;
    }

    render() {
        return (
            <View style={styles.contentStyle} >
                {this.renderBlock(this.props.active === 1)} 
                {this.renderBlock(this.props.active === 2)} 
            </View>
        );
    }
}

const styles = {
    barOnStyle: {
         backgroundColor: 'green',
         borderColor: 'green',
    },
    barOffStyle: {
        backgroundColor: 'grey',
        borderColor: 'grey',
        margin: 5,
        borderRadius: 25,
        borderWidth: 1,
        height: 5,
        width: 40
    },
    contentStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
};

export { Bar };

