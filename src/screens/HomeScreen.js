import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import TaskItem from '../components/TaskItem';

const HomeScreen = (props) => {
    return (
        <View>
            <Text style={styles.estilo1Text}>Teste</Text>
            <Text style={styles.estilo2Text}>Teste 2</Text>
            <Text style={styles.estilo3Text}>Teste 3</Text>
            <Button
                color="black"
                title="Tarefas"
                onPress={() => props.navigation.navigate('Task')}
            />
            <TouchableOpacity onPress={() => props.navigation.navigate('Task')}>
                <Text>Tarefas</Text>
            </TouchableOpacity>
            <Button
                color="red"
                title="Counter"
                onPress={() => props.navigation.navigate('Counter')}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    estilo1Text: {
        fontSize: 30,
        marginTop: 25,
        alignSelf: 'center'
    },
    estilo2Text: {
        color: 'blue',
        marginTop: 50,
        alignSelf: 'flex-end'
    },
    estilo3Text: {
        color: 'red',
        marginTop: 50,
        alignSelf: 'flex-start'
    }
})

export default HomeScreen;
