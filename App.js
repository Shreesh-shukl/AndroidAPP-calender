import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (e) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.inputText}>{input}</Text>
      <Text style={styles.resultText}>{result}</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <TouchableOpacity onPress={clearInput} style={styles.button}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleInput('/')} style={styles.button}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleInput('*')} style={styles.button}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleInput('-')} style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleInput('7')} style={styles.button}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleInput('8')} style={styles.button}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleInput('9')} style={styles.button}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleInput('+')} style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleInput('4')} style={styles.button}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleInput('5')} style={styles.button}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleInput('6')} style={styles.button}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={calculateResult} style={styles.button}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => handleInput('1')} style={styles.button}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleInput('2')} style={styles.button}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleInput('3')} style={styles.button}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleInput('0')} style={styles.button}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  inputText: {
    fontSize: 30,
    color: '#000',
    textAlign: 'right',
    paddingRight: 20,
    paddingBottom: 10,
  },
  resultText: {
    fontSize: 40,
    color: '#007AFF',
    textAlign: 'right',
    paddingRight: 20,
    paddingBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});