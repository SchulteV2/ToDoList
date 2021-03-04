import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TaskItem from '../components/TaskItem';

const TaskScreen = () => {
    
    let [tarefas, setTarefas] = useState([])

    return (
        <View>
            <TouchableOpacity style={styles.taskBtn} onPress={() => {
                setTarefas([...tarefas, newTask()])
            }}>
                <Text>Gerar Tarefa</Text>
            </TouchableOpacity>
            <FlatList
                style={styles.taskList}
                keyExtractor={(task) => task.id}
                data={tarefas}
                renderItem={(element) => {
                    return <TaskItem task={element.item} />
                }}
            />
        </View>
    )
};

const newTask = () => {
    let id = Math.random();
    let date = new Date();
    
    let day = date.getDay();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return { id: `${id}`, description: `Tarefa #${id}`, date: `${day}/${month}/${year}` }
}

const styles = StyleSheet.create({
    taskList: {
        marginTop: 20
    },
    taskBtn: {
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    }
})

export default TaskScreen;
