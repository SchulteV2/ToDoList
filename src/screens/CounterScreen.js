import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';


const CounterScreen = (props) => {

    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.container}>
            <Button mode="contained" style={styles.btn} onPress={() => { setCounter(counter + 1) }}>
                Acrescentar
            </Button>
            <Button mode="contained" style={styles.btn} onPress={() => { setCounter(counter - 1) }}>
                Diminuir
            </Button>
            <Text style={styles.contador}>{counter}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    btn: {
        marginTop: 10,
        alignItems: 'center',
        padding: 10
    },
    contador: {
        marginTop: 30,
        fontSize: 50,
        textAlign: 'center'
    },
    container: {
        margin: 10
    }
})

export default CounterScreen;
