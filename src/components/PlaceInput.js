import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Defaultinput from './UI/Defaultinput';




export default class PlaceInput extends React.Component {
    state = {
        placeName: ""
    }
    placeNameChangedHandler = (event) => {
        this.setState(
            {
                placeName: event
            }
        );
    }
    onPressSend = () => {
        if (this.state.placeName.trim() === "") {
            return;
        } 
        this.props.onPlaceAdded(this.state.placeName);
        this.setState({
            placeName: ""
        }
        );
    }

    render() {
        return (
            <View style={styles.inputContainer}>
                <Defaultinput
                    maxLength={15}
                    placeholder="Insert a cool place"
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangedHandler}
                />
                <Button
                    title="Add"
                    onPress={this.onPressSend} />
                
            </View>
        );
    };

}


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        width: "80%",
        alignItems: 'center',
        paddingBottom: 20,
    }

});



