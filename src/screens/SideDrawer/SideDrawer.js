import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground';
import App from '../../../App';
import Icon from 'react-native-vector-icons/Ionicons'
class SideDrawer extends React.Component {

    logoutHandler() {
        App();
    }

    render() {
        return (
            <View
                style={[
                    styles.container,
                    { width: Dimensions.get("window").width * 0.7 }]}>
                <TouchableOpacity onPress={this.logoutHandler}>
                    <View style={styles.drawerItem}>
                        <Icon style={styles.drawerItemIcon} name="ios-log-out" size={30} color="#aaa" ></Icon>
                        <Text>Sign Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: "white",
        borderColor: 'red',
        flex: 1
    },
    drawerItem :{
        flexDirection: 'row',
        alignItems:'center',
        padding:10,
        backgroundColor:'#eee'
    },
    drawerItemIcon:{
        marginRight: 10,
    }

});


export default SideDrawer;