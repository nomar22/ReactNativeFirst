import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import Defaultinput from '../../components/UI/Defaultinput'


class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    }

    render() {

        return (
            <View style={styles.container}>
                <Text> Welcome </Text>
                <Button onPress={() => { }} title="Switch to Login " />
                <View style={styles.inputContainer} >
                    <Defaultinput  placeholder="Email" /> 
                    <Defaultinput secureTextEntry={true}  placeholder="Password" />
                    <Defaultinput  secureTextEntry={true} placeholder="Confirm Password" />
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
    }

});


export default AuthScreen;