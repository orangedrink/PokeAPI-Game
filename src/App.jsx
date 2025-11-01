import React, { useState, useEffect, use } from 'react';
import logo from '../ui/pokeapi_256.png';
import '../ui/game-theme.css';
import PokemonClass from '../pokemon.js';
import Pokemon from './components/Pokemon.jsx';
import Console from './components/Console.jsx';
import abilityCallbacks from '../ability_callback.js';
import Buttons from './components/Buttons.jsx';
import Deck from './components/Deck.jsx';
export default function App() {
    const [enemy, setEnemy] = useState(null);
    const [player, setPlayer] = useState(null);
    const [playerMessages, setPlayerMessages] = useState([]);
    const [enemyMessages, setEnemyMessages] = useState([]);
    const [gamestate, setGamestate] = useState('');
    const [cooldown, setCooldown] = useState(false);
    const [intervalId, setIntervalId] = useState(false);
    const PLAYERS_ARRAY = localStorage.getItem('playersArray') ? JSON.parse(localStorage.getItem('playersArray')) : ['melmetal-gmax', 'pikachu', 'bulbasaur', 'squirtle'];
    const [playersArray, setPlayersArray] =
        useState(PLAYERS_ARRAY);
    const log = (msg, card, msgtype) => {
        console.log(msg);
        let msgObj = {
            text: msg,
            type: msgtype || 'info'
        };
        if (card === 'player') {
            setPlayerMessages(prev => [...prev, msgObj]);
        } else if (card === 'enemy') {
            setEnemyMessages(prev => [...prev, msgObj]);
        }
    }
    const useAbility = ((ability) => {
        setCooldown(true);
        setTimeout(() => setCooldown(false), 3000 - (player.speed * 20));
        const msg = abilityCallbacks[ability](player, enemy);
        setPlayer(player);
        setEnemy(enemy);
        log(msg, 'player');
    });
    const setEnemyClass = (enemyInstance, player) => {
        setEnemy(enemyInstance, player);
        setIntervalId(setInterval(() => {
            //console.log('enemy timer tick ' + player.hp);
            player.hp ? enemyTimer(enemyInstance, player) : null;
        }, 8000 - (enemyInstance.speed * 30)));

    }
    const getEnemy = (player, enemy) => {
        setCooldown(false);
        if (enemy) {
            setEnemyClass(enemy, player);
        } else {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
                .then(response => response.json())
                .then(async data => {
                    const randomIndex = Math.floor(Math.random() * data.results.length);
                    const enemyPromise = new PokemonClass(data.results[randomIndex]?.name)
                    enemyPromise.then((enemyInstance) => {
                        setEnemyClass(enemyInstance, player);
                        log(`A wild ${enemyInstance.name} has appeared`, 'enemy');

                    });
                });
        }
    }
    const lose = (enemy, player) => {
        setTimeout(() => {
            log(`${player?.name} has fainted! ${enemy?.name} wins!`, 'player');
        }, 2000)
        setGamestate('lost');
    }
    const enemyTimer = (enemy, player) => {
        const chance = Math.random();
        if (chance < 0.25 && enemy.abilities.length > 0) {
            let ability = enemy.abilities[Math.floor(Math.random() * enemy.abilities.length)];
            const msg = abilityCallbacks[ability.replace('-', '_')](enemy, player);
            log(msg, 'enemy');
            setPlayer(player);
            setEnemy(enemy);
        } else {
            let dam = enemy.attack - player.defense
            dam = dam > 1 ? dam : 1;
            log(`${enemy?.name} attacks!`, 'enemy');
            player.hp && log(`-${dam}`, 'player', 'damage');
            player.setStat('hp', player.hp - dam);
            setPlayer(player);
        }
        if (player.hp <= 0) {
            if (!getNextPlayer(player?.name)) {
                lose(enemy, player);
            } else {
                const playerPromise = new PokemonClass(getNextPlayer(player?.name));
                playerPromise.then((playerInstance) => {
                    setPlayer(playerInstance)
                    getEnemy(playerInstance, enemy);
                    log(`${player?.name} has fainted! you send out ${playerInstance?.name}!`, 'player');
                });
            }
        } else {
        }
    }
    const getNextPlayer = (currentPlayer) => {
        if (playersArray.indexOf(currentPlayer) === playersArray.length - 1) {
            return false;
        }
        const player = playersArray[playersArray.indexOf(currentPlayer) + 1] || playersArray[0];
        return player;

    }
    useEffect(() => {
        const playerPromise = new PokemonClass(PLAYERS_ARRAY[0])
        playerPromise.then((playerInstance) => {
            setPlayer(playerInstance)
            getEnemy(playerInstance);
        });
        return () => clearInterval(intervalId);
    }, []);

    const playerAttack = () => {
        const dam = Math.max(1, player.attack - enemy.defense);
        setCooldown(true);
        setTimeout(() => {
            setCooldown(false)
        }, 4000 - (player.speed * 20));
        enemy.setStat('hp', enemy.hp - dam);
        log(`${player.name} attacks!`, 'player',);
        log(`-${dam}`, 'enemy', 'damage');
        if (enemy.hp <= 0) {
            setGamestate('won');
            setTimeout(() => {
                log(`${enemy.name} has fainted! ${player.name} wins!`, 'player');
                clearInterval(intervalId);
            }, 2000)
        }
    }

    const capture = () => {
        setGamestate('');
        clearInterval(intervalId);
        setPlayersArray(prev => [...prev, enemy.name]);
        localStorage.setItem('playersArray', JSON.stringify([...playersArray, enemy.name]));
        const playerPromise = new PokemonClass(playersArray[0])
        playerPromise.then((playerInstance) => {
            setPlayer(playerInstance)
            getEnemy(playerInstance);
            setEnemyMessages([]);
        });
    }

    const continueGame = () => {
        setGamestate('');
        clearInterval(intervalId);
        setPlayersArray(playersArray);
        const playerPromise = new PokemonClass(playersArray[0])
        playerPromise.then((playerInstance) => {
            setPlayer(playerInstance)
            getEnemy(playerInstance);
            setEnemyMessages([]);
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
            <div className='button-panel'>
                {!gamestate ? (
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
                ) : gamestate === 'won' ? (
                    <div>
                        <strong className='victory-title'>You win!&nbsp;
                            <button className='action-button' onClick={() => capture()}
                            >Capture {enemy?.name}</button>
                            <button className='action-button' onClick={() => continueGame()}>Continue without {enemy?.name}</button>
                        </strong>
                    </div>
                ) : gamestate === 'lost' ? (
                    <div>
                        <h2 className='defeat-title'>You lost!&nbsp;
                            <button className='action-button' onClick={() => continueGame()}>Try Again</button>
                        </h2>
                    </div>
                ) : null}
            </div>
            <div className='battle-stage'>
                <Pokemon pokemon={player} className="player" player={true} messages={playerMessages} />
                <Pokemon key={enemy?.name} className="enemy" pokemon={enemy} player={false} messages={enemyMessages} />
            </div>
            <Deck playersArray={playersArray} activePokemon={player?.name} setPlayersArray={setPlayersArray} />
        </div>
    );
}
