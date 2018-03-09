import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from './common';


class OrderView extends Component {

    orderDetail() {
        Actions.orderDetail({ id: this.props.order._id });
    }

    render() {
        const { 
            cardSectionStyle,
            pressStyle,
            infoTextStyle,
            info2TextStyle,
            arrowTextStyle 
        } = styles;

        return (
            <Card>
                <CardSection style={cardSectionStyle}>
                    <TouchableOpacity style={pressStyle} onPress={this.orderDetail.bind(this)}>
                        <View >
                            <Text style={infoTextStyle}>
                                {this.props.order.date}
                            </Text>
                            <Text style={info2TextStyle}>
                                Order id #{this.props.order._id}
                            </Text>
                        </View>

                        <View >
                            <Text style={arrowTextStyle}> > </Text>
                        </View>
                    </TouchableOpacity>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    cardSectionStyle: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        margin: 5
    },
    pressStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 1,
    },
    infoContainerStyle: {
        backgroundColor: 'red'
    },
    arrowContainerStyle: {
        backgroundColor: 'blue'
    },
    infoTextStyle: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    info2TextStyle: {
        color: '#ababab',
        fontWeight: 'bold',
        fontSize: 14,
    },
    arrowTextStyle: {
        color: 'gray',
        fontSize: 20
    }
};

export default OrderView;
