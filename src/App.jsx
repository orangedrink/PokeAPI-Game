import React, { useState, useEffect, use } from 'react';
import logo from '../ui/pokeapi_256.png';
import '../ui/game-theme.css';
import PokemonClass from '../pokemon.js';
import Pokemon from './components/Pokemon.jsx';
import Console from './components/Console.jsx';
import abilityCallbacks from '../ability_callback.js';
import Buttons from './components/Buttons.jsx';
import Deck from './components/Deck.jsx';

// Pure JS explosion animation at a screen coordinate (x, y)
// Usage: explodeAt( x, y, { radius?: number, particles?: number, duration?: number, color?: string, sparkColor?: string } )
export function explodeAt(x, y, opts = {}) {
    const radius = Math.max(10, opts.radius ?? 60);
    const particles = Math.max(4, Math.min(40, opts.particles ?? 12));
    const duration = Math.max(200, opts.duration ?? 700);
    const ringColor = opts.color ?? 'rgba(255, 165, 0, 0.9)'; // orange
    const sparkColor = opts.sparkColor ?? '#fff';

    // Allow caller to target player/enemy elements instead of passing coords
    // Uses the center of the relevant '.pokemon-card' image as the origin.
    try {
        const targetFlag = opts.target ?? opts.side; // accept either key
        if (targetFlag === 'player' || targetFlag === 'enemy') {
            let el = null;
            if (targetFlag === 'player') {
                el = document.querySelector('.pokemon-card.player .pokemon-image')
                    || document.querySelector('.pokemon-card.player')
                    || document.querySelector('.battle-stage .pokemon-card:nth-child(1) .pokemon-image');
            } else {
                el = document.querySelector('.pokemon-card.enemy .pokemon-image')
                    || document.querySelector('.pokemon-card.enemy')
                    || document.querySelector('.battle-stage .pokemon-card:nth-child(2) .pokemon-image');
            }
            if (el) {
                const rect = el.getBoundingClientRect();
                x = rect.left + rect.width / 2;
                y = rect.top + rect.height / 2;
            }
        }
    } catch { }

    // Container positioned around the coordinate
    const size = radius * 2;
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.left = `${Math.round(x - radius)}px`;
    container.style.top = `${Math.round(y - radius)}px`;
    container.style.width = `${size}px`;
    container.style.height = `${size}px`;
    container.style.pointerEvents = 'none';
    container.style.zIndex = 9999;

    // Ring pulse
    const ring = document.createElement('div');
    Object.assign(ring.style, {
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: `3px solid ${ringColor}`,
        boxShadow: `0 0 18px ${ringColor}`,
        opacity: '0.9',
    });
    container.appendChild(ring);

    // Animate ring via Web Animations API
    ring.animate([
        { transform: 'scale(0.2)', opacity: 0.9 },
        { transform: 'scale(1.15)', opacity: 0.0 }
    ], { duration, easing: 'cubic-bezier(.22,.61,.36,1)', fill: 'forwards' });

    // Particles
    for (let i = 0; i < particles; i++) {
        const p = document.createElement('div');
        const sz = Math.max(2, Math.min(8, Math.round(radius / 10)));
        Object.assign(p.style, {
            position: 'absolute',
            left: `${radius - sz / 2}px`,
            top: `${radius - sz / 2}px`,
            width: `${sz}px`,
            height: `${sz}px`,
            borderRadius: '50%',
            background: sparkColor,
            boxShadow: `0 0 8px ${sparkColor}`,
        });
        container.appendChild(p);

        // Random direction and distance
        const angle = (Math.PI * 2 * i) / particles + Math.random() * 0.4 - 0.2;
        const dist = radius * (0.55 + Math.random() * 0.6);
        const dx = Math.cos(angle) * dist;
        const dy = Math.sin(angle) * dist;

        // Animate particle
        p.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${dx}px, ${dy}px) scale(0.6)`, opacity: 0 }
        ], { duration, easing: 'cubic-bezier(.22,.61,.36,1)', fill: 'forwards' });
    }

    document.body.appendChild(container);
    // Cleanup after animation
    window.setTimeout(() => {
        container.remove();
    }, duration + 60);
}
export default function App() {
    const [enemy, setEnemy] = useState(null);
    const [player, setPlayer] = useState(null);
    const [playerMessages, setPlayerMessages] = useState([]);
    const [enemyMessages, setEnemyMessages] = useState([]);
    const [gamestate, setGamestate] = useState('');
    const [cooldown, setCooldown] = useState(false);
    const [intervalIdEnemy, setIntervalIdEnemy] = useState(false);
    const [intervalIdPlayer, setIntervalIdPlayer] = useState(false);
    const PLAYERS_ARRAY = localStorage.getItem('playersArray') ? JSON.parse(localStorage.getItem('playersArray')) : ['pikachu', 'bulbasaur', 'squirtle'];
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
        log(msg.attackerMsg, 'player');
        log(msg.affectedMsg.text, msg.affectedMsg.affected === 'attacker' ? 'player' : 'enemy', msg.affectedMsg.type || 'damage');
    });
    const setEnemyClass = (enemyInstance, player) => {
        setEnemy(enemyInstance, player);
        setIntervalIdEnemy(setInterval(() => {
            //console.log('enemy timer tick ' + player.hp);
            enemyInstance.hp > 0 && player.hp > 0 ? enemyTimer(enemyInstance, player) : null;
        }, enemyInstance.getIntervalDelay()));
        clearInterval(intervalIdPlayer);
        setIntervalIdPlayer(setTimeout(() => {
            playerAttack(player, enemyInstance);
        }, 1500));

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
        if (chance < .2 && enemy.abilities.length > 0) {
            let ability = enemy.abilities[Math.floor(Math.random() * enemy.abilities.length)];
            const msg = abilityCallbacks[ability.replace('-', '_')](enemy, player);
            log(msg.attackerMsg, 'enemy');
            log(msg.affectedMsg.text, msg.affectedMsg.affected === 'attacker' ? 'enemy' : 'player', msg.affectedMsg.type || 'damage');
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
            clearInterval(intervalIdPlayer);
            if (!getNextPlayer(player?.name)) {
                lose(enemy, player);
            } else {
                const playerPromise = new PokemonClass(getNextPlayer(player?.name));
                playerPromise.then((playerInstance) => {
                    setPlayer(playerInstance)
                    explodeAt(null, null, { side: 'player', radius: 100, particles: 30, duration: 800, color: 'rgba(255,0,0,0.9)', sparkColor: '#ff0' });
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
        return () => {
            clearInterval(intervalIdEnemy);
            clearInterval(intervalIdPlayer);
        };
    }, []);

    const playerAttack = (player, enemy) => {
        const dam = Math.max(1, player.attack - enemy.defense);
        enemy.setStat('hp', enemy.hp - dam);
        log(`${player.name} attacks!`, 'player',);
        log(`-${dam}`, 'enemy', 'damage');
        setTimeout(() => {
            player.hp > 0 && enemy.hp > 0 ? playerAttack(player, enemy) : null;
        }, player.getIntervalDelay());
        if (enemy.hp <= 0) {
            explodeAt(null, null, { side: 'enemy', radius: 100, particles: 30, duration: 800, color: 'rgba(255,0,0,0.9)', sparkColor: '#ff0' });
            setGamestate('won');
            setTimeout(() => {
                log(`${enemy.name} has fainted! ${player.name} wins!`, 'player');
                clearInterval(intervalIdEnemy);
            }, 2000)
        }
    }

    const capture = () => {
        setGamestate('');
        clearInterval(intervalIdEnemy);
        if (!playersArray.includes(enemy.name)) {
            localStorage.setItem('playersArray', JSON.stringify([...playersArray, enemy.name]));
            setPlayersArray(prev => [...prev, enemy.name]);
        }
        const playerPromise = new PokemonClass(playersArray[0])
        playerPromise.then((playerInstance) => {
            setPlayer(playerInstance)
            getEnemy(playerInstance);
            setEnemyMessages([]);
        });
    }

    const continueGame = () => {
        setGamestate('');
        player.setStat('hp', 0);
        setPlayer(player)
        clearInterval(intervalIdEnemy);
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
                        <button className='action-button' onClick={() => capture()}
                        >Capture {enemy?.name}</button>
                        <button className='action-button' onClick={() => continueGame()}>Continue without {enemy?.name}</button>
                    </div>
                ) : gamestate === 'lost' ? (
                    <div>
                        <button className='action-button' onClick={() => continueGame()}>Try Again</button>
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
