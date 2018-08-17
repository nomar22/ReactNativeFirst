import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground';
import App from '../../../App';
class SideDrawer extends React.Component {

    logoutHandler () {
        App(); 
    }

    render() {
        return (
            <View style={[styles.container, { width: Dimensions.get("window").width * 0.7 }]}>
                <View >
                    <Text>Menu</Text> 
                    <ButtonWithBackground title="Logout" onPress={this.logoutHandler} > </ButtonWithBackground>
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {  
        paddingTop: 22,
        backgroundColor: "white",
        borderColor: 'red',
        alignItems: 'center',
        flex: 1
    }

});


export default SideDrawer;