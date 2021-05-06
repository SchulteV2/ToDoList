import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import TaskItem from '../components/TaskItem';

import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyD20zO5vAWTXX0Jgqfq84rpx5GJVt4UPb8",
    authDomain: "todolist-766e4.firebaseapp.com",
    projectId: "todolist-766e4",
    storageBucket: "todolist-766e4.appspot.com",
    messagingSenderId: "491965912404",
    appId: "1:491965912404:web:44866f280a382420fb64c1",
    measurementId: "G-YTBX147P3V"
  };

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()


const TaskScreen = () => {
    
    let [tarefas, setTarefas] = useState([])
    let [description, setDescription] = useState('')

    getTasks()
    
    const removeTask = (id) => {
        db.collection('tasks').doc(id).delete()
        getTasks()
    }
    
    async function getTasks() {
        const tasksRef = db.collection('tasks')
        const snapshot = await tasksRef.get()
    
        let tasks = snapshot.docs.map(doc => {
            return task = {id: doc.id, ...doc.data()}
        })

        setTarefas(tasks)
    }

    async function newTask() {
        let date = new Date();
        let day = date.getDay();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let formattedDate = `${day}/${month}/${year}`
        
        setDescription('')

        const res = await db.collection("tasks").add({
            date: formattedDate,
            description: description
        })
        
        return { id: res.id, description: description, date: formattedDate }
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
