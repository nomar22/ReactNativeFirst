import React from 'react';
import { View, TextInput,Button, StyleSheet } from 'react-native';


export default class PlaceInput extends React.Component {
    state = {
        placeName:""
      }
      placeNameChangedHandler = (event)=>{
        this.setState(
            {
                placeName:event,
            }
        );
    }
    onPressSend = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }
        this.props.onPlaceAdded(this.state.placeName);
    }

    onPressDeleteAll = ()=>{
        this.props.onDeleteAll();
    }

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Insert a cool place"
                    value={this.state.placeName}
                    style={styles.placeInput}
                    onChangeText={this.placeNameChangedHandler}
                />
                <Button
                    style={styles.placeButton}
                    title="Send"
                    onPress={this.onPressSend} />
                  <Button
                    // buttonStyle={styles.deleteButton}
                    color="#841584"
                    title="Delete All"
                    onPress={this.onPressDeleteAll} />
            </View>
        );
    }

}


const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    placeInput: {
        width: '50%'
    },
    placeButton: {
        // width: '20%'
    },
    // deleteButton: {
    //     // width: '20%',
    //     backgroundColor: "rgba(92, 99,216, 1)"
    // },
});



