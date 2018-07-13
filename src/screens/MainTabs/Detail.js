import React from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';

export default (props) => {
    console.log(props)
    return (<View>
        <View>
            <Image source={props.selectedPlace.image}
                animationType="slide" />
            <Text style={styles.placeName}> {props.selectedPlace.placeName} </Text>
        </View> 
    </View>)

}


const styles = StyleSheet.create({
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    }
});
