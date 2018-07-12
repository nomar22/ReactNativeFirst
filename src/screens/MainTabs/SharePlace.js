import React from 'react';
import { View, Text } from 'react-native';
import PlaceInput from '../../components/PlaceInput';
import { connect } from 'react-redux';
import { addPlace } from '../../store/actions/index'

class SharePlaceScreen extends React.Component {
    placeAddHandler = placeName =>{
        alert('ok')
        this.props.onPlaceAdd(placeName);
    }
    render() { 
        return (
            <View>
                <PlaceInput onPlaceAdd={this.placeAddHandler} />
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