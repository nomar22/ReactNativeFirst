import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
class SideDrawer extends React.Component{
    render(){
        return (
            <View>
                <Text style={styles.sideDrawer} >SIDE Drawer</Text>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    sideDrawer: {
        color:"#ff9900",
        backgroundColor:"#551A8B"
    }

});


export default SideDrawer;