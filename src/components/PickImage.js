import React from 'react';
import {View, Button, Image, StyleSheet } from 'react-native';
import imagePlaceholder from '../assets/lisbon.jpg';


class PickImage extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.placeHolder} >
                    <Image source={imagePlaceholder} style={styles.previewImage} />
                </View>
                <View style={styles.button}>
                    <Button onPress={() => { }} title="Pick Image" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
 
    container:{
        width:'100%',
        alignItems: 'center',
    },
    placeHolder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        height: 180
    },
    imagePreview:{
        flex:1,
        alignItems:'center' 
    },
    button: {
        margin: 8
    }
});


export default PickImage