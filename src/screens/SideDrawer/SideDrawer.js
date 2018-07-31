import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
class SideDrawer extends React.Component {
    render() {
        return (
            <View style={[styles.container, { width: Dimensions.get("window").width * 0.8 }]}>
                <View >
                    <Text>Menu</Text>
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