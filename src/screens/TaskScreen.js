import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import TaskItem from '../components/TaskItem';

const TaskScreen = () => {
    
    let [tarefas, setTarefas] = useState([])
    let [description, setDescription] = useState('')
    
    const removeTask = (id) => {
        let filteredList = tarefas.filter((task) => task.id != id);
        setTarefas(filteredList);
    }
    
    const newTask = () => {
        let id = Math.random();
        let date = new Date();
    
        let day = date.getDay();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        setDescription('')
    
        return { id: `${id}`, description: description, date: `${day}/${month}/${year}` }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.description}
                mode="outlined"
                placeholder="Descrição da Tarefa"
                value={description}
                onChangeText={ (newValue) => setDescription(newValue) }
            />
            <Button mode="contained" style={styles.taskBtn} onPress={() => setTarefas([...tarefas, newTask()])}>
                Cadastrar Tarefa
            </Button>
            <FlatList
                style={styles.taskList}
                keyExtractor={(task) => task.id}
                data={tarefas}
                renderItem={(element) => {
                    return <TaskItem task={element.item} removeTask={ removeTask } />
                }}
            />
        </View>
    )
};



const styles = StyleSheet.create({
    container: {
        width: '96%',
        marginLeft: '2%',
        marginRight: '2%',
    },
    description: {
        marginTop: 20
    },
    taskList: {
        marginTop: 20
    },
    taskBtn: {
        marginTop: 10,
    },
})

export default TaskScreen;
