import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
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
        <View>
            <TextInput
                placeholder="Descrição da Tarefa"
                value={description}
                onChangeText={ (newValue) => setDescription(newValue) }
            />
            <TouchableOpacity style={styles.taskBtn} onPress={() => {
                setTarefas([...tarefas, newTask()])
            }}>
                <Text>Cadastrar Tarefa</Text>
            </TouchableOpacity>
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
