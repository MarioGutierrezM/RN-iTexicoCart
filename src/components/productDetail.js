import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import { Card, CardSection, Button } from './common';

const ProductDetail = ({ product }) => {
    const { name, price, imageUrl } = product; //product = props;
    const {
        headerContentStyle,
        nameTextStyle,
        imageStyle,
        footerContentStyle,
        priceStyle
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
                    <Button style={{ borderRadius: 0 }}>
                        Add to Cart
                    </Button>
                </View>
            </CardSection>
        </Card>
    );
};

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
    }
};

export default ProductDetail;

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
