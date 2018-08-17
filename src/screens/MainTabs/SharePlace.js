import React from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Platform
} from 'react-native';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index';
import MainText from '../../components/UI/MainText';
import HeadingText from '../../components/UI/HeadingText';
import PlaceInput from '../../components/PlaceInput';
import PickImage from '../../components/PickImage';
import PickLocation from '../../components/PickLocation';
import Icon from 'react-native-vector-icons/Ionicons';


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
                    <View style={styles.title}>
                        <MainText > 
                            <HeadingText> Share a Place !</HeadingText>
                        </MainText>
                    </View>
                    <PickImage />
                    <PickLocation />
                    <View style={styles.inputButton}>
                        <View style={styles.input} >
                            <PlaceInput placeName={this.state.placeName} onChangeText={this.placeNameChangeHandler} />
                        </View>
                        <View>
                            <TouchableOpacity onPress={this.placeAddHandler}  >
                                <Icon color="#29aaf4" size={50} name={Platform.OS === 'android' ? "md-add-circle" : "ios-add-circle"} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
    },
    inputButton: {
        width: '80%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    imagePreview: {
        width: '100%',
        height: '100%'
    },
    button: {
    },
    input: {
        width: '70%',
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