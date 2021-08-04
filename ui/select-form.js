import React from 'react';
import { Image, StyleSheet, Pressable, Platform } from 'react-native';
import dc from '../assets/imgs/dc-logo-completo.png';
import marvel from '../assets/imgs/marvel-logo.svg';

function CasaSelectForm({valor, item, valueName, onChange}){

    return(
        <Pressable
            style={[styles.card, valor==item[valueName] ? styles.Active : null]}
            onPress={()=>{onChange(item[valueName])}}>
            <Image style={styles.img} source={item[valueName] == 'marvel' ? marvel : dc}/>
        </Pressable>
    );
}

export default CasaSelectForm;

const styles = StyleSheet.create({
    card: {
        width: 116,
        padding: 10,
        height: 56,
        backgroundColor: '#FFF',
        justifySelf: 'center',
        ...Platform.select({
            web:{
                cursor: 'pointer',
            }
        })
    },
    Active: {
       backgroundColor: '#3EAB3E'
    },
    img: {
        height: 36,
        width: 96
    }
  });