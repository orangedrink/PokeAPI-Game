import { useState, useEffect } from 'react';
import PokemonClass from '../../pokemon.js';
import Console from './Console.jsx';

export default function Pokemon(props) {

    return (
        <div className={props.player ? 'pokemon-card player' : 'pokemon-card enemy'}>
            {props.pokemon ? (
                <div className='pokemon-card-body'>
                    <h4 className='pokemon-name'>{props.pokemon.name}</h4>
                    <img className='pokemon-image' src={props.pokemon?.sprites?.front_default} alt={props.pokemon.name} />
                    <ul className='pokemon-stats'>
                        <li className='pokemon-stat'>HP: {props.pokemon.hp}</li>
                        <li className='pokemon-stat'>Speed: {props.pokemon.speed}</li>
                        <li className='pokemon-stat'>Attack: {props.pokemon.attack}</li>
                        <li className='pokemon-stat'>Defense: {props.pokemon.defense}</li>
                        <li className='pokemon-stat'>Abilities: {props.pokemon.abilities?.join(', ')}</li>
                    </ul>
                    <Console key={props.pokemon.id} messages={props.messages} />
                </div>
            ) : (
                <p className='loading-message'>Loading data for {name}...</p>
            )}
        </div>
    );
}
