import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';



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
                <TextInput
                    maxLength={15}
                    placeholder="Insert a cool place"
                    value={this.state.placeName}
                    style={styles.placeInput}
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
        width: "100%",
        alignItems: 'center',
        paddingBottom: 20,
    },
    placeInput: {
        width: '50%'
    }

});



