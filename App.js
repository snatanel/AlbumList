import React from 'react';
import { AppRegistry } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import AlbumHeader from './src/components/AlbumList'
import AlbumList from './src/components/AlbumList';


export default class App extends React.Component {
  render() {
    return (
      <View style={{felx: 1}}>
        <Header headerText={'SimonAlbums'} />
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
