import React from 'react';
import { 
    View, 
    Button, 
    StyleSheet, 
    ScrollView
 } from 'react-native';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';
import MainText from '../../components/UI/MainText';
import HeadingText from '../../components/UI/HeadingText';
import PlaceInput from '../../components/PlaceInput';
import PickImage from '../../components/PickImage';
import PickLocation from '../../components/PickLocation';

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
                    <PickImage  />
                    <PickLocation  />
                    <PlaceInput  />
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