import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import ProductDetail from './productDetail';

class ProductList extends Component {
    state = { products: [] };
    componentWillMount() {
        axios.get('https://shopping-cart-api.herokuapp.com/api/product')
        .then(response => this.setState({ products: response.data }));
    }

    renderProducts() {
        return this.state.products.map(product => 
            <ProductDetail key={product.name} product={product} />);
    }

    render() {
        console.log('data', this.state.products);
        return (
            <ScrollView>
                {this.renderProducts()}
            </ScrollView>
        );
    }
}

export default ProductList;
