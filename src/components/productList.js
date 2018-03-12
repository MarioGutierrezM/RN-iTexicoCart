import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { getAllProducts } from '../actions';
import ProductView from './productView';
import { Footer } from './common';

class ProductList extends Component {

    componentWillMount() {
        this.props.getAllProducts();
    }

    renderProducts() {
        return this.props.products.map((product, key) =>
            <ProductView key={key} product={product} />);
    }

    render() {
        return (
            <View style={{ position: 'relative', flex: 1 }}>
                <View style={{ flex: 9 }}>
                    <ScrollView contentContainerStyle={styles.scroolViewStyle}>
                            {this.renderProducts()}
                    </ScrollView>
                </View>
                <View style={{ flex: 1 }}>
                    <Footer menu={1} quantity={this.props.cartProducts.length} />
                </View>
            </View>
        );
    }
}

const styles = {
    scroolViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        backgroundColor: '#d9d9d9',
        justifyContent: 'center',
    },
};

const mapStateToProps = ({ allProducts, cart }) => {
    const { products } = allProducts;
    const { cartProducts } = cart;

    return { products, cartProducts };
};

export default connect(mapStateToProps, { getAllProducts })(ProductList);
