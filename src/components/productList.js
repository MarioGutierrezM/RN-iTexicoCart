import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import ProductDetail from './productDetail';

class ProductList extends Component {
    state = { albums: [] };
    componentWillMount() {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <ProductDetail key={album.title} album={album} />);
    }

    render() {
        console.log('data', this.state.albums);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default ProductList;
