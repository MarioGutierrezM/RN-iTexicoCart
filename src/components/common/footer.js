import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/dist/SimpleLineIcons';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';


class Footer extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    toHomeRoute() {
        Actions.main();
    }

    toCartRoute() {
        Actions.cart();
    }

    toOrderRoute() {
        Actions.orders();
    }

    renderFooterHome() {
        let styleAuxContainer = { ...styles.iconContainerStyle };
        let styleAuxText = 'gray';
        if (this.props.menu === 1) {
            styleAuxContainer = { ...styleAuxContainer, ...styles.iconSelectedStyle };
            styleAuxText = 'white';
        }
        return (
            <TouchableOpacity onPress={this.toHomeRoute.bind(this)}>
                <View style={styleAuxContainer} >
                    <Icon
                        name="home" size={30} color={styleAuxText}
                    />
                </View>
            </TouchableOpacity>
        );
    }

    renderFooterCart() {
        let styleAuxContainer = { ...styles.iconContainerStyle };
        let styleAuxText = 'gray';
        if (this.props.menu === 2) {
            styleAuxContainer = { ...styleAuxContainer, ...styles.iconSelectedStyle };
            styleAuxText = 'white';
        }
        return (
            <TouchableOpacity onPress={this.toCartRoute.bind(this)}>
                <View style={styleAuxContainer}>
                    <View style={styles.quantityContainerStyle} >
                        <Text style={styles.quantityTextStyle}> {this.props.quantity} </Text>
                    </View>
                    <Icon
                        name="bag" size={30} color={styleAuxText}
                    />
                </View>
            </TouchableOpacity>
        );
    }

    renderFooterOrders() {
        let styleAuxContainer = { ...styles.iconContainerStyle };
        let styleAuxText = 'gray';
        if (this.props.menu === 3) {
            styleAuxContainer = { ...styleAuxContainer, ...styles.iconSelectedStyle };
            styleAuxText = 'white';
        }
        return (
            <TouchableOpacity onPress={this.toOrderRoute.bind(this)}>
                <View style={styleAuxContainer}>
                    <Icon
                        name="user" size={30} color={styleAuxText}
                    />
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.footerContainerStyle}>
                {this.renderFooterHome()}
                {this.renderFooterCart()}
                {this.renderFooterOrders()}
            </View>
        );
    }
}

const styles = {
    footerContainerStyle: {
        backgroundColor: 'black',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 70,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        width: '100%'
    },
    iconContainerStyle: {
        height: '100%',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        position: 'relative'
    },
    iconSelectedStyle: {
        backgroundColor: '#41adec', //41adec
    },
    iConColorSelected: {
        color: 'white'
    },
    //Quantity
    quantityContainerStyle: {
        position: 'absolute',
        backgroundColor: 'green',
        top: 19,
        right: 17,
        borderRadius: 1000,
    },
    quantityTextStyle: {
        color: '#fff',
        fontSize: 14,
    }

};

export { Footer };
