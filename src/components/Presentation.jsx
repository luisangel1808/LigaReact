import React from 'react'
import '../assets/styles/components/Presentation.scss'
import logo from '../assets/static/logoLiga.jpg'


const Presentation = () =>(
    <section className="presentation">
        <img src={logo} alt="logo"/>
        <div className="presentation__container">
            <h1>Bienvenido al sitio web del ajedrez caucano</h1>
            <p>Aquí encontrarás información importante sobre este deporte en nuestra región</p>
            <a href="" className="presentation__button">Ingresar(Próximamente)</a>
        </div>
    </section>
)

export default Presentation