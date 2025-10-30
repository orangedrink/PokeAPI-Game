import { useState, useEffect } from 'react';

export default function Buttons(props) {

    return (
        <>
            <button className='action-button' onClick={() => props.playerAttack()} disabled={props.cooldown}>Attack</button>
            {props.player?.abilities.map(ab => (
                <button key={ab} disabled={props.cooldown} className='action-button' onClick={() => props.useAbility(ab.replace('-', '_'), props.player, props.enemy)}>Use {ab} Ability</button>
            ))}

            <h2 className='victory-title'>You win!</h2>
            <button className='action-button' onClick={() => props.capture()}
            >Capture {props.enemy?.name}</button>

            <button className='action-button' onClick={() => props.continue()}>Continue with {props.player?.name}</button>
        </>
    );
}
