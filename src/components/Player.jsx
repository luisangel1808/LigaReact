import React from 'react'
import '../assets/styles/components/Player.scss'


const Player = ({picture, name, description}) =>{
    console.log(name)
    return(
    <div className="container-outstanding__1">
        <img src={picture}alt="Deportista destacado"/>
        <h2>{name}</h2>
        <p>{description}</p>
    </div>
    )
}

export default Player