import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import axios from 'axios';
import ProductView from './productView';
import { Footer } from './common';

class Orders extends Component {

    state = { products: [] };
    componentWillMount() {
        axios.get('https://shopping-cart-api.herokuapp.com/api/product')
            .then(response => this.setState({ products: response.data }));
    }

    renderProducts() {
        return this.state.products.map(product =>
            <ProductView key={product.name} product={product} />);
    }

    render() {
        return (
            // <View style={{ position: 'relative' }}>
            //     <ScrollView contentContainerStyle={styles.scroolViewStyle} >
            //         <View style={styles.productStyle} >
            //             {this.renderProducts()}
            //         </View>
            //     </ScrollView>
            //     <Footer />
            // </View>
            <View style={{ position: 'relative' }}>
                <ScrollView >
                    <View >
                        {this.renderProducts()}
                    </View>
                </ScrollView>
                <Footer menu={3} />
            </View>
        );
    }
}

const styles = {
    scroolViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    productStyle: {
        width: 180,
        margin: 3,
        backgroundColor: '#000',
        borderWidth: 1,
        borderColor: '#000', //E9E9E9
        borderRadius: 3,
    }
};

export default Orders;
