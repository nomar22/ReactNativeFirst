import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
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
        <ScrollView style={styles.listContainer}>
            {itemsOutput}
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
});