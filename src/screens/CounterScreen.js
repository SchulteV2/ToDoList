import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const CounterScreen = (props) => {

    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.acrescBtn} onPress={() => { setCounter(counter + 1) }}>
                <Text>Acrescentar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dimBtn} onPress={() => { setCounter(counter - 1) }}>
                <Text>Diminuir</Text>
            </TouchableOpacity>

            <Text style={styles.contador}>{counter}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    acrescBtn: {
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    dimBtn: {
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
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
