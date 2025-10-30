import { useState, useEffect } from 'react';
import PokemonClass from '../../pokemon.js';

export default function Pokemon(props) {

    return (
        <div className='container p-4 rounded bg-warning bg-opacity-10 flex-grow-1 mb-4 w-50'>
            {props.pokemon ? (
                <div>
                    <h2>{props.pokemon.name}</h2>
                    <img src={props.pokemon?.sprites?.front_default||'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png'} alt={props.pokemon.name} />
                    <ul>
                        <li>HP: {props.pokemon.hp}</li>
                        <li>Speed: {props.pokemon.speed}</li>
                        <li>Attack: {props.pokemon.attack}</li>
                        <li>Defense: {props.pokemon.defense}</li>
                        <li>Abilities: {props.pokemon.abilities?.join(', ')}</li>
                    </ul>
                </div>
            ) : (
                <p>Loading data for {name}...</p>
            )}
        </div>
    );
}
