import { useState, useEffect } from 'react';

export default function Buttons(props) {

    return (
        <div>
            <button className='action-button' onClick={() => props.playerAttack()} disabled={props.cooldown}>Attack</button>
            {props.player?.abilities.map(ab => (
                <button key={ab} disabled={props.cooldown} className='action-button' onClick={() => props.useAbility(ab.replace('-', '_'), props.player, props.enemy)}>Use {ab} Ability</button>
            ))}
            <button className='action-button' onClick={()=>props.continue()} disabled={props.cooldown}>Flee</button>
        </div>
    );
}
