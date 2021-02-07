import React from 'react'
import '../assets/styles/components/Players.scss'

const Players =({children})=>(
    <section className="content">
        <h1 className="title-outstanding">Jugadores destacados</h1>
        <div className="container-outstanding">
            {children}
        </div>
    </section>
)

export default Players