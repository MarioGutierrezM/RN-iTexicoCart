import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { productAdded } from '../actions/cartActions';
import CartProductView from './cartProductView';
import { Footer, Button } from './common';

class Cart extends Component {
    constructor() {
        super();
        this.state = {
            totalPrice: 0
        };
    }

    componentWillMount() {
    }

    addPrices() {
        let totalPrice = 0;
        this.props.cartProducts.forEach(product => {
            console.log('x', product.price);
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
                    <Button style={styles.buttonStyle}>
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

const mapStateToProps = ({ cart }) => {
    const { cartProducts } = cart;

    return { cartProducts };
};

export default connect(mapStateToProps, { productAdded })(Cart);
