import React from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import TaskItem from '../components/TaskItem';

const TaskScreen = () => {
    const tarefas = [
        { id: '1', description: "Gravar video aula", date: "20/03/2021" },
        { id: '2', description: "Gravar video aula 2", date: "21/03/2021" },
        { id: '3', description: "Gravar video aula 3", date: "22/03/2021" },
        { id: '4', description: "Gravar video aula 4", date: "23/03/2021" },
    ]

    return (
        <FlatList
            style={styles.taskList}
            keyExtractor={(task) => task.id}
            data={tarefas}
            renderItem={(element) => {
                return <TaskItem task={element.item} />
            }}
        />
    )
};

const styles = StyleSheet.create({
    taskList: {
        marginTop: 20
    }
})

export default TaskScreen;
