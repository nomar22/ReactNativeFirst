import React from 'react';
import { View } from 'react-native';
import PlaceInput from '../../components/PlaceInput';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index'

class SharePlaceScreen extends React.Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (event.type === "NavBarButtonPress") {
            if (event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side:'left',
                    animated:true,
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
            <View>
                <PlaceInput onPlaceAdded={this.placeAddHandler} />
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPlaceAdd: (placeName) => dispatch(addPlace(placeName))
    }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);