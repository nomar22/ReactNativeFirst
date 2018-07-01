import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';

export default (props) => (
    <TouchableOpacity onPress={props.onItemPressed}  >
        <View style={styles.listItem}  >
            <Image style={styles.placeImage} source={props.placeImage} />
            <Text> {props.description} </Text>
            <Button
                color="#841584"
                title="Delete"
                onPress={props.onDelete} />
        </View>
    </TouchableOpacity>
)




const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        backgroundColor: '#c9d5e8',
        marginBottom: 5,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },

    placeImage: {
        marginRight: 8,
        height: 30,
        width: 30
    }
});