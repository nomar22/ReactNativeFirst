import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListItem from './ListItem';


export default (props) => {
    const itemsOutput = props.items.map((description, i) => (
        <ListItem
            key={i} 
            description={description}
            onItemPressed={() => { props.removeHandler(i) }} />
    )
    );
    return (
        <View style={styles.listContainer}>
            {itemsOutput}
        </View>
    )
}


const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
});