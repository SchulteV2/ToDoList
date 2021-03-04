import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const TaskItem = (props) => {

    return (
        <View style={styles.container}>
            <Image style={styles.imageColumn} source={ require('../../assets/task.png') } />
            <Text style={styles.descColumn}>{props.task.description}</Text>
            <Text style={styles.dateColumn}>{props.task.date}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        marginTop: 20
    },
    imageColumn: {
        width: '10%',
        resizeMode: 'contain'
    },
    descColumn: {
        width: '60%'
    },
    dateColumn: {
        width: '30%'
    }
})

export default TaskItem;
