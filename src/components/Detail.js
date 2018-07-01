import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

export default (props) => {
    let modalContent = null;

    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace.image}
                animationType="slide"/>
                <Text> {props.selectedPlace.placeName} </Text>
            </View>
        )
    }

    return (
        <Modal style={styles.modalContainer}
            visible={props.selectedPlace !== null}
            onRequestClose={props.closeModal}
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
        margin: 22 ,
        width:'20%'
        
    }
});
