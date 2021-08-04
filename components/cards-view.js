import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from "react-native";
import methods from '../helpers/http-helper';
import NewHeroButton from '../ui/new-hero-button';

function CardView({ house, changePage, selectPersonaje }){
    const [personajes, setPersonajes] = useState([]);
    const [personajesFiltered, setPersonajesFiltered] = useState([]);

    let logo;
    if(house !== "home"){
        logo = <img src={process.env.PUBLIC_URL + '/imgs/'+house+'-logo.png'}/>
    }

    useEffect(() => {
        try {
            findCharacters();
        } catch (err) {
            console.log(err);
        }
    },[]);

    const findCharacters = async () => {
        try {

            const response = await methods.findCharactersByHouse(house);
            console.log(response);
            const data = response != null && response != undefined ? await response.json() : null;
            if(data && data.exito){
                setPersonajes(data.personajes);
                setPersonajesFiltered(data.personajes);
            } else if (data && data.mensaje){
                return data.mensaje;
            } else {
                return 'error al intentar conectar con la base de datos';
            }
        } catch (err) {
            console.log(err);
        }
    }
    
    return(
        <LinearGradient
            style={styles.page}
            colors={['#000000', '#ed2c23']}
            end={{ x: 2.0, y: 0.0 }}
            >
            {logo}
            <View style={styles.allViews}>
                <NewHeroButton 
                    changePage={ changePage }
                    selectPersonaje={ selectPersonaje }
                    />

                {personajesFiltered.map((item, index) => 
                    <AvatarCard 
                        changePage={ changePage }
                        selectPersonaje={ selectPersonaje }
                        personaje={item}
                        showHouse={house === "home"}
                        />
                )}
            </View>
        </LinearGradient>
    )
}

export default CardView;

const styles = StyleSheet.create({
    page: {
        margin: 0,
        minWidth: '100%',
        minHeight: 'calc(100vh - 70px)',
        padding: '20px',
        textAlign: 'center'
    },
    allViews: {
        display: 'grid',
        gridTemplateColumns: 'repeat(7, max-content)',
        rowGap: '20px',
        columnGap: '20px',
        alignItems: 'center',
        gridTemplateRows: 'max-content'
    }
})