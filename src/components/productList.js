import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import { getAllProducts } from '../actions';
import ProductView from './productView';
import { Footer } from './common';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [] 
        };
    }

    componentWillMount() {
        this.props.getAllProducts();
    }

    renderProducts() {
        return this.props.products.map(product =>
            <ProductView key={product.name} product={product} />);
    }

    render() {
        return (
            // <View style={{ position: 'relative' }}> //estilos de paco
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
                <Footer menu={1} />
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

const mapStateToProps = ({ allProducts }) => {
    const { products } = allProducts;

    return { products };
};

export default connect(mapStateToProps, { getAllProducts })(ProductList);
