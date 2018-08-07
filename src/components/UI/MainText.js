import React from 'react';
import { Text, StyleSheet } from 'react-native'


export default props => (
    <Text style={styles.mainText}> {props.children}</Text>
);

const styles = StyleSheet.create({
    mainText: {
        color: "black",
        backgroundColor:'transparent'
    }
});