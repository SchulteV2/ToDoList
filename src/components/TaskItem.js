import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { List } from 'react-native-paper';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

const TaskItem = (props) => {

    return (
        <List.Item
                title={props.task.date}
                description={props.task.description}
                left={(paperProps) => <FontAwesome {...paperProps} style={styles.icon} name="tasks" size={24} color="black" />}
                right={(paperProps) => 
                    <TouchableOpacity  onPress={() => {props.removeTask(props.task.id)}}>
                        <AntDesign {...paperProps} style={styles.icon} name="closesquare" size={24} color="red" />
                    </TouchableOpacity>
                }
            />
    )
};

const styles = StyleSheet.create({
    icon: {
        marginTop: 17
    }
})

export default TaskItem;
