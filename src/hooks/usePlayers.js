import {useState, useEffect } from 'react';

const usePlayers = (url, player) =>{
    const [players, setPlayers] = useState({});

    useEffect(()=>{
                fetch(`${url}${player}`)
                    .then(response => response.json())
                    .then(data => {
                       setPlayers(data)
                    });
    }, [url]);
return players
    
};

export default usePlayers
