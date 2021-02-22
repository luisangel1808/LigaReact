import React from 'react'
import usePlayers from'../hooks/usePlayers'
import '../assets/styles/components/LichessTable.scss'

const API = 'https://lichess.org/api/user/';

const LichessTable = () => {
    const playersLichess = ['luisangel1808', 'matesote', 'jorgetobar01', 'cracklos', 'lolamento123', 'pedropalta', 'garcia1108', 'lllkakarotolll', 'jjbolanos', 'zaito0630', 'lscardona']
    const playerObject = playersLichess.map( playerL => usePlayers(API,playerL) )
    return (
        <main>
            <table className="tableLichess">
            <thead>
                <tr>
                    <th>Usuario</th>
                    <th> </th>
                    <th>Nombre</th>
                    <th>Blitz</th>
                    <th>Bala</th>
                    <th>Partidas</th>
                </tr>
            </thead>
            <tbody>
            {playerObject.map((player)=>{     
                if(Object.keys(player).length != 0){  
                    return(
                        <tr key={player.id}>
                            <td><a href={`https://lichess.org/@/${player.username}`} target="_blank">{player.username}</a></td>
                            <td><div className={`online-${player.online}`}></div></td>
                            <td>{`${player.profile.firstName||""} ${player.profile.lastName||""}`}</td>
                            <td>{player.perfs.blitz.rating}</td>
                            <td>{player.perfs.bullet.rating}</td>
                            <td><a href={`https://lichess.org/api/games/user/${player.username}`}>Partidas</a></td>
                        </tr>
                    )}
                })}
            </tbody>
            </table>
        </main>
    )
}

export default  LichessTable
