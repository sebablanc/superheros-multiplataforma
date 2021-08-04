import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Platform, SafeAreaView } from 'react-native';
import Home from './pages/home/home';
import Header from './components/header';
import NewHero from './pages/new-hero/new-hero';

export default function App() {
  const [page, setPage] = useState('HOME');
  const [personajeSelected, setPersonajeSelected] = useState({nombre: "Batman"});

  const changePage = (pageChanged) => {
    setPage(pageChanged);
  };

  function renderSwitch(){
    switch(page) {
      case 'HOME':
        return(
          <Home selectPersonaje={setPersonajeSelected} changePage={changePage} />
        )
      /*case 'MARVEL':
        return(
          <MarvelCharacters selectPersonaje={setPersonajeSelected} changePage={changePage} />
        )
      case 'DC':
          return(
            <DCCharacters selectPersonaje={setPersonajeSelected} changePage={changePage} />
          )*/
      case 'NEW-HERO':
        return(
          <NewHero
            personajeSelected={personajeSelected}
            changePage={changePage} />
        )
      default:
        return(
          <Home changePage={changePage} />
        )
    }
  }

  //
  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === 'web' ? 
        <Header changePage={changePage}/> :
        <StatusBar 
          animated={true}
          backgroundColor="#61dafb"
          barStyle={'default'}
          showHideTransition='fade'
          hidden={true} />}
      {renderSwitch()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      web: {
        backgroundColor: '#fff',
      },
      native: {
        backgroundColor: '#ECF0F1'
      }
    })
  },
});
