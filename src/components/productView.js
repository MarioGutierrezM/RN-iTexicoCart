import React, { Component } from 'react';
import { Text, View, Image, Linking, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { productAdded } from '../actions';
import { Card, CardSection, Button } from './common';

class ProductView extends Component {

    constructor(props) {
        super(props);
    }

    addProduct() {
        console.log('Id added', this.props.product._id);
        this.props.productAdded({
            product: this.props.product._id,
            quantity: 1
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
        flex: 1,
        marginLeft: 5
    },
    nameTextStyle: {
        fontSize: 20,
        color: 'gray'
    },
    headerContentStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    textButtonStyle: {
        color: '#41adec'
    }


};

const mapStateToProps = ({ cart }) => {
    const { products } = cart;
    return { products };
};

export default connect(mapStateToProps, { productAdded })(ProductView);

// <Card>
//             <CardSection>
//                 <View style={thumbnailContainerStyle}>
//                     <Image
//                         style={thumbnailStyle}
//                         source={{ uri: imageUrl }}
//                     />
//                 </View>
//                 <View style={headerContentStyle}>
//                     <Text style={headerTextStyle}>{name}</Text>
//                     <Text>{name}</Text>
//                 </View>
//             </CardSection>

//             <CardSection>
//                 <Image
//                     style={imageStyle}
//                     source={{ uri: imageUrl }}
//                 />
//             </CardSection>

//             <CardSection>
//                 <Button >
//                     Buy Now!
//                 </Button>
//             </CardSection>
//         </Card>
