import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logoLiga.jpg'
const Header = () =>(
    <header>  
        <nav>
            <ul className="menu">
                <Link to="/">
                    <li className="logo"> <img src={logo} alt="Liga Caucana de Ajedrez" className="logo"/> </li>
                </Link>            
                <Link to="/">
                    <li className="item button">Inicio</li>
                </Link>
                <Link to="/videos">
                    <li className="item button">Videos</li>
                </Link>  
                <Link to="jugadores">
                    <li className="item button">Jugadores</li>
                </Link> 
                <Link to="/clasificacion">
                    <li className="item button">Clasificación</li>
                </Link>  
                <Link to="/lichess">
                    <li className="item button">Datos Lichess</li>
                </Link>   
                <Link to="/nuevoTorneo">
                    <li className="item button">Crear torneo</li>
                </Link>   
                <li className="toggle"><i className="fas fa-bars"></i></li>
            </ul>        
        </nav>
    </header>   
    )

export default Header