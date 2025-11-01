import { useState, useEffect } from 'react';

export default function Console(props) {

    return (
        <div className={`console-panel ${props.card}-console`}>
            <ul className='console-messages'>
                {props.messages?.map((msg, i) => (
                    <li key={i} className={`console-message ${msg.type}`}>{msg.text}</li>
                ))}
            </ul>
        </div>
    );
}
