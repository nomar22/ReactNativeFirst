import React from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';
import MainText from '../../components/UI/MainText';
import HeadingText from '../../components/UI/HeadingText';

export default (props) => {
    return (<View style={styles.container}>
        <MainText style={styles.placeName}>
            <HeadingText>
                 {props.selectedPlace.placeName}
            </HeadingText>
        </MainText>
        <Image source={props.selectedPlace.image} style={styles.image}
            animationType="slide" />
        <Button
            title="Back"
            onPress={() => props.navigator.pop({
                animated: true, // does the  pop have transition animation or does it happen immediately (optional)
                animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
            })} />
    </View>
    )

}


const styles = StyleSheet.create({
    image:{
        margin: 5,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    }
});
