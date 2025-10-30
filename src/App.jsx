import React, { useState, useEffect, use } from 'react';
import logo from '../ui/pokeapi_256.png';
import PokemonClass from '../pokemon.js';
import Pokemon from './components/Pokemon.jsx';
import Console from './components/Console.jsx';
import abilityCallbacks from '../ability_callback.js';

export default function App() {
    const [enemy, setEnemy] = useState(null);
    const [player, setPlayer] = useState(null);
    const [messages, setMessages] = useState([]);
    const log = (msg) => {
        setMessages(prev => [...prev, msg]);
    }
    const useAbility = ((ability) => {
        const msg = abilityCallbacks[ability](player, enemy);
        setPlayer(player);
        setEnemy(enemy);
        log(msg);
    });
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(response => response.json())
            .then(async data => {
                const randomIndex = Math.floor(Math.random() * data.results.length);
                const name = data.results[randomIndex]?.name;
                const enemyPromise = new PokemonClass(name)
                enemyPromise.then((enemyInstance) => {
                    setEnemy(enemyInstance)
                });

                const playerPromise = new PokemonClass('paras')
                playerPromise.then((playerInstance) => {
                    setPlayer(playerInstance)
                });
            });
    }, []);


    return (
        <div className='container'>
            <header className="py-3 mb-4 border-bottom shadow-sm text-white bg-primary">
                <div className="container d-flex align-items-center gap-3">
                    <img src={logo} alt="PokéAPI" height="40" className="d-inline-block img-fluid" style={{ width: 'auto', height: '40px' }} />
                    <h1 className="h3 m-0">The PokeAPI Game</h1>
                </div>
            </header>
            <div className='d-flex flex-row justify-content-around align-items-start mb-4'>
                <Pokemon pokemon={enemy} />
                <Pokemon pokemon={player} />
            </div>
            <button className='btn btn-primary me-2 mb-4' onClick={() => {
                const dam = Math.max(1, player.attack - enemy.defense);
                enemy.setStat('hp', enemy.hp - dam);
                setEnemy(enemy);
                log(`${player.name} attacked ${enemy.name} for ${dam} damage!`);
            }
            }>Attack</button>
            {
                player?.abilities.map(ab => (
                    <button key={ab} className='btn btn-primary me-2 mb-4' onClick={() => useAbility(ab.replace('-', '_'), player, enemy, log)}>Use {ab} Ability</button>
                ))
            }

            {messages && <Console messages={messages} />}
        </div>
    );
}
