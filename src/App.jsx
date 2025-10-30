import React, { useState, useEffect, use } from 'react';
import logo from '../ui/pokeapi_256.png';
import '../ui/game-theme.css';
import PokemonClass from '../pokemon.js';
import Pokemon from './components/Pokemon.jsx';
import Console from './components/Console.jsx';
import abilityCallbacks from '../ability_callback.js';
import Buttons from './components/Buttons.jsx';

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
    const timer = (enemy) => {
        //log(`${enemy?.name} is ready to fight!`);
        console.log(`${enemy?.name} is ready to fight!`);
    }
    useEffect(() => {
        getEnemy();
        const playerPromise = new PokemonClass('pikachu')
        playerPromise.then((playerInstance) => {
            setPlayer(playerInstance)
        });
        const id = setInterval(timer, 10000);
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
    const capture = () => {
        setGamestate('');
        const playerPromise = new PokemonClass(enemy.name)
        getEnemy();
        playerPromise.then((playerInstance) => {
            setPlayer(playerInstance)
        });
    }
    const continueGame = () => {
        setGamestate('');
        const playerPromise = new PokemonClass(player?.name)
        getEnemy();
        playerPromise.then((playerInstance) => {
            setPlayer(playerInstance)
        });
    }
    return (
        <div className='game-app'>
            <header className="game-header">
                <div className="header-content">
                    <img src={logo} alt="PokéAPI" height="40" className="header-logo" style={{ width: 'auto', height: '40px' }} />
                    <h1 className="header-title">The PokeAPI Game</h1>
                </div>
            </header>
            <div className='battle-stage'>
                <Pokemon pokemon={enemy} />
                <Pokemon pokemon={player} />
            </div>
            <div className='button-panel'>
                {!gamestate && (
                    <Buttons
                        player={player}
                        enemy={enemy}
                        gamestate={gamestate}
                        cooldown={cooldown}
                        playerAttack={playerAttack}
                        useAbility={useAbility}
                        setGamestate={setGamestate}
                        capture={capture}
                        continue={continueGame}
                    />
                )}
            </div>
            {messages && <Console messages={messages} />}
        </div>
    );
}
