import React from 'react';
import {useState} from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

function InputForm({label, valor, type, disabled, extraClass, onChange}) {

    const [value, setValue] = useState(valor ? valor : '');

    function handleTextChange(text) {
        setValue(text);
        onChange(text)
    }

    return (
        <View style={[styles.formData, styles.floatLabel, styles[extraClass]]}>
            <Text style={ styles.Active } htmlFor={label.toLowerCase()}>{label}: </Text>
            <TextInput
                style={styles.input}
                name={label.toLowerCase()}
                defaultValue={value}
                type={type}
                disabled={disabled}
                onBlur={(e) => {handleTextChange(e.target.value)}}/>
        </View>
    );
}

export default InputForm;

const styles = StyleSheet.create({
    floatLabel: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        marginBottom: 10,
    },
    Active: {
        transform: 'translateY(4px) scale(0.75)',
        backgroundColor: 'white',
        width: 'max-content',
        paddingHorizontal: '10px',
        paddingVertical: '5px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px'
    },
    input: {
        height: '26px',
        padding: '10px 16px 0 10px',
        outline: 0,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Arial, Helvetica, sans-serif'
    },
    fullGrid: {
        gridColumn: '1 / span 2'
    }
  });
  