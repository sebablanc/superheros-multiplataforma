import React from 'react';
import { View, Image, StyleSheet, Platform } from 'react-native';
import newHero from '../assets/add-hero.jpg';

function NewHeroButton({ selectPersonaje, changePage}){
    return (
        <View style={[styles.card, styles.newHeroButton]}>
            <Image style={styles.imgHero} source={newHero} onClick={() =>{ selectPersonaje(null); changePage('NEW-HERO')}}/>
        </View>
    );
}

export default NewHeroButton;

const styles = StyleSheet.create({
    card: {
        width: 200,
        backgroundColor: 'white',
        height: 300,
        borderRadius: 10,
        margin: 10,
        padding: 10
    },
    newHeroButton: {
        display: 'inline-grid',
        boxShadow: 'none',
        transition: 'all 0.5s ease-in-out',
        ...Platform.select({
            web:{
                cursor: 'pointer',
            }
        })
    },
    imgHero: {
        width: '100%',
        height: '100%'
    }
})