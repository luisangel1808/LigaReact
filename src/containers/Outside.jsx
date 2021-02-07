import React from 'react';
import Players from '../components/Players';
import Player from '../components/Player';
import players from '../../players.json';
import '../assets/styles/App.scss';

const Outside = () =>  (
             <Players>
                {players.players.map(player =>{
                    return(
                    <Player key={player.name} {...player} />
                    )
                } )}
            </Players >  
    );

export default Outside;