import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

function TextAreaForm({label, valor, extraClass, onChange}) {

    const [value, setValue] = useState(valor ? valor : '');
    const [isActive, setIsActive] = useState(false);
    const textArea = React.createRef()

    useEffect(()=>{
        textAreaAdjust();
    }, [])

    function handleTextChange(text) {
      setValue(text);
      setIsActive(text !== '');
      onChange(text)
    }

    function textAreaAdjust() {
        console.log(textArea);
        if(textArea != null){
            textArea.current.style.height = "1px";
            textArea.current.style.height = (25+textArea.current.scrollHeight)+"px";
        }
      }

    return (
        <View style={[styles.formData, styles.floatLabel, styles[extraClass]]}>
            <Text style={ styles.Active } htmlFor={label.toLowerCase()}>{label}: </Text>
            <TextInput
                ref={textArea}
                style={styles.input}
                multiline
                onChange={(e) => {textAreaAdjust(); handleTextChange(e.target.value)}}   />
        </View>
    );
}

export default TextAreaForm;

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