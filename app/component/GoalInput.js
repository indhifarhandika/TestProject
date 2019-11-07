import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Input here"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
        style={{ color: 'white' }}
      />
      <TouchableOpacity onPress={props.onAddGoal.bind(this, enteredGoal)}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: '#00e5ff',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  }
});

export default GoalInput;
