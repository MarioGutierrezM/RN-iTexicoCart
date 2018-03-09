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
            // <View style={{ position: 'relative' }}> //estilos de paco
            //     <ScrollView contentContainerStyle={styles.scroolViewStyle} >
            //         <View style={styles.productStyle} >
            //             {this.renderProducts()}
            //         </View>
            //     </ScrollView>
            //     <Footer />
            // </View>
            <View style={{ position: 'relative', flex: 1 }}>
                <View style={{ flex: 9 }}>
                    <ScrollView >
                        <View >
                            {this.renderProducts()}
                        </View>
                    </ScrollView>
                </View>
                <View style={{ flex: 1 }}>
                    <Footer menu={1} quantity={this.props.cartProducts.length} />
                </View>
            </View>
        );
    }
}

// const styles = {
//     scroolViewStyle: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         justifyContent: 'center'
//     },
//     productStyle: {
//         width: 180,
//         margin: 3,
//         backgroundColor: '#000',
//         borderWidth: 1,
//         borderColor: '#000', //E9E9E9
//         borderRadius: 3,
//     }
// };

const mapStateToProps = ({ allProducts, cart }) => {
    const { products } = allProducts;
    const { cartProducts } = cart;

    return { products, cartProducts };
};

export default connect(mapStateToProps, { getAllProducts })(ProductList);
