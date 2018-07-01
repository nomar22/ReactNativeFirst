import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground   } from 'react-native';
import PlaceInput from './src/components/PlaceInput';
import List from './src/components/List';
import image from './src/assets/lisbon.jpg';
import background from './src/assets/watermark.gif';
export default class App extends Component {
  state = {
    places: []
  }

  placeAddedHandler = (placeName) => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(
          { key: Math.random().toString(), 
            placeName,
            img: image
           })
      };
    });
  };

  onPressItem = (id) => {
    let clicked = this.state.places.find(({key})=>{
      return key ===id;

    });
    alert(clicked.placeName);

  };

  onRemovePressed = (id) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(({key}) => {
          return key != id;
        })
      }
    });
  };

  deleteAllHandler = () => {
    this.setState({
      places: []
    }
    )
  };

  render() {

    return (
      <ImageBackground source={background} style={styles.container}>
        {/* <Image source={background}></Image> */}
        <PlaceInput onPlaceAdded={this.placeAddedHandler} onDeleteAll={this.deleteAllHandler} />
        <List items={this.state.places} removeHandler={this.onRemovePressed} showItemHandler={this.onPressItem}/>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start'
  },

  listContainer: {
    width: '100%'
  }
});
