import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, Platform } from 'react-native';
import logo from '../assets/page-logo.png';

function Header({changePage}){
    const [page, setPage] = useState('HOME');
    return (
        <LinearGradient
            style={styles.appHeader}
            colors={['#ed2c23', '#000000']}
            end={{ x: 1.0, y: 0.0 }}>
            <View style={styles.appHeader}>
                {Platform.OS == 'web' ? 
                    <Image style={styles.headerImg} source={logo} onClick={()=>{changePage('HOME')}}/>: 
                    null}
                <View style={styles.headerLinksContainer}>
                    <Text style={styles.headerLink} onClick={()=>{setPage(''); changePage('HOME')}}>Home</Text>
                    <Text style={styles.headerLink} onClick={()=>{setPage('MARVEL'); changePage('MARVEL')}}>Marvel</Text>
                    <Text style={styles.headerLink} onClick={()=>{setPage('DC'); changePage('DC')}}>DC</Text>
                </View>
            </View>
        </LinearGradient>
    );
}

export default Header;

const styles = StyleSheet.create({
    appHeader: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        maxHeight: '70px'
    },
    headerImg: {
        width: '150px',
        height: '100%',
        ...Platform.select({
            web: {
                cursor: 'pointer'
            }
        })
    },
    headerLinksContainer: {
        flex: 1,
        flexDirection: 'row',
        lineHeight: 70,
        alignSelf: 'center'
    },
    headerLink: {
        marginTop: '0',
        color: '#FFFFFF',
        marginBottom: '0',
        marginLeft: '10px',
        marginRight: '10px',
        fontSize: 25,
        ...Platform.select({
            web: {
                cursor: 'pointer'
            }
        })
    }
  });