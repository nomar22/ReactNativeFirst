import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import DefaultInput from './UI/DefaultInput';




export default class PlaceInput extends React.Component {
    state = {
        placeName: ""
    };
    placeNameChangedHandler = (event) => {
        this.setState(
            {
                placeName: event
            }
        );
    }


    render() {
        return (
           <DefaultInput
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangedHandler}
                    maxLength={15}
                    placeholder="Place Name"
                />
        );
    };

}