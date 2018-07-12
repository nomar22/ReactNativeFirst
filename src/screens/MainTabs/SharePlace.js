import React from 'react';
import { View } from 'react-native';
import PlaceInput from '../../components/PlaceInput';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index'

class SharePlaceScreen extends React.Component {
    placeAddHandler = placeName =>{
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

export default connect(null,mapDispatchToProps)(SharePlaceScreen);