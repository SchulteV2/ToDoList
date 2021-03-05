import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TaskItem = (props) => {

    return (
        <View style={styles.container}>
            <Image style={styles.imageColumn} source={ require('../../assets/task.png') } />
            <Text style={styles.descColumn}>{props.task.description}</Text>
            <Text style={styles.dateColumn}>{props.task.date}</Text>
            <TouchableOpacity style={styles.removeColumn} onPress={() => {
                props.removeTask(props.task.id)
            }}>
                <Text style={{color: '#FFFFFF'}}>X</Text>
            </TouchableOpacity>
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
        width: '25%'
    },
    removeColumn: {
        // width: '5%',
        alignItems: 'center',
        backgroundColor: '#FF0000'
    }
})

export default TaskItem;
