import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount () {
        return fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => response.json())
            .then(data => this.setState({ albums: data }));
            //debugger;
            //console.log(this.state.albums);
            }

    renderAlbums() {
        return this.state.albums.map(album => <Text>{album.title}</Text>);

    }

    render (){
        console.log(this.state);
        return (
        <View>
            {this.renderAlbums()} 
        </View>
        );
    }
  }

export default AlbumList;