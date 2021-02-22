import React,{ useRef, useContext } from 'react'
import '../assets/styles/containers/addPlayer.scss'
import AppContext from '../context/AppContext'
const addPlayer = () => {  
      const {addToPlayersList, state} = useContext(AppContext);
      const {playersList} = state
      const form = useRef(null);
    
      const handleSubmit = () => {
        const formData = new FormData(form.current);
        const newPlayer = {
          'name': formData.get('name'),
          'club': formData.get('club'),
          'league': formData.get('league'),
          'codFide': formData.get('apto'),
        }
          addToPlayersList(newPlayer);
        

      }
    return (
      <section className="main">
        <form ref={form}>
            <input type="text" placeholder="Ingresa el jugador" name="name" required/>
            <input type="text" placeholder="Ingresa el club" name="club"/>
            <input type="text" placeholder="Ingresa la Liga" name="league"/>
            <input type="number" placeholder="Ingresa el código Fide" name="codFide"/>
        <button type="button" onClick={handleSubmit}>Registrar</button>
        </form>
      </section>
    )
}

export default addPlayer;