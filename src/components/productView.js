import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { productAdded } from '../actions';
import { Card, CardSection } from './common';

class ProductView extends Component {

    addProduct() {
        console.log('Id added', this.props.product._id);
        this.props.productAdded({
            product_id: this.props.product._id,
            quantity: 1,
            name: this.props.product.name,
            category: this.props.product.category,
            price: this.props.product.price,
            imageUrl: this.props.product.imageUrl
        });
    }

    render() {
        const { name, price, imageUrl } = this.props.product; //product = props;
        const {
            headerContentStyle,
            nameTextStyle,
            imageStyle,
            footerContentStyle,
            priceStyle,
            textButtonStyle
        } = styles;

        return (
            <View style={styles.productStyle}>
                <Card>
                    <CardSection style={{ margin: 1 }}>
                        <Image
                            style={imageStyle}
                            source={{ uri: imageUrl }}
                        />
                    </CardSection>

                    <CardSection style={{ margin: 1 }}>
                        <View style={headerContentStyle}>
                            <Text style={nameTextStyle}>{name}</Text>
                        </View>
                    </CardSection>

                    <CardSection style={{ margin: 1 }}>
                        <View style={footerContentStyle}>
                            <Text style={priceStyle}>${price}</Text>
                            <TouchableOpacity onPress={this.addProduct.bind(this)}>
                                <Text style={textButtonStyle}>
                                    Add to Cart
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </CardSection>
                </Card >
            </View>
        );
    }
}

const styles = {
    footerContentStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    separator: {
        flex: 1
    },
    priceStyle: {
        fontSize: 18,
        color: '#41adec',
        fontWeight: 'bold',
        flex: 1,
        marginLeft: 5
    },
    nameTextStyle: {
        fontSize: 20,
        color: 'gray',
        fontWeight: 'bold',
    },
    headerContentStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1
    },
    imageStyle: {
        height: 200,
        flex: 1,
        width: null
    },
    textButtonStyle: {
        color: '#41adec',
        fontWeight: 'bold',
        fontSize: 18
    },
    productStyle: {
        width: 200,
        height: 300,
        margin: 3,
        backgroundColor: 'white',
    }
};

export default connect(null, { productAdded })(ProductView);
