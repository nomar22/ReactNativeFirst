import React from 'react';
import {
    View,
    Button,
    StyleSheet,
    ScrollView,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';
import MainText from '../../components/UI/MainText';
import HeadingText from '../../components/UI/HeadingText';
import PlaceInput from '../../components/PlaceInput';
import PickImage from '../../components/PickImage';
import PickLocation from '../../components/PickLocation';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground';

class SharePlaceScreen extends React.Component {
    state = {
        placeName: ""
    }

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

    placeAddHandler = () => {
        if (this.state.placeName.trim() !== "") {
            this.props.onPlaceAdd(this.state.placeName);
            this.setState({
                placeName: ""
            })
        }
    }

    placeNameChangeHandler = val => {
        this.setState({
            placeName: val
        });
    }


    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText> Share a Place !</HeadingText>
                    </MainText>
                    <PickImage />
                    <PickLocation />
                    <View style={styles.inputButton}>
                        <View style={styles.input} >
                            <PlaceInput placeName={this.state.placeName} onChangeText={this.placeNameChangeHandler} />
                        </View>
                        <View style={styles.button} >
                            <ButtonWithBackground title="Share" backgroundColor="#29aaf4" onPress={this.placeAddHandler} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    inputButton: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    imagePreview: {
        width: '100%',
        height: '100%'
    },
    button: {
    },
    input:{
        width:'40%',
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