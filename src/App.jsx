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
    const [gamestate, setGamestate] = useState('');
    const [cooldown, setCooldown] = useState(false);
    const log = (msg) => {
        console.log(msg);
        setMessages(prev => [msg, ...prev]);
    }
    const useAbility = ((ability) => {
        setCooldown(true);
        setTimeout(() => setCooldown(false), 3000 - (player.speed * 20));
        const msg = abilityCallbacks[ability](player, enemy);
        setPlayer(player);
        setEnemy(enemy);
        log(msg);
    });
    const getEnemy = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(response => response.json())
            .then(async data => {
                const randomIndex = Math.floor(Math.random() * data.results.length);
                const name = data.results[randomIndex]?.name;
                const enemyPromise = new PokemonClass(name)
                enemyPromise.then((enemyInstance) => {
                    setEnemy(enemyInstance);
                });

            });
    }
    const timer = () => {
        log(`${enemy?.name} is ready to fight!`);
        console.log(`${enemy?.name} is ready to fight!`);
    }
    useEffect(() => {
        getEnemy();
        const playerPromise = new PokemonClass('pikachu')
        playerPromise.then((playerInstance) => {
            setPlayer(playerInstance)
        });
        const id = setInterval(timer, 1000);
        return () => clearInterval(id);
    }, []);
    const playerAttack = () => {
        const dam = Math.max(1, player.attack - enemy.defense);
        setCooldown(true);
        setTimeout(() => setCooldown(false), 3000 - (player.speed * 20));
        enemy.setStat('hp', enemy.hp - dam);
        setEnemy(enemy);
        log(`${player.name} attacked ${enemy.name} for ${dam} damage!`);
        if (enemy.hp <= 0) {
            log(`${enemy.name} has fainted! ${player.name} wins!`);
            setGamestate('won');
        }
    }
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
            {!gamestate && (
                <button className='btn btn-primary me-2 mb-4' onClick={() => playerAttack()}
                    disabled={cooldown}
                >Attack</button>
            )}
            {!gamestate && player?.abilities.map(ability => (
                <button key={ability} disabled={cooldown} className='btn btn-primary me-2 mb-4' onClick={() => useAbility(ability.replace('-', '_'), player, enemy)} >Use {ability} Ability</button>
            ))
            }
            {gamestate && (
                <>
                    <h2>You win!</h2>
                    <button className='btn btn-primary me-2 mb-4' onClick={() => {
                        setGamestate('');
                        const playerPromise = new PokemonClass(enemy.name)
                        getEnemy();
                        playerPromise.then((playerInstance) => {
                            setPlayer(playerInstance)
                        });
                    }}
                    >Capture {enemy.name}</button>

                    <button className='btn btn-primary me-2 mb-4' onClick={() => {
                        setGamestate('');
                        const playerPromise = new PokemonClass(player.name)
                        getEnemy();
                        playerPromise.then((playerInstance) => {
                            setPlayer(playerInstance)
                        });
                    }}>Continue with {player.name}</button>

                </>
            )}

            {messages && <Console messages={messages} />}

        </div>
    );
}
