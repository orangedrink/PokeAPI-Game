import React, { useState, useEffect } from 'react';
import logo from '../ui/pokeapi_256.png';
import PokemonClass from '../pokemon.js';
import Pokemon from './components/Pokemon.jsx';
import Console from './components/Console.jsx';
import abilityCallbacks from '../ability_callback.js';

export default function App() {
    const [enemy, setEnemy] = useState(null);
    const [player, setPlayer] = useState(null);
    const [messages, setMessages] = useState([]);
    const [cooldownRemaining, setCooldownRemaining] = useState(0);
    const [gamestate, setGamestate] = useState('');
    const log = (msg) => {
        setMessages(prev => [msg, ...prev]);
    }
    const calculateCooldownDuration = (speed) => {
        const maxCooldown = 5000; // 5 seconds for very slow Pokémon
        const minCooldown = 1500; // 1.5 seconds for the quickest Pokémon
        if (!Number.isFinite(speed) || speed <= 0) {
            return maxCooldown;
        }

        const cappedSpeed = Math.min(speed, 120);
        const ratio = cappedSpeed / 120;
        return Math.round(maxCooldown - ratio * (maxCooldown - minCooldown));
    };

    const startCooldown = () => {
        if (!player) {
            return;
        }
        setCooldownRemaining(calculateCooldownDuration(player.speed));
    };

    useEffect(() => {
        if (cooldownRemaining <= 0) {
            return;
        }

        const timer = setInterval(() => {
            setCooldownRemaining(prev => {
                const next = prev - 1000;
                return next > 0 ? next : 0;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [cooldownRemaining]);

    const isOnCooldown = cooldownRemaining > 0;
    const cooldownSeconds = Math.ceil(cooldownRemaining / 1000);

    const useAbility = (ability) => {
        if (!player || !enemy || isOnCooldown) {
            return;
        }

        const callback = abilityCallbacks[ability];
        if (typeof callback !== 'function') {
            log(`Ability ${ability} is not available.`);
            return;
        }

        const msg = callback(player, enemy);
        setPlayer(player);
        setEnemy(enemy);
        log(msg);
        startCooldown();
    };

    const handleAttack = () => {
        if (!player || !enemy || isOnCooldown) {
            return;
        }

        const dam = Math.max(1, player.attack - enemy.defense);
        enemy.setStat('hp', enemy.hp - dam);
        setEnemy(enemy);
        log(`${player.name} attacked ${enemy.name} for ${dam} damage!`);
        startCooldown();
    };
    useEffect(() => {
    });
    const getEnemy = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(response => response.json())
            .then(async data => {
                const randomIndex = Math.floor(Math.random() * data.results.length);
                const name = data.results[randomIndex]?.name;
                const enemyPromise = new PokemonClass(name)
                enemyPromise.then((enemyInstance) => {
                    setEnemy(enemyInstance)
                });

            });
    }
    useEffect(() => {
        getEnemy();
        const playerPromise = new PokemonClass('pikachu')
        playerPromise.then((playerInstance) => {
            setPlayer(playerInstance)
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
            <button
                className='btn btn-primary me-2 mb-4'
                onClick={handleAttack}
                disabled={!player || !enemy || isOnCooldown}
            >
                {isOnCooldown ? `Attack (cooldown ${cooldownSeconds}s)` : 'Attack'}
            </button>
            {
                player?.abilities.map(ab => (
                    <button
                        key={ab}
                        className='btn btn-primary me-2 mb-4'
                        onClick={() => useAbility(ab.replace('-', '_'))}
                        disabled={isOnCooldown}
                    >
                        {isOnCooldown ? `Use ${ab} Ability (cooldown ${cooldownSeconds}s)` : `Use ${ab} Ability`}
                    </button>
            {!gamestate && (

                <button className='btn btn-primary me-2 mb-4' onClick={() => {
                    const dam = Math.max(1, player.attack - enemy.defense);
                    enemy.setStat('hp', enemy.hp - dam);
                    setEnemy(enemy);
                    log(`${player.name} attacked ${enemy.name} for ${dam} damage!`);
                    if (enemy.hp <= 0) {
                        log(`${enemy.name} has fainted! ${player.name} wins!`);
                        setGamestate('won');
                    }
                }
                }>Attack</button>
            )}
            {
                !gamestate && player?.abilities.map(ab => (
                    <button key={ab} className='btn btn-primary me-2 mb-4' onClick={() => useAbility(ab.replace('-', '_'), player, enemy, log)}>Use {ab} Ability</button>
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
                    }}>Capture {enemy.name}</button>

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

            {isOnCooldown && (
                <div className="text-muted mb-3">
                    Actions available in {cooldownSeconds} second{cooldownSeconds === 1 ? '' : 's'}.
                </div>
            )}

            {messages && <Console messages={messages} />}
        </div>
    );
}
