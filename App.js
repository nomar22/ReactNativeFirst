import React, { Component } from 'react';
import { StyleSheet, Text, ImageBackground } from 'react-native';
import PlaceInput from './src/components/PlaceInput';
import List from './src/components/List';
import image from './src/assets/lisbon.jpg';
import background from './src/assets/world.png';
import Detail from './src/components/Detail';


export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  }

  placeAddedHandler = (placeName) => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(
          {
            key: Math.random().toString(),
            placeName,
            image
          })
      };
    });
  };

  onPressItem = (id) => {
    this.setState({
      selectedPlace: this.state.places.find(({ key }) => {
        return key === id;
      })
    });
  };

  onRemovePressed = (id) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(({ key }) => {
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

  onCloseModal = () => {
    this.setState({selectedPlace:null})
  }

  render() {

    return (
      <ImageBackground
        source={background}
        style={styles.container}>

        <Detail
          closeModal={this.onCloseModal}
          selectedPlace={this.state.selectedPlace}

        />
        <Text> Insert some cool places </Text>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} onDeleteAll={this.deleteAllHandler} />
        <List
          items={this.state.places}
          removeHandler={this.onRemovePressed}
          showItemHandler={this.onPressItem} />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    alignItems: 'center',
    // width: '100%',
    height: '100%',
    justifyContent: 'flex-start'
  },

  listContainer: {
    width: '100%'
  }
});
