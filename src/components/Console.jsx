import { useState, useEffect } from 'react';

export default function Console(props) {

    return (
        <div className='console-panel'>
            <ul className='console-messages'>
                {props.messages?.map((msg, i) => (
                    <li key={i} className='console-message'>{msg}</li>
                ))}
            </ul>
        </div>
    );
}
