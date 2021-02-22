import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

const Select = () =>{

    const {state} = useContext(AppContext);
    const {playersList} = state;
    return(
        <div>
            <input type="text"/>
            <ul>
                {playersList.map((player, index)=>{     
                    if(Object.keys(playersList).length != 0){  
                        return(
                            <li key={index}>{player.name}</li>
                        )}
                })}
            </ul>
            <button></button>
        </div>
        

    )
}

export default Select