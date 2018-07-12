import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import List from '../../components/List';
import { deletePlace } from '../../store/actions/index';
import { deleteAll } from '../../store/actions/places';

class FindPlaceScreen extends React.Component {
    isNotEmpty = () => this.props.places.length > 0

    render() {
        return (
            <View >
               { this.isNotEmpty()?(
                <Button 
                    title="Remove All" 
                    color="#841584"
                    onPress={this.props.onDeleteAll} />)
                    :(null)
                }
                
                <List
                    items={this.props.places}
                    showItemHandler={(id) => alert(id)}
                    removeHandler={(id) => this.props.onPlaceRemoved(id)}
                />  

            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPlaceRemoved: (key) => dispatch(deletePlace(key)),
        onDeleteAll: () => dispatch(deleteAll())
    }
}

const mapStateToProps = state => {
    return {
        places: state.places.places
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FindPlaceScreen);