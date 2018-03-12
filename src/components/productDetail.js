import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { Card, CardSection } from './common';

class ProductDetail extends Component {
    render() {
        const {
            imageStyle,
            infoContainerStyle,
            nameTextStyle,
            priceTextStyle,
        } = styles;
        return (
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
                            {this.props.product.name}
                        </Text>

                        <Text style={priceTextStyle}>
                            ${this.props.product.price}
                        </Text>
                    </View>
                </CardSection>

            </Card>
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
    },
    priceTextStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#41adec',
    }
};

export default ProductDetail;
