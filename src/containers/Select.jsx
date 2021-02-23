import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import {Link} from 'react-router-dom';
const Select = () =>{

    const {state} = useContext(AppContext);
    const {playersList} = state;
    console.log(playersList)
    if(Object.keys(playersList).length>0) { 
        return(
            <>
                {/*<input type="text"/> */}
                <ul>
                    {playersList.map((player, index)=>{     
                        if(Object.keys(playersList).length != 0){  
                            return(
                                <li key={index}> <input id="" type="checkbox"/> {player.name} </li>
                            )}
                    })}
                </ul>
                <button>Crear torneo</button>
            </>
        )
    }
    else return(
        <>
        <h1>No hay jugadores registrados, regístrelos</h1>
        <Link to="/registrarJugador">
            Registrar jugadores
        </Link>
        </>
    )
}

export default Select