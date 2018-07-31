import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import Defaultinput from '../../components/UI/Defaultinput'
import HeadingText from '../../components/UI/HeadingText';


class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    }

    render() {

        return (
            <View style={styles.container}>
                <HeadingText> Welcome </HeadingText>
                <Button onPress={() => { }} title="Switch to Login " />
                <View style={styles.inputContainer} >
                    <Defaultinput  placeholder="Email" style={styles.input} /> 
                    <Defaultinput secureTextEntry={true}  style={styles.input} placeholder="Password" />
                    <Defaultinput  secureTextEntry={true}  style={styles.input} placeholder="Confirm Password" />
                </View>
                <Button onPress={() => { }} title="Login" onPress={this.loginHandler} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: "80%"
    },
    input:{
        backgroundColor:"#eee",
        borderColor:"#bbb"

    }

});


export default AuthScreen;