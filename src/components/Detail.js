import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

export default (props) => {
    let modalContent = null;

    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image}
                    animationType="slide" />
                <Text style={styles.placeName}> {props.selectedPlace.placeName} </Text>
            </View>
        )
    }

    return (
        <Modal style={styles.modalContainer}
            visible={props.selectedPlace !== null}
            onRequestClose={props.closeModal}
            animationType="fade"
            transparent={true}
        >
            <View style={styles.modalContainer}>
                {modalContent}
                <View> 
                    <Button title="OK" onPress={props.closeModal} />
                </View>
            </View>
        </Modal>
    );

};

const styles = StyleSheet.create({
    modalContainer: {
        top:"20%",
        left:"10%",
        // alignItems: 'center',
        width: 300,
        height: 250,
        backgroundColor: '#fff'
    },
    placeName: { 
        fontWeight: "bold",
        textAlign: "center", 
        fontSize: 28
    }
});
