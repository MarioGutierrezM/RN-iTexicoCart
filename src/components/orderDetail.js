import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Footer, Button } from './common';
import OrderProductDetail from './orderProductDetail';
import OrderController from '../controllers/orderController';

class OrderDetail extends Component {

    state = { orders: [] };
    componentWillMount() {
        OrderController.getOneOrder(this.props.id, res => {
            this.setState({ orders: res.data.products });
        });
    }

    deleteOrder() {
        console.log('borrar', this.props.id);
        OrderController.deleteOrder(this.props.id, () => {
            this.setState({ orders: [] });
        });
    }

    renderDetails() {
        return this.state.orders.map((product, key) =>
            <OrderProductDetail key={key} product={product} />);
    }

    render() {
        return (
            <View style={{ position: 'relative', flex: 1 }}>
                <View style={{ flex: 4 }}>
                    <ScrollView >
                        <View >
                            {this.renderDetails()}
                        </View>
                    </ScrollView>
                </View>

                <View style={{ flex: 1 }}>
                    <Button style={styles.buttonStyle} onPress={this.deleteOrder.bind(this)}>
                        DELETE ORDER
                    </Button>
                    <Footer menu={3} quantity={this.props.cartProducts.length} />
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
        backgroundColor: 'red',
        borderColor: 'red',
    }
};

const mapStateToProps = ({ cart }) => {
    const { cartProducts } = cart;

    return { cartProducts };
};

export default connect(mapStateToProps, {})(OrderDetail);
