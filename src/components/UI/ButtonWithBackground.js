import React from 'react';
import {TouchableOpacity,Text, View, StyleSheet} from 'react-native';
export default  (props)=>(
    <TouchableOpacity onPress={props.onPress} > 
        <View style={[styles.button, {backgroundColor:props.backgroundColor}]}>
            <Text>{props.title}</Text> 
        </View>
    </TouchableOpacity> 
);

const styles = StyleSheet.create({
    button:{ 
        padding: 10,
        margin:5,
        borderRadius:5,
        borderWidth:1
    }
}); 