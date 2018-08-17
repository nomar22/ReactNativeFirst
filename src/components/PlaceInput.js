import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import DefaultInput from './UI/DefaultInput';




export default props => (
    <DefaultInput
        value={props.placeName}
        onChangeText={props.onChangeText}
        maxLength={15}
        placeholder="Place Name"
    />
);