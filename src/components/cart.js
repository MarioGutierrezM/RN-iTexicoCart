import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { productAdded } from '../actions/cartActions';
import CartProductView from './cartProductView';
import { Footer } from './common';

class Cart extends Component {

    componentWillMount() {
    }

    renderCart() {
        return this.props.cartProducts.map((product, key) =>
            <CartProductView key={key} product={product} />);
    }

    render() {
        return (
            <View style={{ position: 'relative', flex: 1 }}>
                <View >
                    <ScrollView >
                        <View >
                            {this.renderCart()}
                        </View>
                    </ScrollView>
                </View>

                <Footer menu={2} />
            </View>
        );
    }
}

const mapStateToProps = ({ cart }) => {
    const { cartProducts } = cart;

    return { cartProducts };
};

export default connect(mapStateToProps, { productAdded })(Cart);
