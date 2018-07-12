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
                    description={item.placeName}
                    placeImage={item.image}
                    onItemPressed={() => {props.showItemHandler(item.key)}} 
                    onDelete ={()=>{props.removeHandler(item.key)}}/>
            )}

        />
    )
}


const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
});