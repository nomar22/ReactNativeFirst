import React, { Component } from 'react';
import { StyleSheet, Text, ImageBackground, Button, View } from 'react-native';
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
    this.setState({ selectedPlace: null })
  }

  makeChoice = () => {
    let size =  this.state.places.length;
    let randomPlace = 0;
    if (size > 0) {
      randomPlace = Math.floor(Math.random() * (size));
    }
    this.setState({
      selectedPlace: this.state.places[randomPlace]
     }
    );
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
        <View style={styles.choice}>
          <Text style={styles.title}> Where should I go ?</Text>
          <Button title="Choose" onPress={this.makeChoice} />

        </View>
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
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28,
    color: "blue"
  },

  listContainer: {
    width: '100%'
  },
  choice: {
    paddingBottom: 20
  }
});
