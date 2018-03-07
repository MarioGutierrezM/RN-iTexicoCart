import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import SelectForm from './components/selectForm';
import ProductList from './components/productList';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ backgroundColor: 'white' }} >
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={SelectForm} hideNavBar />
                </Scene>

                <Scene key="main">
                    <Scene
                        rightTitle="Logout"
                        onRight={() => Actions.auth()}
                        key="productList"
                        component={ProductList}
                        title="iTexico Products"
                        initial
                    />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
