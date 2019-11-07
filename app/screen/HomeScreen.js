import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    FlatList
} from 'react-native';

import GoalItem from '../component/GoalItem'
import GoalInput from '../component/GoalInput'

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <AppView />
        )
    }
}

const AppView = () => {
    const [courseGoals, setCourseGoals] = useState([]);

    const addGoalHandler = goalTitle => {
        setCourseGoals(currentGoals => [
            ...currentGoals,
            { id: Math.random().toString(), value: goalTitle }
        ]);
    };
    return (
        <View style={styles.container}>
            <GoalInput onAddGoal={addGoalHandler} />
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={courseGoals}
                renderItem={itemData => <GoalItem title={itemData.item.value} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 50
    },
    text: {
        fontSize: 20
    }
})