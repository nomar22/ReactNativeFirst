import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
export default (props) => (
    <TouchableOpacity onPress={props.onItemPressed}  >
        <View style={styles.listItem}  >
            <Image style={styles.placeImage} source={props.placeImage} />
            <Text> {props.description} </Text>

            
            <TouchableOpacity onPress={props.onDelete}  >
                <Icon color="#841584"  size={30} name={Platform.OS==='android'?"md-trash":"ios-trash"} /> 
            </TouchableOpacity>
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

    trash :{

    },
    placeImage: {
        marginRight: 8,
        height: 30,
        width: 30
    }
});