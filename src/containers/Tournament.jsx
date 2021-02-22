import React from 'react'
import RoundRobin from '../components/RoundRobin'
import TournamentClasification from '../components/TournamentClasification'
import '../assets/styles/containers/Tournament.scss'

const Tournament = ()=>(
    <div className="tourney">
        <RoundRobin/>
       <TournamentClasification/> 
    </div>
)

export default Tournament