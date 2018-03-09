import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection } from './common';

class OrderProductDetail extends Component {

    render() {
        const {
            containerStyle,
            containerInfoStyle,
            priceTextStyle,
            cardSectionStyle,
            nameTextStyle,
            categoryTextStyle,
        } = styles;

        return (
            <Card>
                <CardSection style={cardSectionStyle}>
                    <View style={containerStyle}>
                        {/* <Image
                            source={{ uri: this.props.product.imageUrl }}
                            style={imageStyle}
                        /> */}

                        <View style={containerInfoStyle}>
                            <View style={{ margin: 5 }}>
                                <Text style={nameTextStyle}>{this.props.product.name}</Text>
                            </View>
                            <View style={{ margin: 5 }}>
                                <Text style={categoryTextStyle}>
                                    Category: {this.props.product.category}
                                </Text>
                            </View>
                            <View style={{ margin: 5 }}>
                                <Text style={priceTextStyle}>${this.props.product.price}</Text>
                            </View>
                        </View>

                    </View>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    imageStyle: {
        height: 100,
        width: 100,
        justifyContent: 'flex-start',
        borderColor: 'gray',
        borderWidth: 1,
    },
    containerInfoStyle: {
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    nameTextStyle: {
        color: 'gray',
        fontSize: 20,
        fontWeight: 'bold',
    },
    categoryTextStyle: {
        color: 'gray',
        fontSize: 18,
        fontWeight: 'bold',
    },
    priceTextStyle: {
        color: '#41adec',
        fontSize: 20,
        fontWeight: 'bold',
    },
    containerRigthSectionStyle: {
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerQuantityStyle: {
        backgroundColor: 'white',
        borderRadius: 1000,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center'
    },
    simbolTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray'
    },
    simbolContainerStyle: {
        justifyContent: 'center',
        padding: 10,
    },
    quantityTextStyle: {
        color: '#41adec',
        fontSize: 14,
    },
    cardSectionStyle: {
        margin: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    }
};

export default OrderProductDetail;
