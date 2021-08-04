import React from 'react';
import CardsView from '../../components/cards-view';

function Home({ selectPersonaje, changePage }){
  
    return (
        <CardsView
            selectPersonaje={ selectPersonaje }
            changePage={ changePage }
            house="home"
            />
    );
}

export default Home;