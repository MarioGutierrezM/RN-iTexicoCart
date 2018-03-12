import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { productDeleted, addOne, subtractOne } from '../actions';
import { Card, CardSection } from './common';

class CartProductView extends Component {

    deleteProduct() {
        this.props.productDeleted(this.props.product.product_id);
    }

    subtract() {
        this.props.subtractOne(this.props.product.product_id);
    }

    add() {
        this.props.addOne(this.props.product.product_id);
    }

    render() {
        const {
            containerStyle,
            imageStyle,
            containerInfoStyle,
            priceTextStyle,
            containerQuantityStyle,
            quantityTextStyle,
            cardSectionStyle,
            nameTextStyle,
            categoryTextStyle,
            simbolTextStyle,
            simbolContainerStyle,
            containerRigthSectionStyle,
            deleteContainerStyle,
            deleteTextStyle
        } = styles;

        return (
            <Card>
                <CardSection style={cardSectionStyle}>
                    <View style={containerStyle}>
                        <View style={deleteContainerStyle}>
                            <TouchableOpacity onPress={this.deleteProduct.bind(this)}>
                                <Text style={deleteTextStyle}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <Image
                            source={{ uri: this.props.product.imageUrl }}
                            style={imageStyle}
                        />

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

                        <View style={containerRigthSectionStyle}>
                            <TouchableOpacity
                                style={simbolContainerStyle}
                                onPress={this.add.bind(this)}
                            >
                                <Text style={simbolTextStyle}>+</Text>
                            </TouchableOpacity>
                            <View style={containerQuantityStyle}>
                                <Text style={quantityTextStyle}>
                                    {this.props.product.quantity}
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={simbolContainerStyle}
                                onPress={this.subtract.bind(this)}
                            >
                                <Text style={simbolTextStyle}>-</Text>
                            </TouchableOpacity>
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
        borderColor: '#cccccc',
        borderWidth: 2,
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
        borderColor: '#cccccc',
        borderWidth: 2,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center'
    },
    simbolTextStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#cccccc'
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
        borderBottomWidth: 2,
        borderBottomColor: '#cccccc',
    },
    deleteContainerStyle: {
        backgroundColor: 'red',
        borderRadius: 27/2,
        width: 27,
        height: 27,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    deleteTextStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22
    }
};

export default connect(null, { productDeleted, addOne, subtractOne })(CartProductView);
