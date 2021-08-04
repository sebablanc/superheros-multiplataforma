import React, { useState } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import spiderman from '../../assets/imgs/form/spider-attached.png';
import batman from '../../assets/imgs/form/batman-alert.png'
import {
    useFonts,
    Bangers_400Regular
  } from '@expo-google-fonts/bangers';
import InputForm from '../../ui/input-form';
import CasaSelectForm from '../../ui/select-form';
import { equipamientos } from '../../equipamientos';
import TextAreaForm from '../../ui/textarea-form';
import Botonera from '../../ui/botonera';

function NewHero({personajeSelected, changePage }){
    const [personaje, setPersonaje] = useState(personajeSelected ? personajeSelected.personaje : '');
    const [nombrePersonaje, setNombrePersonaje] = useState(personajeSelected ? personajeSelected.nombrePersonaje :'');
    const [casa, setCasa] = useState(personajeSelected ? personajeSelected.casa : '');
    const [equipamiento, setEquipamiento] = useState(personajeSelected ? personajeSelected.equipamiento : '');
    const [year, setYear] = useState(personajeSelected ? personajeSelected.year : 0);
    const [numeroImagenes, setNumeroImagenes] = useState(personajeSelected ? personajeSelected.imagenes.length : 0);
    const [biografia, setBiografia] = useState(personajeSelected ? personajeSelected.biografia : '');
    const [listImages, setListImages] = useState(personajeSelected ? personajeSelected.imagenes : []);

    const houses = [{value:'dc', houseName: 'DC'}, {value:'marvel', houseName: 'Marvel'}]
    const [fontsLoaded] = useFonts({Bangers_400Regular});

    let equipamientoImage = '';

    const handlePersonajeChange = () => {
        equipamientos.map(eq =>{
            eq.title
            equipamientoImage = personaje != '' && personaje != null
                                && equipamiento != '' && equipamiento != null
                                && eq.title ==  equipamiento.toLowerCase() + '-' + personaje.toLowerCase() 
                                ? eq.img
                                : '';
        })
    }



    return(
        <LinearGradient 
            style={styles.page}
            colors={['#000000', '#ed2c23']}
            end={{ x: 1.0, y: 0.0 }}>
            <View id="addForm" style={styles.agregarSuperheroForm} onSubmit={(e)=> handleSubmit(e)}>
                <Image style={[styles.characterHeroForm, styles.marvelHeroForm]} source={spiderman}/>
                <Image style={[styles.characterHeroForm, styles.dcHeroForm]} source={batman}/>

                <Text
                    style={[styles.newHeroTitle, styles.fullGrid]}>
                    {personaje!= null && personaje.length > 0 ? personaje : "¿A quién tenemos aquí?"}
                </Text>

                <Text>Acá iría el carrousel de imágenes</Text>

                <View style={styles.formGridData}>
                    
                    <InputForm 
                        extraClass="fullGrid"
                        valor={personaje}
                        label="Personaje"
                        type="text"
                        disabled={personajeSelected && personajeSelected.personaje != null}
                        onChange={(event) =>{ setPersonaje(event); handlePersonajeChange()}}/>

                    <InputForm
                        extraClass="fullGrid"
                        label="Nombre del Personaje"
                        type="text"
                        valor={nombrePersonaje}
                        onChange={(event) => setNombrePersonaje(event)}/>

                    {houses.map((item, index) =>
                        <CasaSelectForm
                            id={index}
                            style={styles.casaSelect}
                            valor={casa}
                            item={item}
                            valueName="value"
                            onChange={(event) => setCasa(event)} />
                    )}

                    <InputForm
                        valor={equipamiento}
                        label="Equipamiento"
                        type="text"
                        onChange={(event) => {setEquipamiento(event); handlePersonajeChange()}}/>
                    <Image style={styles.img} source={ equipamientoImage }/>

                    <InputForm
                        valor={year}
                        label="Año"
                        type="number"
                        onChange={(event) => setYear(event)}/>

                    <InputForm
                        valor={numeroImagenes}
                        label="Cantidad de imágenes"
                        type="number"
                        onChange={(event) => setNumeroImagenes(event)}/>

                    <TextAreaForm
                        extraClass="fullGrid"
                        valor={biografia}
                        label="Biografía"
                        onChange={(event) => setBiografia(event)}/>

                    <Botonera
                        onClickedSave={null}
                        onClickedDelete={(event) => HandleDelete(event)}
                        onClickedCancel={(event) => HandleCancel(event)}/>
                </View>
            </View>
        </LinearGradient>
    )
}

export default NewHero;

const styles = StyleSheet.create({
    page: {
        margin: 0,
        minWidth: '100%',
        minHeight: 'calc(100vh - 70px)',
        padding: 20,
        textAlign: 'center'
    },

    agregarSuperheroForm:{
        width: '60%',
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        minHeight: '80vh',
        borderRadius: 10,
        position: 'relative',
        textAlign: 'center',
        padding: 20,
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        columnGap: 30,
        rowGap: 20,
        alignItems: 'center'
    },

    characterHeroForm:{
        position: 'absolute',
        width: '5em',
        height: '5em',
        backgroundPosition: 'center',
        backgroundSize: '100% 100%',
        borderRadius: '50%',
        backgroundColor: '#FFF',
    },

    marvelHeroForm: {
        left: 0,
        top: 0,
    },

    dcHeroForm: {
        right: 0,
        top: 0,
    },

    newHeroTitle: {
        fontFamily: 'Bangers_400Regular',
        fontSize: '80px',
        color: '#d2b104'
    },

    formGridData: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridColumnGap: '20px',
        columnGap: '20px',
        gridRowGap: '20px',
        rowGap: '20px',
        alignItems: 'center',
        gridTemplateRows: 'repeat(7, max-content)'
    },
    img: {
        height: 105
    },
    fullGrid: {
        gridColumn: '1 / span 2'
    }
})