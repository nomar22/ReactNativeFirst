import React from 'react';
import {View, Text} from 'react-native';
import {connect } from 'react-redux';
import PlaceList from '../../components/List';

class FindPlaceScreen extends React.Component {
    render (){
        return (
            <View> 
                <Text> SOMETHING</Text>

                {/* <PlaceList places={this.props.places} /> */}
                <PlaceList places={[{ key: Math.random().toString(),
                        placeName:"new",},{ key: Math.random().toString(),
                            placeName: "another"}] }/>
            </View>
        );
    }
}

const mapStateToProps= state =>{
    return {
        places: state.places.places
    }
}
export default connect(mapStateToProps)(FindPlaceScreen);