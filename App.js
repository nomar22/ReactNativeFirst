import React, { Component } from 'react';
import { StyleSheet, Text, ImageBackground, Button, View } from 'react-native';
import PlaceInput from './src/components/PlaceInput';
import List from './src/components/List';
import image from './src/assets/lisbon.jpg';
import background from './src/assets/world.png';
import Detail from './src/components/Detail';
import { connect } from 'react-redux';
import { addPlace, selectPlace, deletePlace, deselectPlace } from './src/store/actions/places';

class App extends Component {
 

  placeAddedHandler = (placeName) => {
    this.props.onPlaceAdded(placeName);
  };

  onPressItem = (id) => {
    this.props.onSelectPlace(id);
  };

  onRemovePressed = (id) => {
    this.props.onDeletePlace(id);
  };

  deleteAllHandler = () => {
    this.setState({
      places: []
    }
    )
  };

  onCloseModal = () => {
    this.props.onDeselectPlace();
  }

  makeChoice = () => {
    let size = this.state.places.length;
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
          selectedPlace={this.props.selectedPlace}

        />
        <View style={styles.choice}>
          <Text style={styles.title}> Where should I go ?</Text>
          <Button title="Choose" onPress={this.makeChoice} />

        </View>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} onDeleteAll={this.deleteAllHandler} />
        <List
          items={this.props.places}
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
const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};
const mapDispatchToProps = dispatch => {

  return {
    onPlaceAdded: (name) => dispatch(addPlace(name)),
    onDeletePlace: (key) => dispatch(deletePlace(key)),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);