import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem';


export default (props) => {

    return (
        <FlatList
            style={styles.listContainer}
            data={props.items}
            renderItem={({ item }) => (
                <ListItem
                    description={item.name}
                    placeImage={item.img}
                    onItemPressed={() => {props.removeHandler(item.key)}} />
            )}

        />
    )
}


const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
});