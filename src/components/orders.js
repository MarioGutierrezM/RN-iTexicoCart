import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { getOrders } from '../actions';
import OrderView from './orderView';
import { Footer } from './common';

class Orders extends Component {

    componentWillMount() {
        const userIDD = '5a8d844a25a4d800155e2e9a';
        this.props.getOrders(userIDD);//mandar id
    }

    renderOrders() {
        return this.props.orders.map((order, key) =>
            <OrderView key={key} order={order} />);
    }

    render() {
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

const mapStateToProps = ({ cart, myOrders, auth }) => {
    const { cartProducts } = cart;
    const { orders } = myOrders;
    const { userId } = auth;

    return { cartProducts, orders, userId };
};

export default connect(mapStateToProps, { getOrders })(Orders);
