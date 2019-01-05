import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import AlbumDetail from './AlbumDetail';

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
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );

    }

    render (){
        console.log(this.state);
        return (
        <ScrollView>
            {this.renderAlbums()} 
        </ScrollView>
        );
    }
  }

export default AlbumList;