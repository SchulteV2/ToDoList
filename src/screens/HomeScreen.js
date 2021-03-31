import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';


const HomeScreen = (props) => {
    return (
        <View>
            <Text style={styles.estilo1Text}>Teste</Text>
            <Text style={styles.estilo2Text}>Teste 2</Text>
            <Text style={styles.estilo3Text}>Teste 3</Text>
            <Button mode="contained" style={styles.btn} onPress={() => props.navigation.navigate('Task')}>
                Tarefas
            </Button>
            <Button mode="contained" style={styles.btn} onPress={() => props.navigation.navigate('Counter')}>
                Contador
            </Button>
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
    },
    btn: {
        marginTop: 10
    }
})

export default HomeScreen;
