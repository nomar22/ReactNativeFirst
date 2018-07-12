import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import List from '../../components/List';
import { deletePlace } from '../../store/actions/index'

class FindPlaceScreen extends React.Component {
    render() {
        return (
            <View>
                <List
                    items={this.props.places}
                    showItemHandler={() => alert('SHOW')}
                    removeHandler={()=>alert('REMOVER')}
                />

            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPlaceRemoved: () => dispatch(deletePlace())
    }
}

const mapStateToProps = state => {
    return {
        places: state.places.places
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FindPlaceScreen);