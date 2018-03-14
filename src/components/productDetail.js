import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { Card, CardSection, Button } from './common';

class ProductDetail extends Component {

    addCart() {
        this.props.functionAdd();
    }

    render() {
        const {
            imageStyle,
            infoContainerStyle,
            nameTextStyle,
            priceTextStyle,
            descriptionTextStyle,
            buttonStyle,
            buttonContainerStyle
        } = styles;
        return (
            <View style={{ flexDirection: 'column', height: '100%', width: '100%' }}>
                <View style={{ flex: 9 }}>
                    <Card>
                        <CardSection>
                            <Image
                                style={imageStyle}
                                source={{ uri: this.props.product.imageUrl }}
                            />
                        </CardSection>

                        <CardSection>
                            <View style={infoContainerStyle}>
                                <Text style={nameTextStyle}>
                                    Name: {this.props.product.name}
                                </Text>

                                <Text style={priceTextStyle}>
                                    Price: ${this.props.product.price}
                                </Text>

                                <Text style={descriptionTextStyle}>
                                    Description: {this.props.product.description}
                                </Text>
                            </View>
                        </CardSection>
                    </Card>
                </View>

                <View style={{ flex: 1 }}>
                    <View style={buttonContainerStyle}>
                        <Button style={buttonStyle} onPress={this.addCart.bind(this)}>
                            ADD TO CART
                        </Button>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = {
    imageStyle: {
        flex: 1,
        height: 400,
        width: 100
    },
    infoContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    nameTextStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'gray',
        marginBottom: 5,
    },
    priceTextStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#41adec',
    },
    descriptionTextStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'gray',
        marginBottom: 5,
    },
    buttonStyle: {
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        paddingBottom: 0,
    },
    buttonContainerStyle: {
        width: '100%',
        height: '100%'
    }
};

export default ProductDetail;
