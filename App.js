import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PlaceInput from './src/components/PlaceInput';
import List from './src/components/List';
export default class App extends Component {
  state = {
    places: []
  }

  placeAddedHandler = (placeName) => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  }

  onRemovePressed = (item) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((description, i) => {
          return i != item;
        })
      }
    });


  }

  render() {

    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <List items={this.state.places} removeHandler={this.onRemovePressed} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  listContainer: {
    width: '100%'
  }
});
