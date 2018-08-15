import React from 'react';
import { 
    View, 
    Text,
    Button, 
    TextInput, 
    StyleSheet, 
    ScrollView,
    Image
 } from 'react-native';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';
import DefaultInput from '../../components/UI/Defaultinput';
import MainText from '../../components/UI/MainText';
import HeadingText from '../../components/UI/HeadingText';
import imagePlaceholder from '../../assets/lisbon.jpg'

class SharePlaceScreen extends React.Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: 'left',
                    animated: true,
                    to: 'open'
                })
            }
        }
    }

    placeAddHandler = placeName => {
        this.props.onPlaceAdd(placeName);
    }


    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText> Share a Place !</HeadingText>
                    </MainText>
                    <View>
                       <Image source={imagePlaceholder} style={styles.previewImage} />
                    </View>
                    <View style={styles.button}>
                        <Button onPress={() => { }} title="Pick Image" />
                    </View>
                    <View style={styles.placeHolder}>
                        <Text>Map</Text>
                    </View>
                    <View style={styles.button}>
                        <Button onPress={() => { }} title="Locate Me" />
                    </View>
                    <DefaultInput placeholder="Place Name" />
                    <View style={styles.button}>
                        <Button onPress={() => { }} title="Share the Place" />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    imagePreview:{
        width:'100%',
        height:'100%'
    },
    button: {
        margin: 8
    },

    placeHolder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 180
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onPlaceAdd: (placeName) => dispatch(addPlace(placeName))
    }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);