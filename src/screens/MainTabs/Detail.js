import React from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';

export default (props) => {
    return (<View>
        <View>
            <Image source={props.selectedPlace.image}
                animationType="slide" />
            <Text style={styles.placeName}> {props.selectedPlace.placeName} </Text>
            <Button
                title="Back"
                onPress={()=>props.navigator.pop({ 
                    animated: true, // does the pop have transition animation or does it happen immediately (optional)
                    animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
                  })} />
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
