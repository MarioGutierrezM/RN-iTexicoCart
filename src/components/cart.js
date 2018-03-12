import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { productAdded, cleanCart } from '../actions/cartActions';
import CartProductView from './cartProductView';
import { Footer, Button } from './common';
import OrderController from '../controllers/orderController';

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            totalPrice: 0
        };
    }

    newOrder() {
        const productsArray = [];
        this.props.cartProducts.forEach(product => {
            const obj = {
                product: product.product_id,
                quantity: product.quantity
            };
            productsArray.push(obj);
        });
        const orderObj = {
            products: productsArray,
            client_id: this.props.userId
        };
        OrderController.postOrder(orderObj, () => {
            this.props.cleanCart();
        });
    }

    addPrices() {
        let totalPrice = 0;
        this.props.cartProducts.forEach(product => {
            totalPrice += product.price;
        });
        return totalPrice;
    }

    renderCart() {
        return this.props.cartProducts.map((product, key) =>
            <CartProductView key={key} product={product} />);
    }

    render() {
        return (
            <View style={{ position: 'relative', flex: 1 }}>
                <View style={{ flex: 4 }}>
                    <ScrollView >
                        <View >
                            {this.renderCart()}
                        </View>
                    </ScrollView>
                </View>

                <View style={{ flex: 1 }}>
                    <Button style={styles.buttonStyle} onPress={this.newOrder.bind(this)}>
                        PLACE THIS ORDER : {this.addPrices()}
                    </Button>
                    <Footer menu={2} quantity={this.props.cartProducts.length} />
                </View>
            </View>
        );
    }
}

const styles = {
    buttonStyle: {
        position: 'absolute',
        bottom: 80,
        left: 0,
        right: 0,
        paddingLeft: 20,
        paddingRight: 20,
    }
};

const mapStateToProps = ({ cart, auth }) => {
    const { cartProducts } = cart;
    const { userId } = auth;

    return { cartProducts, userId };
};

export default connect(mapStateToProps, { productAdded, cleanCart })(Cart);
