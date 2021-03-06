import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';
import startMainTabs from '../MainTabs/startMainTabs';
import Defaultinput from '../../components/UI/DefaultInput'
import HeadingText from '../../components/UI/HeadingText';
import MainText from '../../components/UI/MainText';
import backgroundImage from '../../assets/background.jpg';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground';


class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    }

    render() {

        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText> Awesome Places </HeadingText>
                    </MainText>
                    <View style={styles.inputContainer} >
                        <Defaultinput placeholder="Email" style={styles.input} />
                        <Defaultinput secureTextEntry={true} style={styles.input} placeholder="Password" />
                        <Defaultinput secureTextEntry={true} style={styles.input} placeholder="Confirm Password" />
                    </View>
                    <ButtonWithBackground backgroundColor='#29aaf4'  title="Login" onPress={this.loginHandler} />

                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex:1,
        width: '100%'
    }, 
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"

    }

});


export default AuthScreen;