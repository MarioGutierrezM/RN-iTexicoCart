import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { getOrders } from '../actions';
import OrderController from '../controllers/orderController';
import OrderView from './orderView';
import { Footer } from './common';

class Orders extends Component {

    state = { orders: [] };
    componentWillMount() {
        OrderController.getAllOrders(res => {
            this.setState({ orders: res.data });
        });
        this.props.getOrders();
    }

    renderOrders() {
        return this.state.orders.map((order, key) =>
            <OrderView key={key} order={order} />);
    }

    render() {
        console.log('orders', this.state.orders);

        return (
            <View style={{ position: 'relative', flex: 1 }}>
                <View style={{ flex: 9 }}>
                    <ScrollView >
                        <View >
                            {this.renderOrders()}
                        </View>
                    </ScrollView>
                </View>
                <View style={{ flex: 1 }}>
                    <Footer menu={3} quantity={this.props.cartProducts.length} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ cart, myOrders }) => {
    const { cartProducts } = cart;
    const { orders } = myOrders;

    return { cartProducts, orders };
};

export default connect(mapStateToProps, { getOrders })(Orders);
