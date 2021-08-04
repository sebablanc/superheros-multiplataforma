import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Platform } from 'react-native';

function Botonera({onClickedSave, onClickedCancel, onClickedDelete}){
    return(
        <View style={[styles.botoneraContainer, styles.fullGrid]}>
            <TouchableOpacity onClick={onClickedDelete}>
                <Text style={[styles.btn, styles.btnDelete]}>Eliminar</Text>
            </TouchableOpacity>
            <TouchableOpacity onClick={onClickedCancel}>
                <Text style={[styles.btn, styles.btnCancel]}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity type="submit" onClick={onClickedSave}>
                <Text style={[styles.btn, styles.btnSave]}>Guardar</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Botonera;

const styles = StyleSheet.create({
    botoneraContainer: {
        justifyContent: 'space-evenly',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 30
    },
    
    btn: {
        width: 163,
        borderRadius: 20,
        fontSize: 18,
        fontWeight: 700,
        border: 'none',
        boxShadow: '1px 1px 3px 3px grey',
        marginHorizontal: 15,
        color: '#FFFFFF',
        ...Platform.select({
            web:{
                cursor: 'pointer',
            }
        }),
    },
    
    btnSave: {
        backgroundColor: '#026300'
    },

    btnCancel: {
        backgroundColor: '#777777'
    },
    
    btnDelete: {
        backgroundColor: 'red'
    },

    fullGrid: {
        gridColumn: '1 / span 2'
    }
})