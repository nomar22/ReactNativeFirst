import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import List from '../../components/List';
import { deletePlace } from '../../store/actions/index';
import { deleteAll,makeChoice } from '../../store/actions/places';

class FindPlaceScreen extends React.Component {
    itemSelectHandler = id => {
        const place = this.props.places.find(({ key }) => key === id);
        this.props.navigator.push({
            screen: 'awesome-places.DetailScreen',
            passProps: {
                selectedPlace: place
            },
            title: place.placeName, 
            animated: true,
            backButtonTitle: 'Back'

        });
    }

    onChoiceForMe = () => {
        this.props.onMakeChoice();
        if(this.props.selectedPlace){
            this.itemSelectHandler(this.props.selectedPlace.key);
        }
    }


    render() {
        return (
            <View>
                <Button
                    title="Choice for me"
                    onPress={this.onChoiceForMe} />
                <Button
                    title="Delete All"
                    color="#841584"
                    onPress={this.props.onPressDeleteAll} />


                <List
                    items={this.props.places}
                    showItemHandler={(id) => this.itemSelectHandler(id)}
                    removeHandler={(id) => this.props.onPlaceRemoved(id)}
                />

            </View>
        );
    } 
}

const mapDispatchToProps = dispatch => {
    return {
        onPlaceRemoved: (key) => dispatch(deletePlace(key)),
        onPressDeleteAll: () => dispatch(deleteAll()),
        onMakeChoice : ()=> dispatch(makeChoice())
    }
}

const mapStateToProps = state => {
    return {
        places: state.places.places,
        selectedPlace: state.places.selectedPlace
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FindPlaceScreen);